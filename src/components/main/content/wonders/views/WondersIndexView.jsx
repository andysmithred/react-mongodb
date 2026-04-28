import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";
import { fetchWonders, setWonderSelected, setWondersView } from "../../../../../reducers/wonders/wondersSlice";

const WondersIndexView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Wonders"));
    const items = useSelector((state) => state.wonders.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWonders());
    }, [dispatch]);

    const colDefs = [
        { field: "_id" },
        { field: "name" },
        { field: "cost" },
        { field: "age" },
        { field: "associated" },
        { field: "requires", valueFormatter: (params) => params.value?.join(", ") },
        { field: "placement" },
        { field: "effects", valueFormatter: (params) => params.value?.join(", ") },
    ];

    const rowClickedHandler = (data) => {
        dispatch(setWonderSelected(data._id));
        dispatch(setWondersView("details"));
    };

    return (
        <div className="d-flex flex-column content-view">
            <ItemsHeader menuItems={["Details", "New"]} category={category} setView={setWondersView} />
            <ItemsGrid
                items={items}
                columnDefs={colDefs}
                onRowClick={rowClickedHandler}
                autoSizeStrategy={{ type: "fitCellContents" }}
            />
        </div>
    );
};

export default WondersIndexView;
