import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import EditBuilding from "../forms/EditBuilding";
import { setBuildingsView, updateBuilding } from "../../../../../reducers/buildings/buildingsSlice";

const BuildingsEditView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Buildings"));
    const dispatch = useDispatch();

    const handleEdit = (updatedItem) => {
        dispatch(updateBuilding(updatedItem));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setBuildingsView}
            />
            <EditBuilding onEdit={handleEdit} />
        </div>
    );
};

export default BuildingsEditView;
