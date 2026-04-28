import { useSelector } from "react-redux"
import ContentHeader from "../common/ContentHeader";
import "./HomeContent.css";

const HomeContent = () => {


    const category = useSelector((state) => state.categories.items.find(c => c.name === "Home"));

    if (!category) {
        return null;
    }

    return (
        <div className="d-flex flex-column content-main">
            <ContentHeader category={category} />
            <div className="container-fluid vh-75">
                <div className="row">
                    <div className="col-sm p-1">
                        One of three columns
                    </div>
                    <div className="col-sm p-1">
                        One of three columns
                    </div>
                    <div className="col-sm p-1">
                        One of three columns
                    </div>
                    <div className="col-sm p-1">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent