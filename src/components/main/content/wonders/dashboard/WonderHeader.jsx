import "./WonderHeader.css";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";

const WonderHeader = ({ wonder }) => {
    const { wondersPath } = ImageDetails;
    const iconPath = wonder.icon ? `${wondersPath}${wonder.icon}` : getIconPath("wonders");

    return (
        <div className="d-flex flex-row wonder-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={wonder.name}
            />
            <div className="ms-3 mt-2 label">{wonder.name}</div>
        </div>
    );
};

export default WonderHeader;
