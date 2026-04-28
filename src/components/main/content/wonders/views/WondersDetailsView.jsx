import { useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import { setWondersView } from "../../../../../reducers/wonders/wondersSlice";
import WondersList from "../list/WondersList";
import WondersDashboard from "../dashboard/WondersDashboard";

const WondersDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Wonders"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setWondersView} />
            <div className="d-flex flex-row content-view-content">
                <WondersList />
                <WondersDashboard />
            </div>
        </div>
    );
};

export default WondersDetailsView;
