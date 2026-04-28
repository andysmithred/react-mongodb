import "./LeadersListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setLeaderSelected, setLeadersView } from "../../../../../reducers/leaders/leadersSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const LeadersListTile = ({ leaderName }) => {
    const { leadersPath } = ImageDetails;
    const leaders = useSelector((state) => state.leaders.items);
    const leader = leaders.find((leader) => leader.name === leaderName);
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setLeaderSelected(id));
        dispatch(setLeadersView("details"));
        dispatch(setSelectedCategory("Leaders"));
    }

    return (
        leader ? 
            (<div className="d-flex flex-row p-1 leaders-list-tile" onClick={() => onItemClicked(leader._id)}>
                <img src={leadersPath + leader.icon} className="image" alt={leader.name} />
                <div className="ms-2">
                    <div className="title">{leader.name}</div>
                </div>
            </div>) : <div className="d-flex flex-row p-1 leaders-list-tile">{leaderName}</div>
    )
}

export default LeadersListTile;
