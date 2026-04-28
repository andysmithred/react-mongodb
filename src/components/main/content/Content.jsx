import { useDispatch, useSelector } from "react-redux"
import HomeContent from "./home/HomeContent";
import LeadersContent from "./leaders/LeadersContent";
import UnitsContent from "./units/UnitsContent";
import CivilizationsContent from "./civilizations/CivilizationsContent";
import CivicsContent from "./civics/CivicsContent";
import TechnologiesContent from "./technologies/TechnologiesContent";
import BuildingsContent from "./buildings/BuildingsContent";
import WondersContent from "./wonders/WondersContent";
import { setSelectedCategory } from "../../../reducers/categoriesSlice";

const Content = () => {
    const categoryName = useSelector((state) => state.categories.selected);
    const dispatch = useDispatch();

    if (!categoryName) {
        dispatch(setSelectedCategory("Home"));
    }

    return (
        <div className="d-flex flex-column flex-fill content">
            {categoryName === "Home" && <HomeContent />}
            {categoryName === "Leaders" && <LeadersContent />}
            {categoryName === "Units" && <UnitsContent />}
            {categoryName === "Civilizations" && <CivilizationsContent />}
            {categoryName === "Civics" && <CivicsContent />}
            {categoryName === "Technologies" && <TechnologiesContent />}
            {categoryName === "Buildings" && <BuildingsContent />}
            {categoryName === "Wonders" && <WondersContent />}
        </div>
    )
}

export default Content;
