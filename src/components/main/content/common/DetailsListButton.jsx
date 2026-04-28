import "./DetailsListButton.css";

const DetailsListButton = ({ list, onRemove }) => {
    const items = [];

    list && list.forEach((item, index) => {
      items.push(
        <div className="row details-list-button-item" key={index}>
            <div className="col-sm-10"> 
                {item}
            </div>
            <div className="col-sm-2">
                <button className="btn btn-sm btn-outline-secondary float-end" type="button" onClick={() => onRemove(index)}>Remove</button>
            </div>
        </div>
      );
    });

    return (
        <div className="details-list-button">
            {items}
        </div>
    )
}

export default DetailsListButton;
