import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { updateCivilization, setCivilizationsView } from "../../../../../reducers/civilizations/civilizationsSlice";
import EditCivilization from "../forms/EditCivilization";

const CivilizationsEditView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civilizations"));
    
    const handleEdit = (updatedItem) => {
        dispatch(updateCivilization(updatedItem));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivilizationsView}
            />
            <EditCivilization onEdit={handleEdit} />
        </div>
    );
};

export default CivilizationsEditView;
