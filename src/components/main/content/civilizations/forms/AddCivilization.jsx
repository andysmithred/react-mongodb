import { useState } from "react";
import InputString from "../../common/inputs/InputString";
import InputStringLarge from "../../common/inputs/InputStringLarge";
import DetailsHeader from "../../common/DetailsHeader";
import InputStringButton from "../../common/inputs/InputStringButton";
import DetailsListButton from "../../common/DetailsListButton";

const AddCivilization = ({onAdd}) => {
    const [name, setName] = useState("");
    const [empire, setEmpire] = useState("");
    const [demonym, setDemonym] = useState("");
    const [age, setAge] = useState("");
    const [icon, setIcon] = useState("");
    const [wonder, setWonder] = useState("");
    const [intro, setIntro] = useState("");
    
    const [attribute, setAttribute] = useState("");
    const [attributes, setAttributes] = useState([]);

    const [abilityName, setAbilityName] = useState("");
    const [ability, setAbility] = useState("");
    const [abilities, setAbilities] = useState([]);

    const [startBias, setStartBias] = useState("");
    const [startBiases, setStartBiases] = useState([]);

    const [uniqueMilitary, setUniqueMilitary] = useState("");
    const [uniqueCivilian, setUniqueCivilian] = useState("");

    const [uniqueInfrastructure, setUniqueInfrastructure] = useState("");
    const [uniqueInfrastructures, setUniqueInfrastructures] = useState([]);

    const [uniqueCivic, setUniqueCivic] = useState("");
    const [uniqueCivics, setUniqueCivics] = useState([]);

    const [uniqueTradition, setUniqueTradition] = useState("");
    const [uniqueTraditions, setUniqueTraditions] = useState([]);

    const [requirement, setRequirement] = useState("");
    const [requirements, setRequirements] = useState([]);

    const [unlock, setUnlock] = useState("");
    const [unlocks, setUnlocks] = useState([]);

    const [unlockedBy, setUnlockedBy] = useState("");
    const [unlockedBys, setUnlockedBys] = useState([]);

    const [historicLeaderName, setHistoricLeaderName] = useState("");
    const [historicLeaders, setHistoricLeaders] = useState([]);

    const [geographicLeaderName, setGeographicLeaderName] = useState("");
    const [geographicLeaders, setGeographicLeaders] = useState([]);

    const [strategicLeaderName, setStrategicLeaderName] = useState("");
    const [strategicLeaders, setStrategicLeaders] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const civilization = {
            name,
            empire,
            demonym,
            age,
            icon,
            wonder,
            intro,
            attributes,
            ability: {
                name: abilityName,
                attributes: abilities
            },
            unique: {
                military: uniqueMilitary,
                civilian: uniqueCivilian,
                infrastructure: uniqueInfrastructures,
                civics: uniqueCivics,
                traditions: uniqueTraditions
            },
            unlocks: {
                requirements,
                unlocks,
                unlocked_by: unlockedBys
            },
            leaders: {
                historic: historicLeaders,
                geographic: geographicLeaders,
                strategic: strategicLeaders
            },
            start_biases: startBiases,
        };

        console.log(civilization);

        onAdd(civilization);
    }

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
                        <InputString
                            label="Name"
                            input={name}
                            setInput={setName}
                            placeholder="Add Name..."
                        />
                        <InputString
                            label="Empire"
                            input={empire}
                            setInput={setEmpire}
                            placeholder="Add Empire..."
                        />
                        <InputString
                            label="Demonym"
                            input={demonym}
                            setInput={setDemonym}
                            placeholder="Add Demonym..."
                        />
                        <InputString
                            label="Age"
                            input={age}
                            setInput={setAge}
                            placeholder="Add Age..."
                        />
                        <InputString
                            label="Icon"
                            input={icon}
                            setInput={setIcon}
                            placeholder="Add Icon..."
                        />
                        <InputString
                            label="Wonder"
                            input={wonder}
                            setInput={setWonder}
                            placeholder="Add Wonder..."
                        />
                        <InputStringLarge
                            label="Intro"
                            input={intro}
                            setInput={setIntro}
                            placeholder="Add Intro..."
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Attributes" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Attribute"
                            placeholder="Add Attribute..."
                            input={attribute}
                            setInput={setAttribute}
                            onAdd={() => addItem(attribute, attributes, setAttributes, setAttribute)}
                        />
                        <DetailsListButton 
                            list={attributes.map(attributeItem => attributeItem)}
                            onRemove={(index) => removeItem(index, attributes, setAttributes)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Ability" />
                    <div className="row mt-3">
                        <InputString
                            label="Name"
                            input={abilityName}
                            setInput={setAbilityName}
                            placeholder="Add Name..."
                        />
                        <div className="mb-3">
                            <InputStringButton
                                label="Ability"
                                placeholder="Add Ability..."
                                input={ability}
                                setInput={setAbility}
                                onAdd={() => addItem(ability, abilities, setAbilities, setAbility)}
                            />
                            <DetailsListButton 
                                list={abilities.map(abilityItem => abilityItem)}
                                onRemove={(index) => removeItem(index, abilities, setAbilities)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Start Bias" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Start Bias"
                            placeholder="Add Start Bias..."
                            input={startBias}
                            setInput={setStartBias}
                            onAdd={() => addItem(startBias, startBiases, setStartBiases, setStartBias)}
                        />
                        <DetailsListButton 
                            list={startBiases.map(startBiasItem => startBiasItem)}
                            onRemove={(index) => removeItem(index, startBiases, setStartBiases)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <DetailsHeader label="Unique" />
                    <div className="row mt-3">
                        <InputString
                            label="Military"
                            input={uniqueMilitary}
                            setInput={setUniqueMilitary}
                            placeholder="Add Military..."
                        />
                        <InputString
                            label="Civilian"
                            input={uniqueCivilian}
                            setInput={setUniqueCivilian}
                            placeholder="Add Civilian..."
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Infrastructure" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Infrastructure"
                            placeholder="Add Infrastructure..."
                            input={uniqueInfrastructure}
                            setInput={setUniqueInfrastructure}
                            onAdd={() => addItem(uniqueInfrastructure, uniqueInfrastructures, setUniqueInfrastructures, setUniqueInfrastructure)}
                        />
                        <DetailsListButton 
                            list={uniqueInfrastructures.map(infrastructureItem => infrastructureItem)}
                            onRemove={(index) => removeItem(index, uniqueInfrastructures, setUniqueInfrastructures)}
                        />
                    </div>                    
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Civics" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Civic"
                            placeholder="Add Civic..."
                            input={uniqueCivic}
                            setInput={setUniqueCivic}
                            onAdd={() => addItem(uniqueCivic, uniqueCivics, setUniqueCivics, setUniqueCivic)}
                        />
                        <DetailsListButton 
                            list={uniqueCivics.map(civic => civic)}
                            onRemove={(index) => removeItem(index, uniqueCivics, setUniqueCivics)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Traditions" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Traditions"
                            placeholder="Add Tradition..."
                            input={uniqueTradition}
                            setInput={setUniqueTradition}
                            onAdd={() => addItem(uniqueTradition, uniqueTraditions, setUniqueTraditions, setUniqueTradition)}
                        />
                        <DetailsListButton 
                            list={uniqueTraditions.map(tradition => tradition)}
                            onRemove={(index) => removeItem(index, uniqueTraditions, setUniqueTraditions)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <DetailsHeader label="Requirements" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Requirements"
                            placeholder="Add Requirement..."
                            input={requirement}
                            setInput={setRequirement}
                            onAdd={() => addItem(requirement, requirements, setRequirements, setRequirement)}
                        />
                        <DetailsListButton 
                            list={requirements.map(requirementItem => requirementItem)}
                            onRemove={(index) => removeItem(index, requirements, setRequirements)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Unlocks" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Unlocks"
                            placeholder="Add Unlock..."
                            input={unlock}
                            setInput={setUnlock}
                            onAdd={() => addItem(unlock, unlocks, setUnlocks, setUnlock)}
                        />
                        <DetailsListButton 
                            list={unlocks.map(unlockItem => unlockItem)}
                            onRemove={(index) => removeItem(index, unlocks, setUnlocks)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Unlocked By" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Unlocked By"
                            placeholder="Add Unlocked By..."
                            input={unlockedBy}
                            setInput={setUnlockedBy}
                            onAdd={() => addItem(unlockedBy, unlockedBys, setUnlockedBys, setUnlockedBy)}
                        />
                        <DetailsListButton 
                            list={unlockedBys.map(unlockedByItem => unlockedByItem)}
                            onRemove={(index) => removeItem(index, unlockedBys, setUnlockedBys)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="mt-3">
                        <DetailsHeader label="Historic Leaders" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Leader"
                                placeholder="Add Leader..."
                                input={historicLeaderName}
                                setInput={setHistoricLeaderName}
                                onAdd={() => addItem(historicLeaderName, historicLeaders, setHistoricLeaders, setHistoricLeaderName)}
                            />
                            <DetailsListButton 
                                list={historicLeaders.map(leader => leader)}
                                onRemove={(index) => removeItem(index, historicLeaders, setHistoricLeaders)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="mt-3">
                        <DetailsHeader label="Geographic Leaders" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Leader"
                                placeholder="Add Leader..."
                                input={geographicLeaderName}
                                setInput={setGeographicLeaderName}
                                onAdd={() => addItem(geographicLeaderName, geographicLeaders, setGeographicLeaders, setGeographicLeaderName)}
                            />
                            <DetailsListButton 
                                list={geographicLeaders.map(leader => leader)}
                                onRemove={(index) => removeItem(index, geographicLeaders, setGeographicLeaders)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="mt-3">
                        <DetailsHeader label="Strategic Leaders" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Leader"
                                placeholder="Add Leader..."
                                input={strategicLeaderName}
                                setInput={setStrategicLeaderName}
                                onAdd={() => addItem(strategicLeaderName, strategicLeaders, setStrategicLeaders, setStrategicLeaderName)}
                            />
                            <DetailsListButton 
                                list={strategicLeaders.map(leader => leader)}
                                onRemove={(index) => removeItem(index, strategicLeaders, setStrategicLeaders)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <input
                type="submit"
                value="Save Civilization"
                className="btn btn-sm btn-outline-light"
            ></input>
        </form>
    )
}

export default AddCivilization;
