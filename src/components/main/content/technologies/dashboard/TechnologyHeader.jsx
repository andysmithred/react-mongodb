import "./TechnologyHeader.css";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";

const TechnologyHeader = ({ technology }) => {
    const { technologiesPath } = ImageDetails;
    const iconPath = technology.icon ? `${technologiesPath}${technology.icon}` : getIconPath("technologies");

    return (
        <div className="d-flex flex-row technology-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={technology.name}
            />
            <div className="ms-3 mt-2 label">{technology.name}</div>
        </div>
    );
};

export default TechnologyHeader;
