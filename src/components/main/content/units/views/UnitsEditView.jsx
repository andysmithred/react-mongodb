import { useDispatch, useSelector } from "react-redux";
import { setUnitsView, updateUnit } from "../../../../../reducers/units/unitsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditUnit from "../forms/EditUnit";

const UnitsEditView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Units"));

    const handleEdit = (updatedItem) => {
        console.log("Handle Edit => ", updatedItem);
        dispatch(updateUnit(updatedItem));
    }

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setUnitsView}
            />
            <EditUnit onEdit={handleEdit} />
        </div>
  );
};

export default UnitsEditView;
