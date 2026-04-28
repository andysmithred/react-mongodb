import DetailsHeader from "./DetailsHeader";
import "./Introduction.css";

const Introduction = ({ intro }) => {
    return (
        <div className="introduction">
            <DetailsHeader label="Introduction" />
            <div className="content">
                {intro}
            </div>
        </div>
    )
}

export default Introduction;
