import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import { setCivicSelected } from "../../../../../reducers/civics/civicsSlice";
import ContentList from "../../common/ContentList";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import "./CivicsList.css";


const CivicsList = () => {
    const civics = useSelector((state) => state.civics.items);
    const dispatch = useDispatch();
    const { civicsPath } = ImageDetails;
  
    const handleItemClicked = (id) => {
      console.log("Item clicked => ", id);
        dispatch(setCivicSelected(id));
    };

    const items = [];
    civics.forEach(civic => {
      items.push(
        <ListTile
          key={civic._id}
          id={civic._id}
          primary={civic.name}
          secondary={civic.age}
          path={civicsPath + civic.icon}
          onItemClicked={handleItemClicked}
        />
      );
    });

    return (
        <div className="civics-list">
            <ContentList items={items} />
        </div>
    )
}

export default CivicsList;
