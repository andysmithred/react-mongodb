import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import EditWonder from "../forms/EditWonder";
import { setWondersView, updateWonder } from "../../../../../reducers/wonders/wondersSlice";

const WondersEditView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Wonders"));
    const dispatch = useDispatch();

    const handleEdit = (updatedItem) => {
        dispatch(updateWonder(updatedItem));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setWondersView}
            />
            <EditWonder onEdit={handleEdit} />
        </div>
    );
};

export default WondersEditView;
