import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setUnitsView, fetchUnits, setUnitSelected } from "../../../../../reducers/units/unitsSlice";
import ItemsGrid from "../../common/ItemsGrid";
import { useEffect } from "react";


const UnitsIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Units"));
    const items = useSelector((state) => state.units.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUnits());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "tier" },
        { field: "age" },
        { field: "type" },
        { field: "cost.production" },
        { field: "cost.scalable" },
        { field: "cost.gold" },
        { field: "cost.maintenance" },
        { field: "stats.movement" },
        { field: "stats.strength" },
        { field: "stats.sight" },
        { field: "stats.range" },
        { field: "stats.ranged" },
        { field: "stats.bombard" },
        { field: "unlocked"},
        { field: "obsolete" },
        { field: "replaces" },
        { field: "upgrades" },
    ];

    const rowClickedHandler = (data) => {
        console.log("Cell clicked => ", data);
        dispatch(setUnitSelected(data._id));
        dispatch(setUnitsView("details"));
    }

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setUnitsView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: 'fitCellContents' }}
            />
        </div>
    )
};

export default UnitsIndexView;
