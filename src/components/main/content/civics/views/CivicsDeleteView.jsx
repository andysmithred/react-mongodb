import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { deleteCivic, setCivicView } from "../../../../../reducers/civics/civicsSlice";
import DeleteCivic from "../forms/DeleteCivic";


const CivicsDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civics"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log("Deleting Civic => ", id);
        dispatch(deleteCivic(id));
    };
    
    const handleCancel = () => {
        dispatch(setCivicView("details"));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivicView}
            />
            <DeleteCivic
                onDelete={handleDelete}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default CivicsDeleteView;
