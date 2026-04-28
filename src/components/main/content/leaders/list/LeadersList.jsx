import { useDispatch } from "react-redux";

import ListTile from "../../common/ListTile";
import { setLeaderSelected } from "../../../../../reducers/leaders/leadersSlice";
import ContentList from "../../common/ContentList";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import "./LeadersList.css";

const LeadersList = ({ leaders }) => {
    const dispatch = useDispatch();
    const { leadersPath } = ImageDetails;
    const items = [];

    const handleItemClicked = (id) => {
        dispatch(setLeaderSelected(id));
    };

    leaders.forEach(leader => {
      items.push(
        <ListTile
          key={leader._id}
          id={leader._id}
          primary={leader.name}
          secondary={leader.ability?.name}
          path={leadersPath + leader.icon}
          onItemClicked={handleItemClicked}
        />
      );
    });

    return (
        <div className="leaders-list">
            <ContentList items={items} />
        </div>
    )
}

export default LeadersList;
