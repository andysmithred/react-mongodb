import DetailsHeader from "../../common/DetailsHeader";
import "./CivilizationDetails.css";

const CivilizationDetails = ({ civilization }) => {
    return (
        <div className="civilization-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">EMPIRE</div>
                    <div className="value">{civilization.empire}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">DEMONYM</div>
                    <div className="value">{civilization.demonym}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">AGE</div>
                    <div className="value">{civilization.age}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">WONDER</div>
                    <div className="value">{civilization.wonder}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">UNIQUE MILITARY</div>
                    <div className="value">{civilization.unique ? civilization.unique.military : '--'}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">UNIQUE CIVILIAN</div>
                    <div className="value">{civilization.unique ? civilization.unique.civilian : '--'}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">ATTRIBUTES</div>
                    <div className="value">{civilization.attributes && civilization.attributes.join(', ')}</div>
                </div>
                <div className="col-lg-6 civilization-details-item">
                    <div className="label">START BIAS</div>
                    <div className="value">{civilization.start_biases && civilization.start_biases.join(', ')}</div>
                </div>
            </div>
        </div>
    )
}

export default CivilizationDetails;
