import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setCivilizationsView, fetchCivilizations, setCivilizationSelected } from "../../../../../reducers/civilizations/civilizationsSlice";
import ItemsGrid from "../../common/ItemsGrid";
import { useEffect } from "react";


const CivilizationsIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Civilizations"));
    const items = useSelector((state) => state.civilizations.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCivilizations());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "empire"},
        { field: "demonym"},
        { field: "age"},
        { field: "attributes", valueFormatter: (params) => params.value?.join(", ")},
        { field: "ability.name"},
        { field: "wonder"},
        { field: "unique.military" },
        { field: "unique.civilian" },
        { field: "unlocks.requirements", valueFormatter: (params) => params.value?.join(", ")}, 
        { field: "unlocks.unlocks", valueFormatter: (params) => params.value?.join(", ")}, 
        { 
            headerName: "Historic Leaders",
            valueGetter: (params) => params.data?.leaders?.historic?.map(l => l.leader).join(", ")
        },
        { 
            headerName: "Geographic Leaders",
            valueGetter: (params) => params.data?.leaders?.geographic?.map(l => l.leader).join(", ")
        },
        { 
            headerName: "Strategic Leaders",
            valueGetter: (params) => params.data?.leaders?.strategic?.map(l => l.leader).join(", ")
        },
        { field: "start_biases", valueFormatter: (params) => params.value?.join(", ")}
    ];

    const rowClickedHandler = (data) => {
        console.log("Cell clicked => ", data);
        dispatch(setCivilizationSelected(data._id));
        dispatch(setCivilizationsView("details"));
    }

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setCivilizationsView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: 'fitCellContents' }}
            />
        </div>
    )
};

export default CivilizationsIndexView;
