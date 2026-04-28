import { useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setUnitsView } from "../../../../../reducers/units/unitsSlice";
import UnitsList from "../list/UnitsList";

import "../../Content.css";
import UnitsDashboard from "../dashboard/UnitsDashboard";


const UnitsDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Units"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setUnitsView} />
            <div className="d-flex flex-row content-view-content">
                <UnitsList />
                <UnitsDashboard />
            </div>
        </div>
    )
};

export default UnitsDetailsView;
