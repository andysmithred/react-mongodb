import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import DeleteWonder from "../forms/DeleteWonder";
import { deleteWonder, setWondersView } from "../../../../../reducers/wonders/wondersSlice";

const WondersDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Wonders"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteWonder(id));
    };

    const handleCancel = () => {
        dispatch(setWondersView("details"));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setWondersView}
            />
            <DeleteWonder onDelete={handleDelete} onCancel={handleCancel} />
        </div>
    );
};

export default WondersDeleteView;
