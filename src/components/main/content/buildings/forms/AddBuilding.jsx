import { useState } from "react";

import DetailsHeader from "../../common/DetailsHeader";
import InputString from "../../common/inputs/InputString";
import InputStringButton from "../../common/inputs/InputStringButton";
import InputNumber from "../../common/inputs/InputNumber";
import InputCheckbox from "../../common/inputs/InputCheckbox";
import DetailsListButton from "../../common/DetailsListButton";

const AddBuilding = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const [age, setAge] = useState("");

    const [costProduction, setCostProduction] = useState(0);
    const [costGold, setCostGold] = useState(0);

    const [maintenanceGold, setMaintenanceGold] = useState(0);
    const [maintenanceHappiness, setMaintenanceHappiness] = useState(0);

    const [pillage, setPillage] = useState("");
    const [unlocked, setUnlocked] = useState("");
    const [type, setType] = useState("");
    const [ageless, setAgeless] = useState(false);
    const [unique, setUnique] = useState(false);
    const [uniqueTo, setUniqueTo] = useState("");

    const [placementItem, setPlacementItem] = useState("");
    const [placement, setPlacement] = useState([]);

    const [baseItem, setBaseItem] = useState("");
    const [baseYields, setBaseYields] = useState([]);

    const [adjacencyItem, setAdjacencyItem] = useState("");
    const [adjacencyYields, setAdjacencyYields] = useState([]);

    const [effectItem, setEffectItem] = useState("");
    const [effectYields, setEffectYields] = useState([]);

    const [tagItem, setTagItem] = useState("");
    const [tags, setTags] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const building = {
            name,
            icon,
            age,
            cost: {
                production: costProduction,
                gold: costGold
            },
            maintenance: {
                gold: maintenanceGold,
                happiness: maintenanceHappiness
            },
            pillage,
            unlocked,
            type,
            placement,
            ageless,
            unique,
            unique_to: uniqueTo,
            yields: {
                base: baseYields,
                adjacency: adjacencyYields,
                effects: effectYields
            },
            tags
        };

        onAdd(building);
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
                        <InputString label="Age" input={age} setInput={setAge} placeholder="Add Age..." />
                        <InputNumber label="Prod Cost" input={costProduction} setInput={setCostProduction} placeholder="Add Production..." />
                        <InputNumber label="Gold Cost" input={costGold} setInput={setCostGold} placeholder="Add Gold..." />
                        <InputNumber label="Maint Gold" input={maintenanceGold} setInput={setMaintenanceGold} placeholder="Add Gold..." />
                        <InputNumber label="Maint Happy" input={maintenanceHappiness} setInput={setMaintenanceHappiness} placeholder="Add Happiness..." />
                        <InputString label="Pillage" input={pillage} setInput={setPillage} placeholder="Add Pillage..." />
                        <InputString label="Unlocked" input={unlocked} setInput={setUnlocked} placeholder="Add Unlock..." />
                        <InputString label="Type" input={type} setInput={setType} placeholder="Add Type..." />
                        <InputCheckbox label="Ageless" input={ageless} setInput={setAgeless} />
                        <InputCheckbox label="Unique" input={unique} setInput={setUnique} />
                        <InputString label="Unique To" input={uniqueTo} setInput={setUniqueTo} placeholder="Add Unique To..." />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="mb-3">
                        <DetailsHeader label="Placement" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Requires"
                                placeholder="Add Civic..."
                                input={placementItem}
                                setInput={setPlacementItem}
                                onAdd={() => addItem(placementItem, placement, setPlacement, setPlacementItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={placement.map(placementItem => placementItem)}
                            onRemove={(index) => removeItem(index, placement, setPlacement)}
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="mb-3">
                        <DetailsHeader label="Tags" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Tag"
                                placeholder="Add Tag..."
                                input={tagItem}
                                setInput={setTagItem}
                                onAdd={() => addItem(tagItem, tags, setTags, setTagItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={tags.map(tagItem => tagItem)}
                            onRemove={(index) => removeItem(index, tags, setTags)}
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div>
                        <DetailsHeader label="Yields" />
                        <div className="row mt-3">
                            <InputStringButton
                                label="Base"
                                placeholder="Add Base Yield..."
                                input={baseItem}
                                setInput={setBaseItem}
                                onAdd={() => addItem(baseItem, baseYields, setBaseYields, setBaseItem)}
                            />
                            <InputStringButton
                                label="Adjacency"
                                placeholder="Add Adjacency Yield..."
                                input={adjacencyItem}
                                setInput={setAdjacencyItem}
                                onAdd={() => addItem(adjacencyItem, adjacencyYields, setAdjacencyYields, setAdjacencyItem)}
                            />
                            <InputStringButton
                                label="Effects"
                                placeholder="Add Effects..."
                                input={effectItem}
                                setInput={setEffectItem}
                                onAdd={() => addItem(effectItem, effectYields, setEffectYields, setEffectItem)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    {baseYields.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Base" />
                        <DetailsListButton 
                            list={baseYields.map(yieldItem => yieldItem)}
                            onRemove={(index) => removeItem(index, baseYields, setBaseYields)}
                        />
                    </div>)}
                    {adjacencyYields.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Adjacency" />
                        <DetailsListButton 
                            list={adjacencyYields.map(yieldItem => yieldItem)}
                            onRemove={(index) => removeItem(index, adjacencyYields, setAdjacencyYields)}
                        />
                    </div>)}
                    {effectYields.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={effectYields.map(yieldItem => yieldItem)}
                            onRemove={(index) => removeItem(index, effectYields, setEffectYields)}
                        />
                    </div>)}
                </div>
            </div>
            <hr />
            <input type="submit" value="Save Building" className="btn btn-sm btn-outline-light" />
        </form>
    );
};

export default AddBuilding;
