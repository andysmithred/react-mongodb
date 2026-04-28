import { useDispatch, useSelector } from "react-redux";
import { addUnit, setUnitsView, fetchUnits } from "../../../../../reducers/units/unitsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddUnit from "../forms/AddUnit";


const UnitsNewView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Units"));

    const handleAddItem = (item) => {
        dispatch(addUnit(item));
        dispatch(fetchUnits());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setUnitsView}
            />
            <AddUnit onAdd={handleAddItem} />
        </div>
    );
};

export default UnitsNewView;
