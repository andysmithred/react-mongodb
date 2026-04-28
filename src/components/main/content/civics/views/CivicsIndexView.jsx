import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setCivicView, fetchCivics, setCivicSelected } from "../../../../../reducers/civics/civicsSlice";
import ItemsGrid from "../../common/ItemsGrid";
import { useEffect } from "react";


const CivicsIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Civics"));
    const items = useSelector((state) => state.civics.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCivics());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "age"},
        { field: "level" },
        { field: "cost"},
        { 
            headerName: "Has Mastery",
            valueGetter: (params) => params.data.mastery && Object.values(params.data.mastery).some(arr => Array.isArray(arr) && arr.length > 0) ? "Yes" : "No"
        },
        { field: "requires", valueFormatter: (params) => params.value?.join(", ") },
        { field: "leads", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.wonders", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.units", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.buildings", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.projects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.policies", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.endeavors", valueFormatter: (params) => params.value?.join(", ") },
        { field: "unlocks.effects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.wonders", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.units", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.buildings", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.projects", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.policies", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.endeavors", valueFormatter: (params) => params.value?.join(", ") },
        { field: "mastery.effects", valueFormatter: (params) => params.value?.join(", ") },
    ];

    const rowClickedHandler = (data) => {
        dispatch(setCivicSelected(data._id));
        dispatch(setCivicView("details"));
    }

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setCivicView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: 'fitCellContents' }}
            />
        </div>
    )
};

export default CivicsIndexView;
