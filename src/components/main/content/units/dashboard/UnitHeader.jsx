import "./UnitHeader.css";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";

const UnitHeader = ({ unit }) => {
    const { unitsPath } = ImageDetails;
    const iconPath = unit.icon ? `${unitsPath}${unit.icon}` : getIconPath("units");

    return (
        <div className="d-flex flex-row unit-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={unit.name}
            />
            <div className="ms-3 mt-2 label">{unit.name}</div>
        </div>
    );
};

export default UnitHeader;
