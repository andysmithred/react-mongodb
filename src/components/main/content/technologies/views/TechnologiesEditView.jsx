import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import EditTechnology from "../forms/EditTechnology";
import { setTechnologiesView, updateTechnology } from "../../../../../reducers/technologies/technologiesSlice";

const TechnologiesEditView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Technologies"));
    const dispatch = useDispatch();

    const handleEdit = (updatedItem) => {
        dispatch(updateTechnology(updatedItem));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setTechnologiesView}
            />
            <EditTechnology onEdit={handleEdit} />
        </div>
    );
};

export default TechnologiesEditView;
