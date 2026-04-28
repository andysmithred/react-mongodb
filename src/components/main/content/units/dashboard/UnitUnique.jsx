import DetailsHeader from "../../common/DetailsHeader";
import DetailsList2 from "../../common/DetailsList2";
import "./UnitUnique.css";

const UnitUnique = ({ unit }) => {
    return (
        <div className="unit-details">
            <DetailsHeader label="Unique" />
            <div className="row">
                <div className="col-lg-6 unit-unique-item">
                    <div className="label">UNIQUE TO</div>
                    <div className="value">{unit.unique && unit.unique.civilization ? unit.unique.civilization : "--"}</div>
                </div>
                <div className="col-lg-6 unit-unique-item">
                    <div className="label">REPLACES</div>
                    <div className="value">{unit.unique && unit.unique.replaces ? unit.unique.replaces : "--"}</div>
                </div>
            </div>
        </div>
    );
};

export default UnitUnique;
