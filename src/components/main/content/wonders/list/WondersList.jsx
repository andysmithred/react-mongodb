import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import ContentList from "../../common/ContentList";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";
import { setWonderSelected } from "../../../../../reducers/wonders/wondersSlice";
import "./WondersList.css";

const WondersList = () => {
    const wonders = useSelector((state) => state.wonders.items);
    const dispatch = useDispatch();
    const { wondersPath } = ImageDetails;

    const handleItemClicked = (id) => {
        dispatch(setWonderSelected(id));
    };

    const items = wonders.map((wonder) => (
        <ListTile
            key={wonder._id}
            id={wonder._id}
            primary={wonder.name}
            secondary={wonder.age || wonder.type || "--"}
            path={wonder.icon ? `${wondersPath}${wonder.icon}` : getIconPath("wonders")}
            onItemClicked={handleItemClicked}
        />
    ));

    return (
        <div className="wonders-list">
            <ContentList items={items} />
        </div>
    );
};

export default WondersList;
