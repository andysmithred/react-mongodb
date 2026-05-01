import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";
import { fetchBuildings, setBuildingSelected, setBuildingsView } from "../../../../../reducers/buildings/buildingsSlice";

const BuildingsIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Buildings"));
    const items = useSelector((state) => state.buildings.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBuildings());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "age" },
        { field: "cost.production" },
        { field: "cost.gold" },
        { field: "maintenance.gold" },
        { field: "maintenance.happiness" },
        { field: "pillage" },
        { field: "unlocked" },
        { field: "type" },
        { field: "placement" },
        { field: "ageless" },
        { field: "unique" },
        { field: "unique_to" },
        { field: "yields.base", valueFormatter: (params) => params.value?.join(", ") },
        { field: "yields.adjacency", valueFormatter: (params) => params.value?.join(", ") },
        { field: "yields.effects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "tags", valueFormatter: (params) => params.value?.join(", ") },
    ];

    const rowClickedHandler = (data) => {
        dispatch(setBuildingSelected(data._id));
        dispatch(setBuildingsView("details"));
    };

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setBuildingsView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: "fitCellContents" }}
            />
        </div>
    );
};

export default BuildingsIndexView;
