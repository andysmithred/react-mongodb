import "./LeaderHeader.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";

const LeaderHeader = ({leader}) => {
    const { leadersPath } = ImageDetails;
    const iconPath = leadersPath + leader.icon;

    return (
        <div className="d-flex flex-row leader-header">
            <img
                src={iconPath}
                className="mb-1 image"
                alt={leader.name}
            />
            <div className="ms-3 mt-2 label">{leader.name}</div>
        </div>
    )
}

export default LeaderHeader;
