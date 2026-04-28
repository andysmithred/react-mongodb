import DetailsHeader from "../../common/DetailsHeader";
import "./UnitDetails.css";

const UnitDetails = ({ unit }) => {
    return (
        <div className="unit-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 unit-details-item">
                    <div className="label">ID</div>
                    <div className="value">{unit._id || "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">TIER</div>
                    <div className="value">{unit.tier || "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">AGE</div>
                    <div className="value">{unit.age || "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">TYPE</div>
                    <div className="value">{unit.type || "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">PRODUCTION</div>
                    <div className="value">{unit.cost && unit.cost.production ? unit.cost.production : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">SCALABLE</div>
                    <div className="value">{unit.cost && unit.cost.scalable ? "YES" : "NO"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">GOLD</div>
                    <div className="value">{unit.cost && unit.cost.gold ? unit.cost.gold : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">MAINTENANCE</div>
                    <div className="value">{unit.cost && unit.cost.maintenance ? unit.cost.maintenance : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">UNLOCKED BY</div>
                    <div className="value">{unit.unlocked ? unit.unlocked : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">OBSOLETE BY</div>
                    <div className="value">{unit.obsolete ? unit.obsolete : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">REPLACES</div>
                    <div className="value">{unit.replaces ? unit.replaces : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">UPGRADES TO</div>
                    <div className="value">{unit.upgrades ? unit.upgrades : "--"}</div>
                </div>
            </div>
        </div>
    );
};

export default UnitDetails;
