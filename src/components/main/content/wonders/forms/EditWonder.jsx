import { useState } from "react";
import { useSelector } from "react-redux";

import DetailsHeader from "../../common/DetailsHeader";
import InputString from "../../common/inputs/InputString";
import InputStringButton from "../../common/inputs/InputStringButton";
import InputNumber from "../../common/inputs/InputNumber";
import DetailsListButton from "../../common/DetailsListButton";
import InputStringLarge from "../../common/inputs/InputStringLarge";

const EditWonder = ({ onEdit }) => {
    const selectedWonder = useSelector((state) => state.wonders.selected);
    const wonder = selectedWonder || {
        name: "",
        icon: "",
        cost: 0,
        age: "",
        associated: "",
        placement: "",
        quote: { text: "", author: "" },
        requires: [],
        effects: [],
        tags: []
    };

    const [name, setName] = useState(wonder.name || "");
    const [icon, setIcon] = useState(wonder.icon || "");
    const [cost, setCost] = useState(wonder.cost || 0);
    const [age, setAge] = useState(wonder.age || "");
    const [associated, setAssociated] = useState(wonder.associated || "");
    const [placement, setPlacement] = useState(wonder.placement || "");

    const [quoteText, setQuoteText] = useState(wonder.quote?.text || "");
    const [quoteAuthor, setQuoteAuthor] = useState(wonder.quote?.author || "");

    const [requireItem, setRequireItem] = useState("");
    const [requires, setRequires] = useState(wonder.requires || []);

    const [effectItem, setEffectItem] = useState("");
    const [effects, setEffects] = useState(wonder.effects || []);

    const [tagItem, setTagItem] = useState("");
    const [tags, setTags] = useState(wonder.tags || []);

    if (!selectedWonder) {
        return <div className="m-3">No wonder selected.</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedWonder = {
            ...wonder,
            name,
            icon,
            cost,
            age,
            associated,
            placement,
            quote: {
                text: quoteText,
                author: quoteAuthor
            },
            requires,
            effects,
            tags
        };

        onEdit(updatedWonder);
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
                        <InputNumber label="Prod Cost" input={cost} setInput={setCost} placeholder="Add Cost..." />
                        <InputString label="Age" input={age} setInput={setAge} placeholder="Add Age..." />
                        <InputString label="Associated" input={associated} setInput={setAssociated} placeholder="Add Associated..." />
                        <InputString label="Placement" input={placement} setInput={setPlacement} placeholder="Add Placement..." />
                        <InputStringLarge label="Quote Text" input={quoteText} setInput={setQuoteText} placeholder="Add Quote Text..." />
                        <InputString label="Quote Author" input={quoteAuthor} setInput={setQuoteAuthor} placeholder="Add Quote Author..." />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="mb-3">
                        <DetailsHeader label="Requires" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Civic/Tech"
                                placeholder="Add Civic..."
                                input={requireItem}
                                setInput={setRequireItem}
                                onAdd={() => addItem(requireItem, requires, setRequires, setRequireItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={requires.map(requireItem => requireItem)}
                            onRemove={(index) => removeItem(index, requires, setRequires)}
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="mb-3">
                        <DetailsHeader label="Effects" />
                        <div className="mt-3">
                            <InputStringButton
                                label="Effect"
                                placeholder="Add Effect..."
                                input={effectItem}
                                setInput={setEffectItem}
                                onAdd={() => addItem(effectItem, effects, setEffects, setEffectItem)}
                            />
                        </div>
                        <DetailsListButton 
                            list={effects.map(effectItem => effectItem)}
                            onRemove={(index) => removeItem(index, effects, setEffects)}
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
            </div>
            <hr />
            <input type="submit" value="Update Wonder" className="btn btn-sm btn-outline-light" />
        </form>
    );
};

export default EditWonder;
