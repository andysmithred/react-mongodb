import { useSelector } from "react-redux";


const DeleteLeader = ({onDelete, onCancel}) => {
    const leader = useSelector((state) => state.leaders.leader);

    console.log("Leader => ", leader);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(leader._id);
    };

    return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Leader</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 leader-details-item">
          <div className="label">ID</div>
          <div className="value">{leader._id}</div>
        </div>
        <div className="col-lg-6 pt-2 leader-details-item">
          <div className="label">NAME</div>
          <div className="value">{leader.name}</div>
        </div>
        <div className="col-lg-6 pt-2 leader-details-item">
          <div className="label">ABILITY</div>
          <div className="value">{leader.ability.name}</div>
        </div>
        <div className="col-lg-6 pt-2 leader-details-item">
          <div className="label">AGENDA</div>
          <div className="value">{leader.agenda.name}</div>
        </div>
        <div className="col-lg-6 pt-2 leader-details-item">
          <div className="label">ATTRIBUTES</div>
          <div className="value">{leader.attributes && leader.attributes.join(", ")}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Leader"
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

export default DeleteLeader;
