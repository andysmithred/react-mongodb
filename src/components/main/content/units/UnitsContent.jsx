import { useSelector } from "react-redux"
import UnitsDetailsView from "./views/UnitsDetailsView";
import UnitsIndexView from "./views/UnitsIndexView";
import UnitsNewView from "./views/UnitsNewView";
import UnitsEditView from "./views/UnitsEditView";
import UnitsDeleteView from "./views/UnitsDeleteView";

const UnitsContent = () => {
    const view = useSelector((state) => state.units.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <UnitsIndexView />}
            {view === "details"  && <UnitsDetailsView />}
            {view === "new"  && <UnitsNewView />}
            {view === "edit"  && <UnitsEditView />}
            {view === "delete"  && <UnitsDeleteView />}
        </div>
    )
}

export default UnitsContent;
