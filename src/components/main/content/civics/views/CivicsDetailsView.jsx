import { useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setCivicView } from "../../../../../reducers/civics/civicsSlice";
import CivicsList from "../list/CivicsList";
import CivicsDashboard from "../dashboard/CivicsDashboard";

const CivicsDetailsView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Civics"));

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Index", "New", "Edit", "Delete"]} category={category} setView={setCivicView} />
            <div className="d-flex flex-row content-view-content">
                <CivicsList />
                <CivicsDashboard />
            </div>
        </div>
    )
};

export default CivicsDetailsView;
