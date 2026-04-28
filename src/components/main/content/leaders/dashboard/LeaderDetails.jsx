import DetailsHeader from "../../common/DetailsHeader";
import "./LeaderDetails.css";

const LeaderDetails = ({ leader }) => {
    return (
        <div className="leader-details">
            <DetailsHeader label="Details" />
            <div className="row">
                <div className="col-lg-6 leader-details-item">
                    <div className="label">ABILITY</div>
                    <div className="value">{leader.ability.name}</div>
                </div>
                <div className="col-lg-6 leader-details-item">
                    <div className="label">AGENDA</div>
                    <div className="value">{leader.agenda.name}</div>
                </div>
                <div className="col-lg-6 leader-details-item">
                    <div className="label">ATTRIBUTES</div>
                    <div className="value">{leader.attributes && leader.attributes.join(', ')}</div>
                </div>
                <div className="col-lg-6 leader-details-item">
                    <div className="label">START BIAS</div>
                    <div className="value">{leader.start_bias && leader.start_bias.length > 0 ? leader.start_bias.join(', ') : '--'}</div>
                </div>
            </div>
        </div>
    )
}

export default LeaderDetails;
