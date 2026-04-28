import "./TechnologyDetailsList.css";
import TechnologyListTile from "./TechnologyListTile";
import DetailsHeader from "../../common/DetailsHeader";

const TechnologyDetailsList = ({ label, technologies }) => {
    const items = [];

    technologies.forEach((technologyName) => {
        items.push(
            <TechnologyListTile 
                key={technologyName}
                technologyName={technologyName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="technology-details-list-items">{items}</div>
        </>
    );
};

export default TechnologyDetailsList;