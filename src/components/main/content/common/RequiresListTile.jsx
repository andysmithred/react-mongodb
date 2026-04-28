import "./RequiresListTile.css";
import { ImageDetails } from "../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";

import { setCivicSelected, setCivicView } from "../../../../reducers/civics/civicsSlice";
import { setTechnologySelected, setTechnologiesView } from "../../../../reducers/technologies/technologiesSlice";
import { setSelectedCategory } from "../../../../reducers/categoriesSlice";

const RequiresListTile = ({ requirement }) => {
    const dispatch = useDispatch();
    const { civicsPath, technologiesPath } = ImageDetails;
    const civics = useSelector((state) => state.civics.items);
    const technologies = useSelector((state) => state.technologies.items);

    let item = civics.find((i) => i.name === requirement);
    let isCivic = true;
    if (!item) {
        item = technologies.find((i) => i.name === requirement);
        isCivic = false;
    }

    const onItemClicked = (id, isCivic) => {
        if (isCivic) {
            dispatch(setCivicSelected(id));
            dispatch(setCivicView("details"));
            dispatch(setSelectedCategory("Civics"));
        } else {    
            dispatch(setTechnologySelected(id));
            dispatch(setTechnologiesView("details"));
            dispatch(setSelectedCategory("Technologies"));
        }
    };

    return item ? (
        <div
            className="d-flex flex-row p-1 requires-list-tile"
            onClick={() => onItemClicked(item._id, isCivic)}
        >
            <img
                src={isCivic ? civicsPath + item.icon : technologiesPath + item.icon}
                className="image"
                alt={item.name}
            />
            <div className="ms-2">
                <div className="title">{item.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 requires-list-tile">{requirement}</div>
    );
};

export default RequiresListTile;
