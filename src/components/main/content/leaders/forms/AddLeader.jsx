import { useState } from "react";
import InputString from "../../common/inputs/InputString";
import InputStringLarge from "../../common/inputs/InputStringLarge";
import DetailsHeader from "../../common/DetailsHeader";
import InputStringButton from "../../common/inputs/InputStringButton";
import DetailsListButton from "../../common/DetailsListButton";

const AddLeader = ({onAdd}) => {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const [intro, setIntro] = useState("");

    const [abilityName, setAbilityName] = useState("");
    const [ability, setAbility] = useState("");
    const [abilities, setAbilities] = useState([]);

    const [agendaName, setAgendaName] = useState("");
    const [agenda, setAgenda] = useState("");
    const [agendas, setAgendas] = useState([]);

    const [attribute, setAttribute] = useState("");
    const [attributes, setAttributes] = useState([]);

    const [historic, setHistoric] = useState("");
    const [historics, setHistorics] = useState([]);

    const [geographic, setGeographic] = useState("");
    const [geographics, setGeographics] = useState([]);

    const [strategic, setStrategic] = useState("");
    const [strategics, setStrategics] = useState([]);

    const [startBias, setStartBias] = useState("");
    const [startBiases, setStartBiases] = useState([]);

    const [momento, setMomento] = useState("");
    const [momentos, setMomentos] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const leader = {
            name,
            icon,
            intro,
            attributes,
            ability: {
                name: abilityName,
                attributes: abilities
            },
            agenda: {
                name: agendaName,
                attributes: agendas
            },
            civilizations:{
                historic: historics,
                geographic: geographics,
                strategic: strategics
            },
            start_bias: startBiases,
            momentos
        };

        console.log(leader);

        onAdd(leader);
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
                            label="Icon"
                            input={icon}
                            setInput={setIcon}
                            placeholder="Add Icon..."
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
                    <DetailsHeader label="Agenda" />
                    <div className="row mt-3">
                        <InputString
                            label="Name"
                            input={agendaName}
                            setInput={setAgendaName}
                            placeholder="Add Name..."
                        />
                        <div className="mb-3">
                            <InputStringButton
                                label="Agenda"
                                placeholder="Add Agenda..."
                                input={agenda}
                                setInput={setAgenda}
                                onAdd={() => addItem(agenda, agendas, setAgendas, setAgenda)}
                            />
                            <DetailsListButton 
                                list={agendas.map(agendaItem => agendaItem)}
                                onRemove={(index) => removeItem(index, agendas, setAgendas)}
                            />
                        </div>
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
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <DetailsHeader label="Historic" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Civilization"
                            placeholder="Add Civilization..."
                            input={historic}
                            setInput={setHistoric}
                            onAdd={() => addItem(historic, historics, setHistorics, setHistoric)}
                        />
                        <DetailsListButton 
                            list={historics.map(historicItem => historicItem)}
                            onRemove={(index) => removeItem(index, historics, setHistorics)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Geographic" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Civilization"
                            placeholder="Add Civilization..."
                            input={geographic}
                            setInput={setGeographic}
                            onAdd={() => addItem(geographic, geographics, setGeographics, setGeographic)}
                        />
                        <DetailsListButton 
                            list={geographics.map(geographicItem => geographicItem)}
                            onRemove={(index) => removeItem(index, geographics, setGeographics)}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <DetailsHeader label="Strategic" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Civilization"
                            placeholder="Add Civilization..."
                            input={strategic}
                            setInput={setStrategic}
                            onAdd={() => addItem(strategic, strategics, setStrategics, setStrategic)}
                        />
                        <DetailsListButton 
                            list={strategics.map(strategicItem => strategicItem)}
                            onRemove={(index) => removeItem(index, strategics, setStrategics)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
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
                <div className="col-lg-3">
                    <DetailsHeader label="Momentos" />
                    <div className="mt-3">
                        <InputStringButton
                            label="Momento"
                            placeholder="Add Momento..."
                            input={momento}
                            setInput={setMomento}
                            onAdd={() => addItem(momento, momentos, setMomentos, setMomento)}
                        />
                        <DetailsListButton 
                            list={momentos.map(momentoItem => momentoItem)}
                            onRemove={(index) => removeItem(index, momentos, setMomentos)}
                        />
                    </div>
                </div>
            </div>
            <hr></hr>
            <input
                type="submit"
                value="Save Leader"
                className="btn btn-sm btn-outline-light"
            ></input>
        </form>
    )
}

export default AddLeader;
