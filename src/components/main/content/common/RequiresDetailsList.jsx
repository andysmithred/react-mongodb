import "./RequiresDetailsList.css";
import RequiresListTile from "./RequiresListTile";
import DetailsHeader from "./DetailsHeader";

const RequiresDetailsList = ({ label, requirements }) => {
    const items = [];

    requirements.forEach((requirement) => {
        items.push(
            <RequiresListTile 
                key={requirement}
                requirement={requirement}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="requires-details-list-items">{items}</div>
        </>
    );
};

export default RequiresDetailsList;
