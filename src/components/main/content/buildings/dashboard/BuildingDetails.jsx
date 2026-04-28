import DetailsHeader from "../../common/DetailsHeader";
import "./BuildingDetails.css";

const BuildingDetails = ({ building }) => {
    return (
        <div className="building-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 building-details-item">
                    <div className="label">ID</div>
                    <div className="value">{building._id || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">AGE</div>
                    <div className="value">{building.age || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">PRODUCTION</div>
                    <div className="value">{building.cost && `${building.cost.production || 0} Production` || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">GOLD</div>
                    <div className="value">{building.cost && `${building.cost.gold || 0} Gold` || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">MAINTENANCE</div>
                    <div className="value">{building.maintenance && `${building.maintenance.gold || 0} Gold, ${building.maintenance.happiness || 0} Happiness` || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">UNLOCKED BY</div>
                    <div className="value">{building.unlocked || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">TYPE</div>
                    <div className="value">{building.type || "--"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">AGELESS</div>
                    <div className="value">{building.ageless ? "Yes" : "No"}</div>
                </div>
                <div className="col-lg-6 building-details-item">
                    <div className="label">PILLAGE</div>
                    <div className="value">{building.pillage || "--"}</div>
                </div>
                { building.placement && building.placement.length > 0 && (
                    <div className="col-lg-6 building-details-item">
                        <div className="label">PLACEMENT</div>
                        <div className="value">{building.placement.join(", ")}</div>
                    </div>
                )}
                <div className="col-lg-6 building-details-item">
                    <div className="label">UNIQUE</div>
                    <div className="value">{building.unique ? "Yes" : "No"}</div>
                </div>
                { building.unique && building.unique_to && (  
                    <div className="col-lg-6 building-details-item">
                        <div className="label">UNIQUE TO</div>
                        <div className="value">{building.unique_to}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuildingDetails;
