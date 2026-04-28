import { useSelector } from "react-redux"
import CivicsIndexView from "./views/CivicsIndexView";
import CivicsDetailsView from "./views/CivicsDetailsView";
import CivicsNewView from "./views/CivicsNewView";
import CivicsEditView from "./views/CivicsEditView";
import CivicsDeleteView from "./views/CivicsDeleteView";

const CivicsContent = () => {
    const view = useSelector((state) => state.civics.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <CivicsIndexView />}
            {view === "details" && <CivicsDetailsView />}
            {view === "new" && <CivicsNewView />}
            {view === "edit" && <CivicsEditView />}
            {view === "delete" && <CivicsDeleteView />}
        </div>
    )
}

export default CivicsContent;
