import { useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import { setTechnologiesView } from "../../../../../reducers/technologies/technologiesSlice";
import TechnologiesList from "../list/TechnologiesList";
import TechnologiesDashboard from "../dashboard/TechnologiesDashboard";

const TechnologiesDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Technologies"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setTechnologiesView} />
            <div className="d-flex flex-row content-view-content">
                <TechnologiesList />
                <TechnologiesDashboard />
            </div>
        </div>
    );
};

export default TechnologiesDetailsView;
