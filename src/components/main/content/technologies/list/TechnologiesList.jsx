import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import ContentList from "../../common/ContentList";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";
import { setTechnologySelected } from "../../../../../reducers/technologies/technologiesSlice";
import "./TechnologiesList.css";

const TechnologiesList = () => {
    const technologies = useSelector((state) => state.technologies.items);
    const dispatch = useDispatch();
    const { technologiesPath } = ImageDetails;

    const handleItemClicked = (id) => {
        dispatch(setTechnologySelected(id));
    };

    const items = technologies.map((technology) => (
        <ListTile
            key={technology._id}
            id={technology._id}
            primary={technology.name}
            secondary={technology.age || technology.type || "--"}
            path={technology.icon ? `${technologiesPath}${technology.icon}` : getIconPath("technologies")}
            onItemClicked={handleItemClicked}
        />
    ));

    return (
        <div className="technologies-list">
            <ContentList items={items} />
        </div>
    );
};

export default TechnologiesList;
