import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import AddBuilding from "../forms/AddBuilding";
import { addBuilding, fetchBuildings, setBuildingsView } from "../../../../../reducers/buildings/buildingsSlice";

const BuildingsNewView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Buildings"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addBuilding(item));
        dispatch(fetchBuildings());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setBuildingsView}
            />
            <AddBuilding onAdd={handleAddItem} />
        </div>
    );
};

export default BuildingsNewView;
