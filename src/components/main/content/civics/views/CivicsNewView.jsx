import ItemsHeader from "../../common/ItemsHeader";
import { useDispatch, useSelector } from "react-redux";
import { addCivic, fetchCivics, setCivicView } from "../../../../../reducers/civics/civicsSlice";
import AddCivic from "../forms/AddCivic";

const CivicsNewView = () => {
    const category = useSelector((state) => state.categories.items.find((c) => c.name === "Civics"));
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log("Saved Item: ", item);
        dispatch(addCivic(item));
        dispatch(fetchCivics());
    };

    return (
        <div className="d-flex flex-column">
            <ItemsHeader
                menuItems={["Index", "Details"]}
                category={category}
                setView={setCivicView}
            />
            <AddCivic onAdd={handleAddItem} />
        </div>
    );
};

export default CivicsNewView;
