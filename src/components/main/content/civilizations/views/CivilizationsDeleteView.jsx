import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { deleteCivilization, setCivilizationsView } from "../../../../../reducers/civilizations/civilizationsSlice";
import DeleteCivilization from "../forms/DeleteCivilization";


const CivilizationsDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civilizations"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log("Deleting Civilization => ", id);
        dispatch(deleteCivilization(id));
    };
    
    const handleCancel = () => {
        dispatch(setCivilizationsView("details"));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivilizationsView}
            />
            <DeleteCivilization
                onDelete={handleDelete}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default CivilizationsDeleteView;
