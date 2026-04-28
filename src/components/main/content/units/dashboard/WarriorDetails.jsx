import DetailsHeader from "../../common/DetailsHeader";

const WarriorDetails = () => {
    return (
        <div className="unit-details">
            <DetailsHeader label="Warrior Details" />
            <div className="row ms-1">
                <div className="col-lg-6 pt-2 unit-details-item">
                    <div className="label">MELEE STRENGTH</div>
                    <div className="value">20</div>
                </div>
                <div className="col-lg-6 pt-2 unit-details-item">
                    <div className="label">MOVEMENT</div>
                    <div className="value">2</div>
                </div>
                <div className="col-lg-6 pt-2 unit-details-item">
                    <div className="label">SIGHT RANGE</div>
                    <div className="value">2</div>
                </div>
                <div className="col-lg-6 pt-2 unit-details-item">
                    <div className="label">PRODUCTION COST</div>
                    <div className="value">30</div>
                </div>
                <div className="col-lg-6 pt-2 unit-details-item">
                    <div className="label">MAINTENANCE</div>
                    <div className="value">0 Gold</div>
                </div>
            </div>
        </div>
    )
}

export default WarriorDetails;
