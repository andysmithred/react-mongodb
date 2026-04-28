import { useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import { setBuildingsView } from "../../../../../reducers/buildings/buildingsSlice";
import BuildingsList from "../list/BuildingsList";
import BuildingsDashboard from "../dashboard/BuildingsDashboard";

const BuildingsDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Buildings"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setBuildingsView} />
            <div className="d-flex flex-row content-view-content">
                <BuildingsList />
                <BuildingsDashboard />
            </div>
        </div>
    );
};

export default BuildingsDetailsView;
