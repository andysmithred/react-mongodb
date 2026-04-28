
import { useState } from "react";
import { useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import InputString from "../../common/inputs/InputString";
import InputStringLarge from "../../common/inputs/InputStringLarge";
import InputStringButton from "../../common/inputs/InputStringButton";
import DetailsListButton from "../../common/DetailsListButton";
import InputNumber from "../../common/inputs/InputNumber";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const EditCivic = ({ onEdit }) => {
    const civic = useSelector((state) => state.civics.selected);
    const [name, setName] = useState(civic.name);
    const [icon, setIcon] = useState(civic.icon);
    const [age, setAge] = useState(civic.age);
    const [level, setLevel] = useState(civic.level);
    const [unique, setUnique] = useState(civic.unique);
    const [uniqueTo, setUniqueTo] = useState(civic.unique_to);
    const [quoteText, setQuoteText] = useState(civic.quote.text);
    const [quoteAuthor, setQuoteAuthor] = useState(civic.quote.author);
    const [cost, setCost] = useState(civic.cost);

    const [require, setRequire] = useState("");
    const [requires, setRequires] = useState(civic.requires ? civic.requires : []);

    const [lead, setLead] = useState("");
    const [leads, setLeads] = useState(civic.leads ? civic.leads : []);

    const [unlockWonder, setUnlockWonder] = useState("");
    const [unlockWonders, setUnlockWonders] = useState(civic.unlocks ? civic.unlocks.wonders : []);

    const [unlockUnit, setUnlockUnit] = useState("");
    const [unlockUnits, setUnlockUnits] = useState(civic.unlocks ? civic.unlocks.units : []);

    const [unlockBuilding, setUnlockBuilding] = useState("");
    const [unlockBuildings, setUnlockBuildings] = useState(civic.unlocks ? civic.unlocks.buildings : []);

    const [unlockProject, setUnlockProject] = useState("");
    const [unlockProjects, setUnlockProjects] = useState(civic.unlocks ? civic.unlocks.projects : []);

    const [unlockPolicy, setUnlockPolicy] = useState("");
    const [unlockPolicies, setUnlockPolicies] = useState(civic.unlocks ? civic.unlocks.policies : []);

    const [unlockEndeavor, setUnlockEndeavor] = useState("");
    const [unlockEndeavors, setUnlockEndeavors] = useState(civic.unlocks ? civic.unlocks.endeavors : []);

    const [unlockEffect, setUnlockEffect] = useState("");
    const [unlockEffects, setUnlockEffects] = useState(civic.unlocks ? civic.unlocks.effects : []);

    const [masteryWonder, setMasteryWonder] = useState("");
    const [masteryWonders, setMasteryWonders] = useState(civic.mastery ? civic.mastery.wonders : []);

    const [masteryUnit, setMasteryUnit] = useState("");
    const [masteryUnits, setMasteryUnits] = useState(civic.mastery ? civic.mastery.units : []);

    const [masteryBuilding, setMasteryBuilding] = useState("");
    const [masteryBuildings, setMasteryBuildings] = useState(civic.mastery ? civic.mastery.buildings : []);

    const [masteryProject, setMasteryProject] = useState("");
    const [masteryProjects, setMasteryProjects] = useState(civic.mastery ? civic.mastery.projects : []);

    const [masteryPolicy, setMasteryPolicy] = useState("");
    const [masteryPolicies, setMasteryPolicies] = useState(civic.mastery ? civic.mastery.policies : []);

    const [masteryEndeavor, setMasteryEndeavor] = useState("");
    const [masteryEndeavors, setMasteryEndeavors] = useState(civic.mastery ? civic.mastery.endeavors : []);

    const [masteryEffect, setMasteryEffect] = useState("");
    const [masteryEffects, setMasteryEffects] = useState(civic.mastery ? civic.mastery.effects : []);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedCivic = {
            ...civic,
            name,
            icon,
            age,
            level,
            unique,
            unique_to: uniqueTo,
            quote: {
                text: quoteText,
                author: quoteAuthor
            },
            cost,
            requires,
            leads,
            unlocks: {
                wonders: unlockWonders,
                units: unlockUnits,
                buildings: unlockBuildings,
                projects: unlockProjects,
                policies: unlockPolicies,
                endeavors: unlockEndeavors,
                effects: unlockEffects
            },
            mastery: {
                wonders: masteryWonders,
                units: masteryUnits,
                buildings: masteryBuildings,
                projects: masteryProjects,
                policies: masteryPolicies,
                endeavors: masteryEndeavors,
                effects: masteryEffects
            }
        };

        console.log("Saving civic: ", updatedCivic);

        onEdit(updatedCivic);
    }

    // requires

    const handleAddRequire = () => {
        setRequires([...requires, require]);
        setRequire("");
    }

    const handleRemoveRequire = (index) => {
        setRequires(requires.filter((_, i) => i !== index));
    }

    // leads

    const handleAddLead = () => {
        setLeads([...leads, lead]);
        setLead("");
    }

    const handleRemoveLead = (index) => {
        setLeads(leads.filter((_, i) => i !== index));
    }

    // unlocks wonders

    const handleAddUnlockWonder = () => {
        setUnlockWonders([...unlockWonders, unlockWonder]);
        setUnlockWonder("");
    }

    const handleRemoveUnlockWonder = (index) => {
        setUnlockWonders(unlockWonders.filter((_, i) => i !== index));
    }

    // unlocks units

    const handleAddUnlockUnit = () => {
        setUnlockUnits([...unlockUnits, unlockUnit]);
        setUnlockUnit("");
    }

    const handleRemoveUnlockUnit = (index) => {
        setUnlockUnits(unlockUnits.filter((_, i) => i !== index));
    }

    // unlocks buildings

    const handleAddUnlockBuilding = () => {
        setUnlockBuildings([...unlockBuildings, unlockBuilding]);
        setUnlockBuilding("");
    }

    const handleRemoveUnlockBuilding = (index) => {
        setUnlockBuildings(unlockBuildings.filter((_, i) => i !== index));
    }

    // unlocks projects

    const handleAddUnlockProject = () => {
        setUnlockProjects([...unlockProjects, unlockProject]);
        setUnlockProject("");
    }

    const handleRemoveUnlockProject = (index) => {
        setUnlockProjects(unlockProjects.filter((_, i) => i !== index));
    }

    // unlocks policies

    const handleAddUnlockPolicy = () => {
        setUnlockPolicies([...unlockPolicies, unlockPolicy]);
        setUnlockPolicy("");
    }

    const handleRemoveUnlockPolicy = (index) => {
        setUnlockPolicies(unlockPolicies.filter((_, i) => i !== index));
    }

    // unlocks endeavors

    const handleAddUnlockEndeavor = () => {
        setUnlockEndeavors([...unlockEndeavors, unlockEndeavor]);
        setUnlockEndeavor("");
    }

    const handleRemoveUnlockEndeavor = (index) => {
        setUnlockEndeavors(unlockEndeavors.filter((_, i) => i !== index));
    }

    // unlocks effects

    const handleAddUnlockEffect = () => {
        setUnlockEffects([...unlockEffects, unlockEffect]);
        setUnlockEffect("");
    }

    const handleRemoveUnlockEffect = (index) => {
        setUnlockEffects(unlockEffects.filter((_, i) => i !== index));
    }

    // mastery wonders

    const handleAddMasteryWonder = () => {
        setMasteryWonders([...masteryWonders, masteryWonder]);
        setMasteryWonder("");
    }

    const handleRemoveMasteryWonder = (index) => {
        setMasteryWonders(masteryWonders.filter((_, i) => i !== index));
    }

    // mastery units

    const handleAddMasteryUnit = () => {
        setMasteryUnits([...masteryUnits, masteryUnit]);
        setMasteryUnit("");
    }

    const handleRemoveMasteryUnit = (index) => {
        setMasteryUnits(masteryUnits.filter((_, i) => i !== index));
    }

    // mastery buildings

    const handleAddMasteryBuilding = () => {
        setMasteryBuildings([...masteryBuildings, masteryBuilding]);
        setMasteryBuilding("");
    }

    const handleRemoveMasteryBuilding = (index) => {
        setMasteryBuildings(masteryBuildings.filter((_, i) => i !== index));
    }

    // mastery projects

    const handleAddMasteryProject = () => {
        setMasteryProjects([...masteryProjects, masteryProject]);
        setMasteryProject("");
    }

    const handleRemoveMasteryProject = (index) => {
        setMasteryProjects(masteryProjects.filter((_, i) => i !== index));
    }

    // mastery policies

    const handleAddMasteryPolicy = () => {
        setMasteryPolicies([...masteryPolicies, masteryPolicy]);
        setMasteryPolicy("");
    }

    const handleRemoveMasteryPolicy = (index) => {
        setMasteryPolicies(masteryPolicies.filter((_, i) => i !== index));
    }

    // mastery endeavors

    const handleAddMasteryEndeavor = () => {
        setMasteryEndeavors([...masteryEndeavors, masteryEndeavor]);
        setMasteryEndeavor("");
    }

    const handleRemoveMasteryEndeavor = (index) => {
        setMasteryEndeavors(masteryEndeavors.filter((_, i) => i !== index));
    }

    // mastery effects

    const handleAddMasteryEffect = () => {
        setMasteryEffects([...masteryEffects, masteryEffect]);
        setMasteryEffect("");
    }

    const handleRemoveMasteryEffect = (index) => {
        setMasteryEffects(masteryEffects.filter((_, i) => i !== index));
    }

    return (
        <form className="m-2" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-lg-2">
                    <DetailsHeader label="Details" />
                    <div className="row mt-3">
                        <InputString
                            label="Name"
                            input={name}
                            setInput={setName}
                            placeholder="Add Name..."
                        />
                        <InputString
                            label="Icon"
                            input={icon}
                            setInput={setIcon}
                            placeholder="Add Icon..."
                        />
                        <InputString
                            label="Age"
                            input={age}
                            setInput={setAge}
                            placeholder="Add Age..."
                        />
                        <InputNumber
                            label="Level"
                            input={level}
                            setInput={setLevel}
                            placeholder="Add Level..."
                        />
                        <InputCheckbox
                            label="Unique"
                            input={unique}
                            setInput={setUnique}
                        />
                        <InputString
                            label="Unique To"
                            input={uniqueTo}
                            setInput={setUniqueTo}
                            placeholder="Add Unique To..."
                        />
                        <InputStringLarge
                            label="Quote Text"
                            input={quoteText}
                            setInput={setQuoteText}
                            placeholder="Add Quote Text..."
                        />
                        <InputString
                            label="Quote Author"
                            input={quoteAuthor}
                            setInput={setQuoteAuthor}
                            placeholder="Add Quote Author..."
                        />
                        <InputNumber
                            label="Cost"
                            input={cost}
                            setInput={setCost}
                            placeholder="Add Cost..."
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div>
                        <DetailsHeader label="Unlocks" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={unlockWonder}
                                setInput={setUnlockWonder}
                                onAdd={handleAddUnlockWonder}
                            />
                            <InputStringButton
                                label="Unit"
                                placeholder="Add Unit..."
                                input={unlockUnit}
                                setInput={setUnlockUnit}
                                onAdd={handleAddUnlockUnit}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={unlockBuilding}
                                setInput={setUnlockBuilding}
                                onAdd={handleAddUnlockBuilding}
                            />
                            <InputStringButton
                                label="Project"
                                placeholder="Add Project..."
                                input={unlockProject}
                                setInput={setUnlockProject}
                                onAdd={handleAddUnlockProject}
                            />
                            <InputStringButton
                                label="Policy"
                                placeholder="Add Policy..."
                                input={unlockPolicy}
                                setInput={setUnlockPolicy}
                                onAdd={handleAddUnlockPolicy}
                            />
                            <InputStringButton
                                label="Endeavor"
                                placeholder="Add Endeavor..."
                                input={unlockEndeavor}
                                setInput={setUnlockEndeavor}
                                onAdd={handleAddUnlockEndeavor}
                            />
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={unlockEffect}
                                setInput={setUnlockEffect}
                                onAdd={handleAddUnlockEffect}
                            /> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    {unlockWonders && unlockWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={unlockWonders.map(wonder => wonder)}
                            onRemove={handleRemoveUnlockWonder}
                        />
                    </div>)}
                    {unlockUnits && unlockUnits.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Units" />
                        <DetailsListButton 
                            list={unlockUnits.map(unit => unit)}
                            onRemove={handleRemoveUnlockUnit}
                        />
                    </div>)}
                    {unlockBuildings && unlockBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={unlockBuildings.map(building => building)}
                            onRemove={handleRemoveUnlockBuilding}
                        />
                    </div>)}
                    {unlockProjects && unlockProjects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Projects" />
                        <DetailsListButton 
                            list={unlockProjects.map(project => project)}
                            onRemove={handleRemoveUnlockProject}
                        />
                    </div>)}
                    {unlockPolicies && unlockPolicies.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Policies" />
                        <DetailsListButton 
                            list={unlockPolicies.map(policy => policy)}
                            onRemove={handleRemoveUnlockPolicy}
                        />
                    </div>)}
                    {unlockEndeavors && unlockEndeavors.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Endeavors" />
                        <DetailsListButton 
                            list={unlockEndeavors.map(endeavor => endeavor)}
                        onRemove={handleRemoveUnlockEndeavor}
                    />  
                    </div>)}
                    {unlockEffects && unlockEffects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={unlockEffects.map(effect => effect)}
                            onRemove={handleRemoveUnlockEffect}
                        />
                    </div>)}
                </div>
                <div className="col-lg-2">
                    <div>
                        <DetailsHeader label="Masteries" />
                        <div className="row mt-3">
                            <InputStringButton
                                label="Wonder"
                                placeholder="Add Wonder..."
                                input={masteryWonder}
                                setInput={setMasteryWonder}
                                onAdd={handleAddMasteryWonder}
                            />
                            <InputStringButton
                                label="Unit"
                                placeholder="Add Unit..."
                                input={masteryUnit}
                                setInput={setMasteryUnit}
                                onAdd={handleAddMasteryUnit}
                            />
                            <InputStringButton
                                label="Building"
                                placeholder="Add Building..."
                                input={masteryBuilding}
                                setInput={setMasteryBuilding}
                                onAdd={handleAddMasteryBuilding}
                            />
                            <InputStringButton
                                label="Project"
                                placeholder="Add Project..."
                                input={masteryProject}
                                setInput={setMasteryProject}
                                onAdd={handleAddMasteryProject}
                            />
                            <InputStringButton
                                label="Policy"
                                placeholder="Add Policy..."
                                input={masteryPolicy}
                                setInput={setMasteryPolicy}
                                onAdd={handleAddMasteryPolicy}
                            />
                            <InputStringButton
                                label="Endeavor"
                                placeholder="Add Endeavor..."
                                input={masteryEndeavor}
                                setInput={setMasteryEndeavor}
                                onAdd={handleAddMasteryEndeavor}
                            />
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={masteryEffect}
                                setInput={setMasteryEffect}
                                onAdd={handleAddMasteryEffect}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    {masteryWonders && masteryWonders.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Wonders" />
                        <DetailsListButton 
                            list={masteryWonders.map(wonder => wonder)}
                            onRemove={handleRemoveMasteryWonder}
                        />
                    </div>)}
                    {masteryUnits && masteryUnits.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Units" />
                        <DetailsListButton 
                            list={masteryUnits.map(unit => unit)}
                            onRemove={handleRemoveMasteryUnit}
                        />
                    </div>)}
                    {masteryBuildings && masteryBuildings.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Buildings" />
                        <DetailsListButton 
                            list={masteryBuildings.map(building => building)}
                            onRemove={handleRemoveMasteryBuilding}
                        />
                    </div>)}
                    {masteryProjects && masteryProjects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Projects" />
                        <DetailsListButton 
                            list={masteryProjects.map(project => project)}
                            onRemove={handleRemoveMasteryProject}
                        />
                    </div>)}
                    {masteryPolicies && masteryPolicies.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Policies" />
                        <DetailsListButton 
                            list={masteryPolicies.map(policy => policy)}
                            onRemove={handleRemoveMasteryPolicy}
                        />
                    </div>)}
                    {masteryEndeavors && masteryEndeavors.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Endeavors" />
                        <DetailsListButton 
                            list={masteryEndeavors.map(endeavor => endeavor)}
                            onRemove={handleRemoveMasteryEndeavor}
                        />
                    </div>)}
                    {masteryEffects && masteryEffects.length > 0 && (
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <DetailsListButton 
                            list={masteryEffects.map(effect => effect)}
                            onRemove={handleRemoveMasteryEffect}
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
                                input={require}
                                setInput={setRequire}
                                onAdd={handleAddRequire}
                            />
                        </div>
                        <DetailsListButton 
                            list={requires}
                            onRemove={handleRemoveRequire}
                        />
                    </div>
                    <div className="mb-3">
                        <DetailsHeader label="Leads" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Leads To"
                                placeholder="Add Civic..."
                                input={lead}
                                setInput={setLead}
                                onAdd={handleAddLead}
                            />
                        </div>
                        <DetailsListButton 
                            list={leads}
                            onRemove={handleRemoveLead}
                        />
                    </div>
                </div>
            </div>
            <hr></hr>
            <input
                type="submit"
                value="Save Civic"
                className="btn btn-sm btn-outline-light"
            ></input>
        </form>
    );
};

export default EditCivic;
