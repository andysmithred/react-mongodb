import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { deleteLeader, setLeadersView } from "../../../../../reducers/leaders/leadersSlice";
import DeleteLeader from "../forms/DeleteLeader";


const LeadersDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Leaders"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log("Deleting Unit => ", id);
        dispatch(deleteLeader(id));
    };
    
    const handleCancel = () => {
        dispatch(setLeadersView("details"));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setLeadersView}
            />
            <DeleteLeader
                onDelete={handleDelete}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default LeadersDeleteView;
