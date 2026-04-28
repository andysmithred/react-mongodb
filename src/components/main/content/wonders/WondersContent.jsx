import { useSelector } from "react-redux";

import WondersIndexView from "./views/WondersIndexView";
import WondersDetailsView from "./views/WondersDetailsView";
import WondersNewView from "./views/WondersNewView";
import WondersEditView from "./views/WondersEditView";
import WondersDeleteView from "./views/WondersDeleteView";

const WondersContent = () => {
    const view = useSelector((state) => state.wonders.view);

    return (
        <div className="d-flex flex-column content-main">
            {view === "index" && <WondersIndexView />}
            {view === "details" && <WondersDetailsView />}
            {view === "new" && <WondersNewView />}
            {view === "edit" && <WondersEditView />}
            {view === "delete" && <WondersDeleteView />}
        </div>
    );
};

export default WondersContent;
