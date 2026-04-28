import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import DeleteBuilding from "../forms/DeleteBuilding";
import { deleteBuilding, setBuildingsView } from "../../../../../reducers/buildings/buildingsSlice";

const BuildingsDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Buildings"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBuilding(id));
    };

    const handleCancel = () => {
        dispatch(setBuildingsView("details"));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setBuildingsView}
            />
            <DeleteBuilding onDelete={handleDelete} onCancel={handleCancel} />
        </div>
    );
};

export default BuildingsDeleteView;
