import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import { setCivilizationSelected } from "../../../../../reducers/civilizations/civilizationsSlice";
import ContentList from "../../common/ContentList";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import "./CivilizationsList.css";


const CivilizationsList = () => {
    const civilizations = useSelector((state) => state.civilizations.items);
    const dispatch = useDispatch();
    const { civilizationsPath } = ImageDetails;
  
    const handleItemClicked = (id) => {
        dispatch(setCivilizationSelected(id));
    };

    const items = [];
    civilizations.forEach(civilization => {
      items.push(
        <ListTile
          key={civilization._id}
          id={civilization._id}
          primary={civilization.name}
          secondary={civilization.empire}
          path={civilizationsPath + civilization.icon}
          onItemClicked={handleItemClicked}
        />
      );
    });

    return (
        <div className="civilizations-list">
            <ContentList items={items} />
        </div>
    )
}

export default CivilizationsList;
