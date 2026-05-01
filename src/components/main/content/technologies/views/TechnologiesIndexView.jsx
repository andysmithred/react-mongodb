import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";
import { fetchTechnologies, setTechnologySelected, setTechnologiesView } from "../../../../../reducers/technologies/technologiesSlice";

const TechnologiesIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Technologies"));
    const items = useSelector((state) => state.technologies.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTechnologies());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "age" },
        { field: "cost" },
        { field: "level" },
        { 
            headerName: "Has Mastery",
            valueGetter: (params) => params.data.mastery && Object.values(params.data.mastery).some(arr => Array.isArray(arr) && arr.length > 0) ? "Yes" : "No"
        },
        { field: "requires", valueFormatter: (params) => params.value?.join(", ") },
        { field: "leads", valueFormatter: (params) => params.value?.join(", ") },
        { field: "tags", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.buildings", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.effects", valueFormatter: (params) => params.value?.join(", ") }, 
        { field: "unlocks.units", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.wonders", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.projects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.actions", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.effects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.buildings", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.wonders", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.actions", valueFormatter: (params) => params.value?.join(", ") },
    ];

    const rowClickedHandler = (data) => {
        dispatch(setTechnologySelected(data._id));
        dispatch(setTechnologiesView("details"));
    };

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setTechnologiesView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: "fitCellContents" }}
            />
        </div>
    );
};

export default TechnologiesIndexView;
