import { useSelector } from "react-redux"
import CivilizationsIndexView from "./views/CivilizationsIndexView";
import CivilizationsDetailsView from "./views/CivilizationsDetailsView";
import CivilizationsNewView from "./views/CivilizationsNewView";
import CivilizationsEditView from "./views/CivilizationsEditView";
import CivilizationsDeleteView from "./views/CivilizationsDeleteView";

const CivilizationsContent = () => {
    const view = useSelector((state) => state.civilizations.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <CivilizationsIndexView />}
            {view === "details" && <CivilizationsDetailsView />}
            {view === "new" && <CivilizationsNewView />}
            {view === "edit" && <CivilizationsEditView />}
            {view === "delete" && <CivilizationsDeleteView />}
        </div>
    )
}

export default CivilizationsContent;
