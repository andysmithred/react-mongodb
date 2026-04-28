import "./ListTile.css";
import { ImageDetails } from "../../../../utils/ImageDetails";

const ListTile = ({ id, primary, secondary, path, onItemClicked }) => {
    return (
        <div className="d-flex flex-row p-1 list-tile" onClick={() => onItemClicked(id)}>
            <img src={path} className="mt-2 image" alt={primary} />
            <div className="ms-2">
                <div className="title">{primary}</div>
                <div className="subtitle">{secondary}</div>
            </div>
        </div>
    )
}

export default ListTile;
