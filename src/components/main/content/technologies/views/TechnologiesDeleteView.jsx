import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import DeleteTechnology from "../forms/DeleteTechnology";
import { deleteTechnology, setTechnologiesView } from "../../../../../reducers/technologies/technologiesSlice";

const TechnologiesDeleteView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Technologies"));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTechnology(id));
    };

    const handleCancel = () => {
        dispatch(setTechnologiesView("details"));
    };

    return (
        <div>
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setTechnologiesView}
            />
            <DeleteTechnology onDelete={handleDelete} onCancel={handleCancel} />
        </div>
    );
};

export default TechnologiesDeleteView;
