import { useDispatch, useSelector } from "react-redux";
import ItemsHeader from "../../common/ItemsHeader";
import { setLeadersView, fetchLeaders, setLeaderSelected } from "../../../../../reducers/leaders/leadersSlice";
import ItemsGrid from "../../common/ItemsGrid";
import { useEffect } from "react";


const LeadersIndexView = () => {
    // Assuming "Leaders" is the category name, similar to "Units"
    const category = useSelector((state) => state.categories.items.find((category) => category.name === "Leaders"));
    const items = useSelector((state) => state.leaders.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeaders());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "attributes", valueFormatter: (params) => params.value?.join(", ") },
        { field: "ability.name" },
        { field: "agenda.name" },
        { field: "civilizations.historic", valueFormatter: (params) => params.value?.join(", ") },
        { field: "civilizations.geographic", valueFormatter: (params) => params.value?.join(", ") },
        { field: "civilizations.strategic", valueFormatter: (params) => params.value?.join(", ") },
        { field: "start_bias", valueFormatter: (params) => params.value?.join(", ")},
        { field: "momentos", valueFormatter: (params) => params.value?.join(", ") }
    ];

    const rowClickedHandler = (data) => {
        console.log("Cell clicked => ", data);
        dispatch(setLeaderSelected(data._id));
        dispatch(setLeadersView("details"));
    }

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setLeadersView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: 'fitCellContents' }}
            />
        </div>
    )
};

export default LeadersIndexView;
