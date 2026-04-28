import "./BuildingDetailsList.css";
import BuildingListTile from "./BuildingListTile";
import DetailsHeader from "../../common/DetailsHeader";

const BuildingDetailsList = ({ label, buildings }) => {
    const items = [];

    buildings.forEach((buildingName) => {
        items.push(
            <BuildingListTile    
                key={buildingName}
                buildingName={buildingName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="building-details-list-items">{items}</div>
        </>
    );
};

export default BuildingDetailsList;
