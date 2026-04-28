import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import AddWonder from "../forms/AddWonder";
import { addWonder, fetchWonders, setWondersView } from "../../../../../reducers/wonders/wondersSlice";

const WondersNewView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Wonders"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addWonder(item));
        dispatch(fetchWonders());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setWondersView}
            />
            <AddWonder onAdd={handleAddItem} />
        </div>
    );
};

export default WondersNewView;
