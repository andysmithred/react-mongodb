import DetailsHeader from "./DetailsHeader";
import "./DetailsList2.css";

const DetailsList2 = ({ list, label }) => {
    const items = [];

    list && list.forEach(item => {
      item && items.push(
        <div key={item} className="details-list2-item">{item}</div>
      );
    });

    return (
        <div>
            <DetailsHeader label={label} />
            <div className="details-list2-items">
                {items}
            </div>
        </div>
    )
}

export default DetailsList2;
