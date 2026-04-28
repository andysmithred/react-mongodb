import "./BuildingHeader.css";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";

const BuildingHeader = ({ building }) => {
    const { buildingsPath } = ImageDetails;
    const iconPath = building.icon ? `${buildingsPath}${building.icon}` : getIconPath("buildings");

    return (
        <div className="d-flex flex-row building-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={building.name}
            />
            <div className="ms-3 mt-2 label">{building.name}</div>
        </div>
    );
};

export default BuildingHeader;
