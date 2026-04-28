import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { updateLeader, setLeadersView } from "../../../../../reducers/leaders/leadersSlice";
import EditLeader from "../forms/EditLeader";

const LeadersEditView = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Leaders"));
    
    const handleEdit = (updatedItem) => {
        dispatch(updateLeader(updatedItem));
    }

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setLeadersView}
            />
            <EditLeader onEdit={handleEdit} />
        </div>
    );
};

export default LeadersEditView;
