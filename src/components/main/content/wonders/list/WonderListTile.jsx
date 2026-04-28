import "./WonderListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setWonderSelected, setWondersView } from "../../../../../reducers/wonders/wondersSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const WonderListTile = ({ wonderName }) => {
    const { wondersPath } = ImageDetails;
    const wonders = useSelector((state) => state.wonders.items);
    const wonder = wonders.find((item) => item.name === wonderName);
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setWonderSelected(id));
        dispatch(setWondersView("details"));
        dispatch(setSelectedCategory("Wonders"));
    };

    return wonder ? (
        <div
            className="d-flex flex-row p-1 wonder-list-tile"
            onClick={() => onItemClicked(wonder._id)}
        >
            <img
                src={wondersPath + wonder.icon}
                className="image"
                alt={wonder.name}
            />
            <div className="ms-2">
                <div className="title">{wonder.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 wonder-list-tile">{wonderName}</div>
    );
};

export default WonderListTile;
