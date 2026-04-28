import { useSelector } from "react-redux";
import TechnologiesIndexView from "./views/TechnologiesIndexView";
import TechnologiesDetailsView from "./views/TechnologiesDetailsView";
import TechnologiesNewView from "./views/TechnologiesNewView";
import TechnologiesEditView from "./views/TechnologiesEditView";
import TechnologiesDeleteView from "./views/TechnologiesDeleteView";

const TechnologiesContent = () => {
    const view = useSelector((state) => state.technologies.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <TechnologiesIndexView />}
            {view === "details" && <TechnologiesDetailsView />}
            {view === "new" && <TechnologiesNewView />}
            {view === "edit" && <TechnologiesEditView />}
            {view === "delete" && <TechnologiesDeleteView />}
        </div>
    );
};

export default TechnologiesContent;