import { useDispatch, useSelector } from "react-redux";

import ItemsHeader from "../../common/ItemsHeader";
import AddTechnology from "../forms/AddTechnology";
import { addTechnology, fetchTechnologies, setTechnologiesView } from "../../../../../reducers/technologies/technologiesSlice";

const TechnologiesNewView = () => {
    const category = useSelector((state) => state.categories.items.find((item) => item.name === "Technologies"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addTechnology(item));
        dispatch(fetchTechnologies());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setTechnologiesView}
            />
            <AddTechnology onAdd={handleAddItem} />
        </div>
    );
};

export default TechnologiesNewView;
