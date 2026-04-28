import "./TechnologyListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setTechnologySelected, setTechnologiesView } from "../../../../../reducers/technologies/technologiesSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const TechnologyListTile = ({ technologyName }) => {
    const { technologiesPath } = ImageDetails;
    const technologies = useSelector((state) => state.technologies.items);
    const technology = technologies.find((item) => item.name.includes(technologyName));
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setTechnologySelected(id));
        dispatch(setTechnologiesView("details"));
        dispatch(setSelectedCategory("Technologies"));
    };

    return technology ? (
        <div
            className="d-flex flex-row p-1 technology-list-tile"
            onClick={() => onItemClicked(technology._id)}
        >
            <img
                src={technologiesPath + technology.icon}
                className="image"
                alt={technology.name}
            />
            <div className="ms-2">
                <div className="title">{technology.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 technology-list-tile">{technologyName}</div>
    );
};

export default TechnologyListTile;