import ItemsHeader from "../../common/ItemsHeader";
import { useDispatch, useSelector } from "react-redux";
import { addCivilization, fetchCivilizations, setCivilizationsView } from "../../../../../reducers/civilizations/civilizationsSlice";
import AddCivilization from "../forms/AddCivilization";

const CivilizationsNewView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civilizations"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addCivilization(item));
        dispatch(fetchCivilizations());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivilizationsView}
            />
            <AddCivilization onAdd={handleAddItem} />
        </div>
    );
};

export default CivilizationsNewView;
