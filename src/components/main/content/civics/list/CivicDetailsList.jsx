import "./CivicDetailsList.css";
import CivicListTile from "./CivicListTile";
import DetailsHeader from "../../common/DetailsHeader";

const CivicDetailsList = ({ label, civics }) => {
    const items = [];

    civics.forEach((civicName) => {
        items.push(
            <CivicListTile 
                key={civicName}
                civicName={civicName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="civic-details-list-items">{items}</div>
        </>
    );
};

export default CivicDetailsList;
