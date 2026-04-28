import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import ContentList from "../../common/ContentList";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";
import { setBuildingSelected } from "../../../../../reducers/buildings/buildingsSlice";
import "./BuildingsList.css";

const BuildingsList = () => {
    const buildings = useSelector((state) => state.buildings.items);
    const dispatch = useDispatch();
    const { buildingsPath } = ImageDetails;

    const handleItemClicked = (id) => {
        dispatch(setBuildingSelected(id));
    };

    const items = buildings.map((building) => (
        <ListTile
            key={building._id}
            id={building._id}
            primary={building.name}
            secondary={building.type || building.age || "--"}
            path={building.icon ? `${buildingsPath}${building.icon}` : getIconPath("buildings")}
            onItemClicked={handleItemClicked}
        />
    ));

    return (
        <div className="buildings-list">
            <ContentList items={items} />
        </div>
    );
};

export default BuildingsList;
