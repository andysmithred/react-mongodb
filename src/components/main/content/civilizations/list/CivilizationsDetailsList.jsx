import "./CivilizationsDetailsList.css";
import CivilizationsListTile from "./CivilizationsListTile";
import DetailsHeader from "../../common/DetailsHeader";

const CivilizationsDetailsList = ({ label, civilizations }) => {
    const items = [];

    civilizations.forEach((civilizationName) => {
        items.push(
            <CivilizationsListTile
                key={civilizationName}
                civilizationName={civilizationName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="civilizations-details-list-items">{items}</div>
        </>
    );
};

export default CivilizationsDetailsList;