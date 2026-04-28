import "./CivicListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setCivicSelected, setCivicView } from "../../../../../reducers/civics/civicsSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const CivicListTile = ({ civicName }) => {
    const { civicsPath } = ImageDetails;
    const civics = useSelector((state) => state.civics.items);
    const civic = civics.find((item) => item.name.includes(civicName));
    const dispatch = useDispatch();

    const onItemClicked = (id) => {
        dispatch(setCivicSelected(id));
        dispatch(setCivicView("details"));
        dispatch(setSelectedCategory("Civics"));
    };

    return civic ? (
        <div
            className="d-flex flex-row p-1 civic-list-tile"
            onClick={() => onItemClicked(civic._id)}
        >
            <img
                src={civicsPath + civic.icon}
                className="image"
                alt={civic.name}
            />
            <div className="ms-2">
                <div className="title">{civic.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 civic-list-tile">{civicName}</div>
    );
};

export default CivicListTile;
