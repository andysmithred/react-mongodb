import { useSelector } from "react-redux";


const DeleteCivilization = ({onDelete, onCancel}) => {
    const civilization = useSelector((state) => state.civilizations.civilization);

    console.log("Civilization => ", civilization);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(civilization._id);
    };

    return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Civilization</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">ID</div>
          <div className="value">{civilization._id}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">NAME</div>
          <div className="value">{civilization.name}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">EMPIRE</div>
          <div className="value">{civilization.empire}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">DEMONYM</div>
          <div className="value">{civilization.demonym}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">AGE</div>
          <div className="value">{civilization.age}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">WONDER</div>
          <div className="value">{civilization.wonder}</div>
        </div>
        <div className="col-lg-6 pt-2 civilization-details-item">
          <div className="label">ATTRIBUTES</div>
          <div className="value">{civilization.attributes && civilization.attributes.join(", ")}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Civilization"
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

export default DeleteCivilization;
