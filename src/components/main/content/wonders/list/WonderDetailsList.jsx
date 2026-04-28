import "./WonderDetailsList.css";
import WonderListTile from "./WonderListTile";
import DetailsHeader from "../../common/DetailsHeader";

const WonderDetailsList = ({ label, wonders }) => {
    const items = [];

    wonders.forEach((wonderName) => {
        items.push(
            <WonderListTile 
                key={wonderName}
                wonderName={wonderName}
            />
        );
    });

    return (
        <>
            <DetailsHeader label={label} />
            <div className="wonder-details-list-items">{items}</div>
        </>
    );
};

export default WonderDetailsList;
