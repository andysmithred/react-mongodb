import { useSelector } from "react-redux";
import "./DeleteCivic.css";

const DeleteCivic = ({onDelete, onCancel}) => {
    const civic = useSelector((state) => state.civics.selected);

    console.log("Civic => ", civic);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(civic._id);
    };

    return (
    <form className="w-50" onSubmit={handleFormSubmit}>
      <div className="m-3">
        <h5>Delete Civic</h5>
      </div>
      <hr></hr>
      <div className="delete-civic">
        <div className="delete-civic-item">
          <div className="label">ID</div>
          <div className="value">{civic._id}</div>
        </div>
        <div className="delete-civic-item">
          <div className="label">NAME</div>
          <div className="value">{civic.name}</div>
        </div>
        <div className="delete-civic-item">
          <div className="label">AGE</div>
          <div className="value">{civic.age}</div>
        </div>
        <div className="delete-civic-item">
          <div className="label">QUOTE</div>
          <div className="value">{civic.quote.text}</div>
        </div>
        <div className="delete-civic-item">
          <div className="label">COST</div>
          <div className="value">{civic.cost}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Civic"
        className="btn btn-sm btn-outline-light"
      ></input>
      <input
        type="button"
        value="Cancel"
        className="btn btn-sm btn-outline-light ms-2"
        onClick={onCancel}
      ></input>
    </form>
  );
}

export default DeleteCivic;
