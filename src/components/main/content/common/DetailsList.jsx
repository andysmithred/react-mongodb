import DetailsHeader from "./DetailsHeader";
import "./DetailsList.css";

const DetailsList = ({ list, label }) => {
    const items = [];

    list && list.forEach(item => {
      items.push(
        <li key={item}>{item}</li>
      );
    });

    return (
        <div className="details-list">
            <DetailsHeader label={label} />
            <ul className="details-list-items">
                {items}
            </ul>
        </div>
    )
}

export default DetailsList;
