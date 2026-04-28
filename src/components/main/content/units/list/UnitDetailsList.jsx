import "./UnitDetailsList.css";
import UnitListTile from "./UnitListTile";
import DetailsHeader from "../../common/DetailsHeader";


const UnitDetailsList = ({ label, units }) => {
    const items = [];

    units.forEach((unitName) => {
        items.push(
            <UnitListTile 
                key={unitName}
                unitName={unitName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="unit-details-list-items">{items}</div>
        </>
    );
};

export default UnitDetailsList;
