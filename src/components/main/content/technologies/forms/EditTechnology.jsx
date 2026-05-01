import { useState } from "react";
import { useSelector } from "react-redux";

import DetailsHeader from "../../common/DetailsHeader";
import InputString from "../../common/inputs/InputString";
import InputStringLarge from "../../common/inputs/InputStringLarge";
import InputStringButton from "../../common/inputs/InputStringButton";
import InputNumber from "../../common/inputs/InputNumber";
import DetailsListButton from "../../common/DetailsListButton";

const EditTechnology = ({ onEdit }) => {
    const selectedTechnology = useSelector((state) => state.technologies.selected);
    const technology = selectedTechnology || {
        name: "",
        icon: "",
        age: "",
        level: 0,
        cost: 0,
        quote: { text: "", author: "" },
        requires: [],
        leads: [],
        unlocks: { units: [], wonders: [], buildings: [], effects: [], projects: [], actions: [] },
        mastery: { effects: [], buildings: [], wonders: [], actions: [] }
    };

    const [name, setName] = useState(technology.name || "");
    const [icon, setIcon] = useState(technology.icon || "");
    const [age, setAge] = useState(technology.age || "");
    const [level, setLevel] = useState(technology.level || 0);
    const [cost, setCost] = useState(technology.cost || 0);
    const [quoteText, setQuoteText] = useState(technology.quote?.text || "");
    const [quoteAuthor, setQuoteAuthor] = useState(technology.quote?.author || "");

    const [requireItem, setRequireItem] = useState("");
    const [requires, setRequires] = useState(technology.requires || []);

    const [leadItem, setLeadItem] = useState("");
    const [leads, setLeads] = useState(technology.leads || []);

    const [unlockUnitItem, setUnlockUnitItem] = useState("");
    const [unlockUnits, setUnlockUnits] = useState(technology.unlocks?.units || []);

    const [unlockWonderItem, setUnlockWonderItem] = useState("");
    const [unlockWonders, setUnlockWonders] = useState(technology.unlocks?.wonders || []);

    const [unlockBuildingItem, setUnlockBuildingItem] = useState("");
    const [unlockBuildings, setUnlockBuildings] = useState(technology.unlocks?.buildings || []);

    const [unlockEffectItem, setUnlockEffectItem] = useState("");
    const [unlockEffects, setUnlockEffects] = useState(technology.unlocks?.effects || []);

    const [unlockProjectItem, setUnlockProjectItem] = useState("");
    const [unlockProjects, setUnlockProjects] = useState(technology.unlocks?.projects || []);

    const [unlockActionItem, setUnlockActionItem] = useState("");
    const [unlockActions, setUnlockActions] = useState(technology.unlocks?.actions || []);

    const [masteryEffectItem, setMasteryEffectItem] = useState("");
    const [masteryEffects, setMasteryEffects] = useState(technology.mastery?.effects || []);

    const [masteryBuildingItem, setMasteryBuildingItem] = useState("");
    const [masteryBuildings, setMasteryBuildings] = useState(technology.mastery?.buildings || []);

    const [masteryWonderItem, setMasteryWonderItem] = useState("");
    const [masteryWonders, setMasteryWonders] = useState(technology.mastery?.wonders || []);

    const [masteryActionItem, setMasteryActionItem] = useState("");
    const [masteryActions, setMasteryActions] = useState(technology.mastery?.actions || []);

    const [tagItem, setTagItem] = useState("");
    const [tags, setTags] = useState(technology.tags || []);

    if (!selectedTechnology) {
        return <div className="m-3">No technology selected.</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedTechnology = {
            ...technology,
            name,
            icon,
            age,
            level,
            cost,
            quote: {
                text: quoteText,
                author: quoteAuthor
            },
            requires,
            leads,
            unlocks: {
                ...(technology.unlocks || {}),
                units: unlockUnits,
                wonders: unlockWonders,
                buildings: unlockBuildings,
                effects: unlockEffects,
                projects: unlockProjects,
                actions: unlockActions
            },
            mastery: {
                ...(technology.mastery || {}),
                effects: masteryEffects,
                buildings: masteryBuildings,
                wonders: masteryWonders,
                actions: masteryActions
            },
            tags
        };

        onEdit(updatedTechnology);
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
                <div className="col-lg-2">
                    <DetailsHeader label="Details" />
                    <div className="row mt-3">
                        <InputString label="Name" input={name} setInput={setName} placeholder="Add Name..." />
                        <InputString label="Icon" input={icon} setInput={setIcon} placeholder="Add Icon..." />
                        <InputString label="Age" input={age} setInput={setAge} placeholder="Add Age..." />
                        <InputNumber label="Level" input={level} setInput={setLevel} placeholder="Add Level..." />
                        <InputNumber label="Cost" input={cost} setInput={setCost} placeholder="Add Cost..." />
                        <InputStringLarge label="Quote Text" input={quoteText} setInput={setQuoteText} placeholder="Add Quote Text..." />
                        <InputString label="Quote Author" input={quoteAuthor} setInput={setQuoteAuthor} placeholder="Add Quote Author..." />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div>
                        <DetailsHeader label="Unlocks" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Unit"
                                placeholder="Add Unit..."
                                input={unlockUnitItem}
                                setInput={setUnlockUnitItem}
                                onAdd={() => addItem(unlockUnitItem, unlockUnits, setUnlockUnits, setUnlockUnitItem)}
                            />
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={unlockWonderItem}
                                setInput={setUnlockWonderItem}
                                onAdd={() => addItem(unlockWonderItem, unlockWonders, setUnlockWonders, setUnlockWonderItem)}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={unlockBuildingItem}
                                setInput={setUnlockBuildingItem}
                                onAdd={() => addItem(unlockBuildingItem, unlockBuildings, setUnlockBuildings, setUnlockBuildingItem)}
                            />
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={unlockEffectItem}
                                setInput={setUnlockEffectItem}
                                onAdd={() => addItem(unlockEffectItem, unlockEffects, setUnlockEffects, setUnlockEffectItem)}
                            />
                            <InputStringButton
                                label="Project"
                                placeholder="Add Project..."
                                input={unlockProjectItem}
                                setInput={setUnlockProjectItem}
                                onAdd={() => addItem(unlockProjectItem, unlockProjects, setUnlockProjects, setUnlockProjectItem)}
                            />
                            <InputStringButton
                                label="Action"
                                placeholder="Add Action..."
                                input={unlockActionItem}
                                setInput={setUnlockActionItem}
                                onAdd={() => addItem(unlockActionItem, unlockActions, setUnlockActions, setUnlockActionItem)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    {unlockUnits.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Units" />
                        <DetailsListButton 
                            list={unlockUnits.map(unit => unit)}
                            onRemove={(index) => removeItem(index, unlockUnits, setUnlockUnits)}
                        />
                    </div>)}
                    {unlockWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={unlockWonders.map(wonder => wonder)}
                            onRemove={(index) => removeItem(index, unlockWonders, setUnlockWonders)}
                        />
                    </div>)}
                    {unlockBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={unlockBuildings.map(building => building)}
                            onRemove={(index) => removeItem(index, unlockBuildings, setUnlockBuildings)}
                        />
                    </div>)}
                    {unlockEffects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={unlockEffects.map(effect => effect)}
                            onRemove={(index) => removeItem(index, unlockEffects, setUnlockEffects)}
                        />
                    </div>)}
                    {unlockProjects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Projects" />
                        <DetailsListButton 
                            list={unlockProjects.map(project => project)}
                            onRemove={(index) => removeItem(index, unlockProjects, setUnlockProjects)}
                        />
                    </div>)}
                    {unlockActions.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Actions" />
                        <DetailsListButton 
                            list={unlockActions.map(action => action)}
                            onRemove={(index) => removeItem(index, unlockActions, setUnlockActions)}
                        />
                    </div>)}
                </div>
                <div className="col-lg-2">
                    <div>
                        <DetailsHeader label="Masteries" />
                        <div className="row mt-3">
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={masteryEffectItem}
                                setInput={setMasteryEffectItem}
                                onAdd={() => addItem(masteryEffectItem, masteryEffects, setMasteryEffects, setMasteryEffectItem)}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={masteryBuildingItem}
                                setInput={setMasteryBuildingItem}
                                onAdd={() => addItem(masteryBuildingItem, masteryBuildings, setMasteryBuildings, setMasteryBuildingItem)}
                            />
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={masteryWonderItem}
                                setInput={setMasteryWonderItem}
                                onAdd={() => addItem(masteryWonderItem, masteryWonders, setMasteryWonders, setMasteryWonderItem)}
                            />
                            <InputStringButton
                                label="Action"
                                placeholder="Add Action..."
                                input={masteryActionItem}
                                setInput={setMasteryActionItem}
                                onAdd={() => addItem(masteryActionItem, masteryActions, setMasteryActions, setMasteryActionItem)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    {masteryEffects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={masteryEffects.map(effect => effect)}
                            onRemove={(index) => removeItem(index, masteryEffects, setMasteryEffects)}
                        />
                    </div>)}
                    {masteryBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={masteryBuildings.map(building => building)}
                            onRemove={(index) => removeItem(index, masteryBuildings, setMasteryBuildings)}
                        />
                    </div>)}
                    {masteryWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={masteryWonders.map(wonder => wonder)}
                            onRemove={(index) => removeItem(index, masteryWonders, setMasteryWonders)}
                        />
                    </div>)}
                    {masteryActions.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Actions" />   
                        <DetailsListButton 
                            list={masteryActions.map(action => action)}
                            onRemove={(index) => removeItem(index, masteryActions, setMasteryActions)}
                        />
                    </div>)}
                </div>
                <div className="col-lg-2">
                    <div className="mb-3">
                        <DetailsHeader label="Requires" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Requires"
                                placeholder="Add Civic..."
                                input={requireItem}
                                setInput={setRequireItem}
                                onAdd={() => addItem(requireItem, requires, setRequires, setRequireItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={requires.map(require => require)}
                            onRemove={(index) => removeItem(index, requires, setRequires)}
                        />
                    </div>
                    <div className="mb-3">
                        <DetailsHeader label="Leads" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Leads To"
                                placeholder="Add Civic..."
                                input={leadItem}
                                setInput={setLeadItem}
                                onAdd={() => addItem(leadItem, leads, setLeads, setLeadItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={leads.map(lead => lead)}
                            onRemove={(index) => removeItem(index, leads, setLeads)}
                        />
                    </div>
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
            </div>
            <hr />
            <input type="submit" value="Update Technology" className="btn btn-sm btn-outline-light" />
        </form>
    );
};

export default EditTechnology;
