import "./CivilizationHeader.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";

const CivilizationHeader = ({civilization}) => {
    const { civilizationsPath } = ImageDetails;
    const iconPath = civilizationsPath + civilization.icon;

    return (
        <div className="d-flex flex-row leader-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={civilization.name}
            />
            <div className="ms-3 mt-2 label">{civilization.name}</div>
        </div>
    )
}

export default CivilizationHeader;
