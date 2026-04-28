import DetailsHeader from "./DetailsHeader";
import "./Attributes.css";
import { getAttributePath, getAttributeColour } from "../../../../utils/ImageDetails";

const Attributes = ({ attributes }) => {
    const items = [];

    attributes.forEach(attribute => {
        items.push(
            <div className="attribute" key={attribute}>
                <div className="icon-container" style={{ backgroundColor: getAttributeColour(attribute) }}>
                    <img className="icon" src={getAttributePath(attribute)} alt={attribute} />
                </div>
                <div className="label">{attribute}</div>
            </div>
        );
    });

    return (
        <div className="attributes">
            <DetailsHeader label="Attributes" />
            <div>
                {items}
            </div>
        </div>
    )
}

export default Attributes;
