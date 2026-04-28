import ItemsHeader from "../../common/ItemsHeader";
import { useDispatch, useSelector } from "react-redux";
import { addLeader, fetchLeaders, setLeadersView } from "../../../../../reducers/leaders/leadersSlice";
import AddLeader from "../forms/AddLeader";

const LeadersNewView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Leaders"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addLeader(item));
        dispatch(fetchLeaders());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setLeadersView}
            />
            <AddLeader onAdd={handleAddItem} />
        </div>
    );
};

export default LeadersNewView;
