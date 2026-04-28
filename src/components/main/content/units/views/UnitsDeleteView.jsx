import { useDispatch, useSelector } from "react-redux";
import { deleteUnit, setUnitsView } from "../../../../../reducers/units/unitsSlice";
import DeleteUnit from "../forms/DeleteUnit";
import ItemsHeader from "../../common/ItemsHeader";


const UnitsDeleteView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Units"));

    const handleDelete = (id) => {
        console.log("Deleting Unit => ", id);
        dispatch(deleteUnit(id));
    };

    const handleCancel = () => {
        dispatch(setUnitsView("details"));
    }

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setUnitsView}
            />
            <DeleteUnit onDelete={handleDelete} onCancel={handleCancel} />
        </div>
    )
};

export default UnitsDeleteView;
