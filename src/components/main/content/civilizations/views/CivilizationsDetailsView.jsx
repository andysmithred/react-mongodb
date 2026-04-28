import { useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setCivilizationsView } from "../../../../../reducers/civilizations/civilizationsSlice";
import CivilizationsList from "../list/CivilizationsList";
import CivilizationsDashboard from "../dashboard/CivilizationsDashboard";

const CivilizationsDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Civilizations"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setCivilizationsView} />
            <div className="d-flex flex-row content-view-content">
                <CivilizationsList />
                <CivilizationsDashboard />
            </div>
        </div>
    )
};

export default CivilizationsDetailsView;
