import DetailsHeader from "../../common/DetailsHeader";
import "./UnitDetails.css";

const UnitStats = ({ unit }) => {
    return (
        <div className="unit-details">
            <DetailsHeader label="Stats" />
            <div className="row">
                <div className="col-lg-6 unit-details-item">
                    <div className="label">MOVEMENT</div>
                    <div className="value">{unit.stats && unit.stats.movement && unit.stats.movement > 0 ? unit.stats.movement : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">STRENGTH</div>
                    <div className="value">{unit.stats && unit.stats.strength && unit.stats.strength > 0 ? unit.stats.strength : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">SIGHT</div>
                    <div className="value">{unit.stats && unit.stats.sight && unit.stats.sight > 0 ? unit.stats.sight : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">RANGE</div>
                    <div className="value">{unit.stats && unit.stats.range && unit.stats.range > 0 ? unit.stats.range : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">RANGED</div>
                    <div className="value">{unit.stats && unit.stats.ranged && unit.stats.ranged > 0 ? unit.stats.ranged : "--"}</div>
                </div>
                <div className="col-lg-6 unit-details-item">
                    <div className="label">BOMBARD</div>
                    <div className="value">{unit.stats && unit.stats.bombard && unit.stats.bombard > 0 ? unit.stats.bombard : "--"}</div>
                </div>
            </div>
        </div>
    );
};

export default UnitStats;
