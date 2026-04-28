import { useState } from "react";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputCheckbox from "../../common/inputs/InputCheckbox";
import DetailsHeader from "../../common/DetailsHeader";
import { useSelector } from "react-redux";
import DetailsListButton from "../../common/DetailsListButton";
import InputStringButton from "../../common/inputs/InputStringButton";


const EditUnit = ({ onEdit }) => {
  const unit = useSelector((state) => state.units.selected);

  const [name, setName] = useState(unit.name);
  const [icon, setIcon] = useState(unit.icon);
  const [tier, setTier] = useState(unit.tier);
  const [age, setAge] = useState(unit.age);
  const [type, setType] = useState(unit.type);

  const [unlocked, setUnlocked] = useState(unit.unlocked || "");
  const [obsolete, setObsolete] = useState(unit.obsolete || "");
  const [upgrades, setUpgrades] = useState(unit.upgrades || "");
  const [replaces, setReplaces] = useState(unit.replaces || "");

  const [costProduction, setCostProduction] = useState(unit.cost?.production || 0);
  const [costScalable, setCostScalable] = useState(unit.cost?.scalable || false);
  const [costGold, setCostGold] = useState(unit.cost?.gold || 0);
  const [costMaintenance, setCostMaintenance] = useState(unit.cost?.maintenance || 0);

  const [statsMovement, setStatsMovement] = useState(unit.stats?.movement || 0);
  const [statsStrength, setStatsStrength] = useState(unit.stats?.strength || 0);
  const [statsSight, setStatsSight] = useState(unit.stats?.sight || 0);
  const [statsRange, setStatsRange] = useState(unit.stats?.range || 0);
  const [statsRanged, setStatsRanged] = useState(unit.stats?.ranged || 0);
  const [statsBombard, setStatsBombard] = useState(unit.stats?.bombard || 0);

  const [attributeItem, setAttributeItem] = useState("");
  const [attributes, setAttributes] = useState(unit.attributes || []);

  const [abilityItem, setAbilityItem] = useState("");
  const [abilities, setAbilities] = useState(unit.abilities || []);

  const [actionItem, setActionItem] = useState("");
  const [actions, setActions] = useState(unit.actions || []);

  const [isUnique, setIsUnique] = useState(unit.unique?.is_unique || false);
  const [civilization, setCivilization] = useState(unit.unique?.civilization || "");
  const [replacesUnit, setReplacesUnit] = useState(unit.unique?.replaces || "");

  const [bonusItem, setBonusItem] = useState("");
  const [bonuses, setBonuses] = useState(unit.unique?.bonuses || []);

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(unit.notes || []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedUnit = {
      ...unit,
      name,
      icon,
      tier,
      age,
      type,
      unlocked,
      obsolete,
      attributes,
      abilities,
      actions,
      cost: {
        production: costProduction,
        scalable: costScalable,
        gold: costGold,
        maintenance: costMaintenance
      },
      stats: {
        movement: statsMovement,
        strength: statsStrength,
        sight: statsSight,
        range: statsRange,
        ranged: statsRanged,
        bombard: statsBombard
      },
      upgrades,
      replaces,
      unique: {
        is_unique: isUnique,
        civilization,
        replaces: replacesUnit,
        bonuses
      },
      notes
    };
    onEdit(updatedUnit);
  };

  const addItem = (item, list, setter, clearSetter) => {
        if (!item) return;
        setter([...list, item]);
        clearSetter("");
    };

    const removeItem = (index, list, setter) => {
        setter(list.filter((_, i) => i !== index));
    };

  return (
    <form className="m-2" onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-lg-3">
          <DetailsHeader label="Details" />
          <div className="row mt-3">
            <InputString label="Name" input={name} setInput={setName} placeholder="Add Name..." />
            <InputString label="Icon" input={icon} setInput={setIcon} placeholder="Add Icon..." />
            <InputNumber label="Tier" input={tier} setInput={setTier} placeholder="Add Tier..." />
            <InputString label="Age" input={age} setInput={setAge} placeholder="Add Age..." />
            <InputString label="Type" input={type} setInput={setType} placeholder="Add Type..." />
            <InputString label="Unlocked By" input={unlocked} setInput={setUnlocked} placeholder="Add Unlock By..." />
            <InputString label="Obsolete By" input={obsolete} setInput={setObsolete} placeholder="Add Obsolete By..." />
            <InputString label="Upgrades" input={upgrades} setInput={setUpgrades} placeholder="Add Upgrades..." />
            <InputString label="Replaces" input={replaces} setInput={setReplaces} placeholder="Add Replaces..." />
          </div>
        </div>
        <div className="col-lg-3">
          <DetailsHeader label="Cost" />
          <div className="row mt-3">
            <InputNumber label="Production" input={costProduction} setInput={setCostProduction} placeholder="Add Production Cost..." />
            <InputCheckbox label="Scalable" input={costScalable} setInput={setCostScalable} />
            <InputNumber label="Gold" input={costGold} setInput={setCostGold} placeholder="Add Gold Cost..." />
            <InputNumber label="Maintenance" input={costMaintenance} setInput={setCostMaintenance} placeholder="Add Maintenance Cost..." />
          </div>
        </div>
        <div className="col-lg-3">
          <DetailsHeader label="Stats" />
          <div className="row mt-3">
            <InputNumber label="Movement" input={statsMovement} setInput={setStatsMovement} placeholder="Add Movement..." />
            <InputNumber label="Strength" input={statsStrength} setInput={setStatsStrength} placeholder="Add Strength..." />
            <InputNumber label="Sight" input={statsSight} setInput={setStatsSight} placeholder="Add Sight..." />
            <InputNumber label="Range" input={statsRange} setInput={setStatsRange} placeholder="Add Range..." />
            <InputNumber label="Ranged" input={statsRanged} setInput={setStatsRanged} placeholder="Add Ranged..." />
            <InputNumber label="Bombard" input={statsBombard} setInput={setStatsBombard} placeholder="Add Bombard..." />
          </div>
        </div>
        <div className="col-lg-3">
            <div className="mb-3">
                <DetailsHeader label="Attributes" />
                <div className="mt-3">
                    <InputStringButton
                        label="Attributes"
                        placeholder="Add Attribute..."
                        input={attributeItem}
                        setInput={setAttributeItem}
                        onAdd={() => addItem(attributeItem, attributes, setAttributes, setAttributeItem)}
                    />
                </div>
                <DetailsListButton 
                    list={attributes.map(attributeItem => attributeItem)}
                    onRemove={(index) => removeItem(index, attributes, setAttributes)}
                />
            </div>
        </div>
        <div className="col-lg-3">
            <div className="mb-3">
                <DetailsHeader label="Abilities" />
                <div className="mt-3">
                    <InputStringButton
                        label="Ability"
                        placeholder="Add Ability..."
                        input={abilityItem}
                        setInput={setAbilityItem}
                        onAdd={() => addItem(abilityItem, abilities, setAbilities, setAbilityItem)}
                    />
                </div>
                <DetailsListButton 
                    list={abilities.map(abilityItem => abilityItem)}
                    onRemove={(index) => removeItem(index, abilities, setAbilities)}
                />
            </div>
        </div>
        <div className="col-lg-3">
            <div className="mb-3">
                <DetailsHeader label="Actions" />
                <div className="mt-3">
                    <InputStringButton
                        label="Actions"
                        placeholder="Add Action..."
                        input={actionItem}
                        setInput={setActionItem}
                        onAdd={() => addItem(actionItem, actions, setActions, setActionItem)}
                    />
                </div>
                <DetailsListButton 
                    list={actions.map(actionItem => actionItem)}
                    onRemove={(index) => removeItem(index, actions, setActions)}
                />
            </div>
        </div>
        <div className="col-lg-3">
            <div className="mb-3">
                <DetailsHeader label="Unique" />
                <div className="mt-3">
                    <InputCheckbox label="Is Unique" input={isUnique} setInput={setIsUnique} />
                    <InputString label="Civilization" input={civilization} setInput={setCivilization} placeholder="Add Civilization..." />
                    <InputString label="Replaces" input={replacesUnit} setInput={setReplacesUnit} placeholder="Add Replaces..." />
                    <InputStringButton
                        label="Bonus"
                        placeholder="Add Bonus..."
                        input={bonusItem}
                        setInput={setBonusItem}
                        onAdd={() => addItem(bonusItem, bonuses, setBonuses, setBonusItem)}
                    />
                </div>
                <DetailsListButton 
                    list={bonuses.map(bonusItem => bonusItem)}
                    onRemove={(index) => removeItem(index, bonuses, setBonuses)}
                />
            </div>
        </div>
        <div className="col-lg-3">
            <div className="mb-3">
                <DetailsHeader label="Notes" />
                <div className="mt-3">
                    <InputStringButton
                        label="Note"
                        placeholder="Add Note..."
                        input={note}
                        setInput={setNote}
                        onAdd={() => addItem(note, notes, setNotes, setNote)}
                    />
                </div>
                <DetailsListButton 
                    list={notes.map(noteItem => noteItem)}
                    onRemove={(index) => removeItem(index, notes, setNotes)}
                />
            </div>
        </div>
      </div>
      <hr />
      <input type="submit" value="Save Unit" className="btn btn-sm btn-outline-light" />
    </form>
  );
};

export default EditUnit;
