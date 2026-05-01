import DetailsHeader from "./DetailsHeader";
import "./Tags.css";
import { getTagPath } from "../../../../utils/ImageDetails";

const Tags = ({ tags }) => {
    const items = [];

    tags.forEach(tag => {
        items.push(
            <div className="tag" key={tag}>
                <div className="icon-container">
                    <img className="icon" src={getTagPath(tag)} alt={tag} />
                </div>
                <div className="label">{tag}</div>
            </div>
        );
    });

    return (
        <div className="tags">
            <DetailsHeader label="Tags" />
            <div>
                {items}
            </div>
        </div>
    )
}

export default Tags;
