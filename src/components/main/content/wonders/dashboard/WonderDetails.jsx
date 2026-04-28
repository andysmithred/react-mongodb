import DetailsHeader from "../../common/DetailsHeader";
import "./WonderDetails.css";

const WonderDetails = ({ wonder }) => {
    return (
        <div className="wonder-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">ID</div>
                    <div className="value">{wonder._id || "--"}</div>
                </div>
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">AGE</div>
                    <div className="value">{wonder.age || "--"}</div>
                </div>
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">COST</div>
                    <div className="value">{wonder.cost && `${wonder.cost || 0} Production` || "--"}</div>
                </div>
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">ASSOCIATED</div>
                    <div className="value">{wonder.associated || "--"}</div>
                </div>
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">REQUIRES</div>
                    <div className="value">{wonder.requires.join(", ") || "--"}</div>
                </div>
                <div className="col-lg-6 wonder-details-item">
                    <div className="label">PLACEMENT</div>
                    <div className="value">{wonder.placement}</div>
                </div>
            </div>
        </div>
    );
};

export default WonderDetails;
