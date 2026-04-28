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
            }
        };

        onEdit(updatedTechnology);
    };

    const handleAddRequire = () => {
        if (!requireItem) return;
        setRequires([...requires, requireItem]);
        setRequireItem("");
    };

    const handleAddLead = () => {
        if (!leadItem) return;
        setLeads([...leads, leadItem]);
        setLeadItem("");
    };

    const handleAddUnlockUnit = () => {
        if (!unlockUnitItem) return;
        setUnlockUnits([...unlockUnits, unlockUnitItem]);
        setUnlockUnitItem("");
    }

    const handleRemoveUnlockUnit = (index) => {
        setUnlockUnits(unlockUnits.filter((_, i) => i !== index));
    }

    const handleAddUnlockWonder = () => {
        if (!unlockWonderItem) return;
        setUnlockWonders([...unlockWonders, unlockWonderItem]);
        setUnlockWonderItem("");
    }

    const handleRemoveUnlockWonder = (index) => {
        setUnlockWonders(unlockWonders.filter((_, i) => i !== index));
    }

    const handleAddUnlockBuilding = () => {
        if (!unlockBuildingItem) return;
        setUnlockBuildings([...unlockBuildings, unlockBuildingItem]);
        setUnlockBuildingItem("");
    };

    const handleRemoveUnlockBuilding = (index) => {
        setUnlockBuildings(unlockBuildings.filter((_, i) => i !== index));
    }

    const handleAddUnlockEffect = () => {
        if (!unlockEffectItem) return;
        setUnlockEffects([...unlockEffects, unlockEffectItem]);
        setUnlockEffectItem("");
    };

    const handleRemoveUnlockEffect = (index) => {
        setUnlockEffects(unlockEffects.filter((_, i) => i !== index));
    };

    const handleAddUnlockProject = () => {
        if (!unlockProjectItem) return;
        setUnlockProjects([...unlockProjects, unlockProjectItem]);
        setUnlockProjectItem("");
    };

    const handleRemoveUnlockProject = (index) => {
        setUnlockProjects(unlockProjects.filter((_, i) => i !== index));
    };

    const handleAddUnlockAction = () => {
        if (!unlockActionItem) return;
        setUnlockActions([...unlockActions, unlockActionItem]);
        setUnlockActionItem("");
    };

    const handleRemoveUnlockAction = (index) => {
        setUnlockActions(unlockActions.filter((_, i) => i !== index));
    };

    const handleAddMasteryEffect = () => {
        if (!masteryEffectItem) return;
        setMasteryEffects([...masteryEffects, masteryEffectItem]);
        setMasteryEffectItem("");
    };

    const handleRemoveMasteryEffect = (index) => {
        setMasteryEffects(masteryEffects.filter((_, i) => i !== index));
    };

    const handleAddMasteryBuilding = () => {
        if (!masteryBuildingItem) return;
        setMasteryBuildings([...masteryBuildings, masteryBuildingItem]);
        setMasteryBuildingItem("");
    };

    const handleRemoveMasteryBuilding = (index) => {
        setMasteryBuildings(masteryBuildings.filter((_, i) => i !== index));
    };

    const handleAddMasteryWonder = () => {
        if (!masteryWonderItem) return;
        setMasteryWonders([...masteryWonders, masteryWonderItem]);
        setMasteryWonderItem("");
    };

    const handleRemoveMasteryWonder = (index) => {
        setMasteryWonders(masteryWonders.filter((_, i) => i !== index));
    };

    const handleAddMasteryAction = () => {
        if (!masteryActionItem) return;
        setMasteryActions([...masteryActions, masteryActionItem]);
        setMasteryActionItem("");
    };

    const handleRemoveMasteryAction = (index) => {
        setMasteryActions(masteryActions.filter((_, i) => i !== index));
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
                                onAdd={handleAddUnlockUnit}
                            />
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={unlockWonderItem}
                                setInput={setUnlockWonderItem}
                                onAdd={handleAddUnlockWonder}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={unlockBuildingItem}
                                setInput={setUnlockBuildingItem}
                                onAdd={handleAddUnlockBuilding}
                            />
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={unlockEffectItem}
                                setInput={setUnlockEffectItem}
                                onAdd={handleAddUnlockEffect}
                            />
                            <InputStringButton
                                label="Project"
                                placeholder="Add Project..."
                                input={unlockProjectItem}
                                setInput={setUnlockProjectItem}
                                onAdd={handleAddUnlockProject}
                            />
                            <InputStringButton
                                label="Action"
                                placeholder="Add Action..."
                                input={unlockActionItem}
                                setInput={setUnlockActionItem}
                                onAdd={handleAddUnlockAction}
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
                            onRemove={handleRemoveUnlockUnit}
                        />
                    </div>)}
                    {unlockWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={unlockWonders.map(wonder => wonder)}
                            onRemove={handleRemoveUnlockWonder}
                        />
                    </div>)}
                    {unlockBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={unlockBuildings.map(building => building)}
                            onRemove={handleRemoveUnlockBuilding}
                        />
                    </div>)}
                    {unlockEffects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={unlockEffects.map(effect => effect)}
                            onRemove={handleRemoveUnlockEffect}
                        />
                    </div>)}
                    {unlockProjects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Projects" />
                        <DetailsListButton 
                            list={unlockProjects.map(project => project)}
                            onRemove={handleRemoveUnlockProject}
                        />
                    </div>)}
                    {unlockActions.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Actions" />
                        <DetailsListButton 
                            list={unlockActions.map(action => action)}
                            onRemove={handleRemoveUnlockAction}
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
                                onAdd={handleAddMasteryEffect}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={masteryBuildingItem}
                                setInput={setMasteryBuildingItem}
                                onAdd={handleAddMasteryBuilding}
                            />
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={masteryWonderItem}
                                setInput={setMasteryWonderItem}
                                onAdd={handleAddMasteryWonder}
                            />
                            <InputStringButton
                                label="Action"
                                placeholder="Add Action..."
                                input={masteryActionItem}
                                setInput={setMasteryActionItem}
                                onAdd={handleAddMasteryAction}
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
                            onRemove={handleRemoveMasteryEffect}
                        />
                    </div>)}
                    {masteryBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={masteryBuildings.map(building => building)}
                            onRemove={handleRemoveMasteryBuilding}
                        />
                    </div>)}
                    {masteryWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={masteryWonders.map(wonder => wonder)}
                            onRemove={handleRemoveMasteryWonder}
                        />
                    </div>)}
                    {masteryActions.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Actions" />   
                        <DetailsListButton 
                            list={masteryActions.map(action => action)}
                            onRemove={handleRemoveMasteryAction}
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
                                onAdd={handleAddRequire}
                            />
                        </div>
                        <DetailsListButton 
                            list={requires.map(require => require)}
                            onRemove={(index) => setRequires(requires.filter((_, i) => i !== index))}
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
                                onAdd={handleAddLead}
                            />
                        </div>
                        <DetailsListButton 
                            list={leads.map(lead => lead)}
                            onRemove={(index) => setLeads(leads.filter((_, i) => i !== index))}
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
