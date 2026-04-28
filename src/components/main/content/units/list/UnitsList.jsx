import { useDispatch, useSelector } from "react-redux";

import ListTile from "../../common/ListTile";
import ContentList from "../../common/ContentList";
import { ImageDetails, getIconPath } from "../../../../../utils/ImageDetails";
import { setUnitSelected } from "../../../../../reducers/units/unitsSlice";
import "././UnitsList.css";

const UnitsList = () => {
    const units = useSelector((state) => state.units.items);
    const dispatch = useDispatch();
    const { unitsPath } = ImageDetails;

    const handleItemClicked = (id) => {
        dispatch(setUnitSelected(id));
    };

    const items = units.map((unit) => (
        <ListTile
            key={unit._id}
            id={unit._id}
            primary={unit.name}
            secondary={unit.age || unit.type || "--"}
            path={unit.icon ? `${unitsPath}${unit.icon}` : getIconPath("units")}
            onItemClicked={handleItemClicked}
        />
    ));

    return (
        <div className="units-list">
            <ContentList items={items} />
        </div>
    );
};

export default UnitsList;
