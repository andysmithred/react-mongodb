import DetailsHeader from "../../common/DetailsHeader";
import "./Cost.css";

const Cost = ({cost}) => {
    return (
        <div className="cost">
            {/* <DetailsHeader label="Cost" /> */}
            <div className="label">
                Cost
            </div>
            <div className="content">
                {cost}
            </div>
        </div>
    )
}

export default Cost;
