import "./CivilizationsListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setCivilizationSelected, setCivilizationsView } from "../../../../../reducers/civilizations/civilizationsSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const CivilizationsListTile = ({ civilizationName }) => {
    const { civilizationsPath } = ImageDetails;
    const civilizations = useSelector((state) => state.civilizations.items);
    const civilization = civilizations.find((item) => item.demonym === civilizationName);
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setCivilizationSelected(id));
        dispatch(setCivilizationsView("details"));
        dispatch(setSelectedCategory("Civilizations"));
    };

    return civilization ? (
        <div
            className="d-flex flex-row p-1 civilizations-list-tile"
            onClick={() => onItemClicked(civilization._id)}
        >
            <img
                src={civilizationsPath + civilization.icon}
                className="image"
                alt={civilization.name}
            />
            <div className="ms-2">
                <div className="title">{civilization.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 civilizations-list-tile">{civilizationName}</div>
    );
};

export default CivilizationsListTile;