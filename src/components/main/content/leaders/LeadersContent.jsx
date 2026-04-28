import { useSelector } from "react-redux"
import LeadersIndexView from "./views/LeadersIndexView";
import LeadersDetailsView from "./views/LeadersDetailsView";
import LeadersNewView from "./views/LeadersNewView";
import LeadersEditView from "./views/LeadersEditView";
import LeadersDeleteView from "./views/LeadersDeleteView";

const LeadersContent = () => {
    const view = useSelector((state) => state.leaders.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <LeadersIndexView />}
            {view === "details" && <LeadersDetailsView />}
            {view === "new" && <LeadersNewView />}
            {view === "edit" && <LeadersEditView />}
            {view === "delete" && <LeadersDeleteView />}
        </div>
    )
}

export default LeadersContent;
