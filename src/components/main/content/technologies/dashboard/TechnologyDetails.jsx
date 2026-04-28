import DetailsHeader from "../../common/DetailsHeader";
import "./TechnologyDetails.css";

const TechnologyDetails = ({ technology }) => {
    return (
        <div className="technology-details">
            <DetailsHeader label="Details" />
            <div className="technology-details-item">
                <div className="label">ID</div>
                <div className="value">{technology._id || "--"}</div>
            </div>
            <div className="technology-details-item">
                <div className="label">AGE</div>
                <div className="value">{technology.age || "--"}</div>
            </div>
            <div className="technology-details-item">
                <div className="label">COST</div>
                <div className="value">{technology.cost || "--"}</div>
            </div>
            <div className="technology-details-item">
                <div className="label">LEVEL</div>
                <div className="value">{technology.level || "--"}</div>
            </div>
        </div>
    );
};

export default TechnologyDetails;
