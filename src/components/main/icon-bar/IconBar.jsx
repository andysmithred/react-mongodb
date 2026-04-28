import { useDispatch, useSelector } from "react-redux";
import IconBarItem from "./IconBarItem";
import { setSelectedCategory } from "../../../reducers/categoriesSlice";
import './IconBar.css';

const IconBar = () => {
    const categories = useSelector((state) => state.categories.items);
    const dispatch = useDispatch();

    const onIconBarItemClick = (categoryName) => {
        console.log("IconBarItem clicked: ", categoryName);
        dispatch(setSelectedCategory(categoryName));
    }

    const iconBarItems = categories.map((category) => {
        return (
            <IconBarItem key={category.name} category={category} onIconBarItemClick={onIconBarItemClick}/>
        )
    })

    return (
        <div className="d-flex flex-column icon-bar">{iconBarItems}</div>
    )
};

export default IconBar;
