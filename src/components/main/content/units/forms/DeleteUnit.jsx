import { useSelector } from "react-redux";

const DeleteUnit = ({onDelete, onCancel}) => {
    const unit = useSelector((state) => state.units.selected);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(unit._id);
    };

    return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Unit</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 unit-details-item">
          <div className="label">ID</div>
          <div className="value">{unit._id}</div>
        </div>
        <div className="col-lg-6 pt-2 unit-details-item">
          <div className="label">NAME</div>
          <div className="value">{unit.name}</div>
        </div>
        <div className="col-lg-6 pt-2 unit-details-item">
          <div className="label">TYPE</div>
          <div className="value">{unit.type}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Unit"
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

export default DeleteUnit;
