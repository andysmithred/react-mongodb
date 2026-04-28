import "./CivicHeader.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";

const CivicHeader = ({civic}) => {
    const { civicsPath } = ImageDetails;
    const iconPath = civicsPath + civic.icon;

    return (
        <div className="d-flex flex-row civic-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={civic.name}
            />
            <div className="ms-3 mt-2 label">{civic.name}</div>
        </div>
    )
}

export default CivicHeader;
