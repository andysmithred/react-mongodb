import DetailsHeader from "../../common/DetailsHeader";
import "./CivicDetails.css";

const CivicDetails = ({ civic }) => {
    return (
        <div className="civic-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 civic-details-item">
                    <div className="label">ID</div>
                    <div className="value">{civic._id || "--"}</div>
                </div>
                <div className="col-lg-6 civic-details-item">
                    <div className="label">AGE</div>
                    <div className="value">{civic.age || "--"}</div>
                </div>
                <div className="col-lg-6 civic-details-item">
                    <div className="label">COST</div>
                    <div className="value">{civic.cost || "--"}</div>
                </div>
                <div className="col-lg-6 civic-details-item">
                    <div className="label">LEVEL</div>
                    <div className="value">{civic.level || "--"}</div>
                </div>
            </div>
        </div>
    );
};

export default CivicDetails;
