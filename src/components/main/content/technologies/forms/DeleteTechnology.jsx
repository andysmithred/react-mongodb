import { useSelector } from "react-redux";

const DeleteTechnology = ({ onDelete, onCancel }) => {
    const technology = useSelector((state) => state.technologies.selected);

    if (!technology) {
        return <div className="m-3">No technology selected.</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(technology._id);
    };

    return (
        <form className="m-2 w-50" onSubmit={handleFormSubmit}>
            <div className="m-2">
                <h5>Delete Technology</h5>
            </div>
            <hr />
            <div className="row ms-1">
                <div className="col-lg-6 pt-2">
                    <div className="label">ID</div>
                    <div className="value">{technology._id}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">NAME</div>
                    <div className="value">{technology.name}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">AGE</div>
                    <div className="value">{technology.age || "--"}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">COST</div>
                    <div className="value">{technology.cost ?? "--"}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">LEVEL</div>
                    <div className="value">{technology.level ?? "--"}</div>
                </div>
            </div>
            <hr />
            <input
                type="submit"
                value="Delete Technology"
                className="btn btn-sm btn-outline-light"
            />
            <input
                type="button"
                value="Cancel"
                className="btn btn-sm btn-outline-light ms-2"
                onClick={onCancel}
            />
        </form>
    );
};

export default DeleteTechnology;
