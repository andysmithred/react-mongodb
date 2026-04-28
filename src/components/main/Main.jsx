import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories, categoriesList } from "../../reducers/categoriesSlice";
import IconBar from "./icon-bar/IconBar";
import Content from "./content/Content";
import "./Main.css";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategories(categoriesList));
    }, [dispatch]);

    return (
        <div className="d-flex flex-grow-1 main">
            <IconBar />
            <Content />
        </div>
    )
}

export default Main;
