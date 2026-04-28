import { useSelector } from "react-redux";

const DeleteBuilding = ({ onDelete, onCancel }) => {
    const building = useSelector((state) => state.buildings.selected);

    if (!building) {
        return <div className="m-3">No building selected.</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(building._id);
    };

    return (
        <form className="m-2 w-50" onSubmit={handleFormSubmit}>
            <div className="m-2">
                <h5>Delete Building</h5>
            </div>
            <hr />
            <div className="row ms-1">
                <div className="col-lg-6 pt-2">
                    <div className="label">ID</div>
                    <div className="value">{building._id}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">NAME</div>
                    <div className="value">{building.name}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">AGE</div>
                    <div className="value">{building.age || "--"}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">TYPE</div>
                    <div className="value">{building.type || "--"}</div>
                </div>
            </div>
            <hr />
            <input type="submit" value="Delete Building" className="btn btn-sm btn-outline-light" />
            <input type="button" value="Cancel" className="btn btn-sm btn-outline-light ms-2" onClick={onCancel} />
        </form>
    );
};

export default DeleteBuilding;
