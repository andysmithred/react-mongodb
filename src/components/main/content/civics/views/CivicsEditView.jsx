import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { updateCivic, setCivicView } from "../../../../../reducers/civics/civicsSlice";
import EditCivic from "../forms/EditCivic";

const CivicsEditView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civics"));
    
    const handleEdit = (updatedItem) => {
        dispatch(updateCivic(updatedItem));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivicView}
            />
            <EditCivic onEdit={handleEdit} />
        </div>
    );
};

export default CivicsEditView;
