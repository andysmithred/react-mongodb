import "./BuildingListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setBuildingSelected, setBuildingsView } from "../../../../../reducers/buildings/buildingsSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const BuildingListTile = ({ buildingName }) => {
    const { buildingsPath } = ImageDetails;
    const buildings = useSelector((state) => state.buildings.items);
    const building = buildings.find((item) => item.name.includes(buildingName));
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setBuildingSelected(id));
        dispatch(setBuildingsView("details"));
        dispatch(setSelectedCategory("Buildings"));
    };

    return building ? (
        <div
            className="d-flex flex-row p-1 building-list-tile"
            onClick={() => onItemClicked(building._id)}
        >
            <img
                src={buildingsPath + building.icon}
                className="image"
                alt={building.name}
            />
            <div className="ms-2">
                <div className="title">{building.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 building-list-tile">{buildingName}</div>
    );
};

export default BuildingListTile;
