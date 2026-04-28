import "./UnitListTile.css";
import { ImageDetails } from "../../../../../utils/ImageDetails";
import { useDispatch, useSelector } from "react-redux";
import { setUnitSelected, setUnitsView } from "../../../../../reducers/units/unitsSlice";
import { setSelectedCategory } from "../../../../../reducers/categoriesSlice";

const UnitListTile = ({ unitName }) => {
    const { unitsPath } = ImageDetails;
    const units = useSelector((state) => state.units.items);
    const unit = units.find((item) => item.name.includes(unitName));
    const dispatch = useDispatch();

    console.log("UnitListTile", unitName, unit);

    const onItemClicked = (id) => {
        dispatch(setUnitSelected(id));
        dispatch(setUnitsView("details"));
        dispatch(setSelectedCategory("Units"));
    };

    return unit ? (
        <div
            className="d-flex flex-row p-1 unit-list-tile"
            onClick={() => onItemClicked(unit._id)}
        >
            <img
                src={unitsPath + unit.icon}
                className="image"
                alt={unit.name}
            />
            <div className="ms-2">
                <div className="title">{unit.name}</div>
            </div>
        </div>
    ) : (
        <div className="d-flex flex-row p-1 unit-list-tile">{unitName}</div>
    );
};

export default UnitListTile;
