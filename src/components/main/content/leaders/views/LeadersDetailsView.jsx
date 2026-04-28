import { useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setLeadersView } from "../../../../../reducers/leaders/leadersSlice";
import LeadersList from "../list/LeadersList";
import LeadersDashboard from "../dashboard/LeadersDashboard";

const LeadersDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Leaders"));
    const leaders = useSelector((state) => state.leaders.items);

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setLeadersView} />
            <div className="d-flex flex-row content-view-content">
                <LeadersList leaders={leaders} />
                <LeadersDashboard />
            </div>
        </div>
    )
};

export default LeadersDetailsView;
