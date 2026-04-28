import { useSelector } from "react-redux";

import BuildingsIndexView from "./views/BuildingsIndexView";
import BuildingsDetailsView from "./views/BuildingsDetailsView";
import BuildingsNewView from "./views/BuildingsNewView";
import BuildingsEditView from "./views/BuildingsEditView";
import BuildingsDeleteView from "./views/BuildingsDeleteView";

const BuildingsContent = () => {
    const view = useSelector((state) => state.buildings.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <BuildingsIndexView />}
            {view === "details" && <BuildingsDetailsView />}
            {view === "new" && <BuildingsNewView />}
            {view === "edit" && <BuildingsEditView />}
            {view === "delete" && <BuildingsDeleteView />}
        </div>
    );
};

export default BuildingsContent;
