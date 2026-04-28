import { useSelector } from "react-redux";

const DeleteWonder = ({ onDelete, onCancel }) => {
    const wonder = useSelector((state) => state.wonders.selected);

    if (!wonder) {
        return <div className="m-3">No wonder selected.</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onDelete(wonder._id);
    };

    return (
        <form className="m-2 w-50" onSubmit={handleFormSubmit}>
            <div className="m-2">
                <h5>Delete Wonder</h5>
            </div>
            <hr />
            <div className="row ms-1">
                <div className="col-lg-6 pt-2">
                    <div className="label">ID</div>
                    <div className="value">{wonder._id}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">NAME</div>
                    <div className="value">{wonder.name}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">AGE</div>
                    <div className="value">{wonder.age || "--"}</div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="label">TYPE</div>
                    <div className="value">{wonder.type || "--"}</div>
                </div>
            </div>
            <hr />
            <input type="submit" value="Delete Wonder" className="btn btn-sm btn-outline-light" />
            <input type="button" value="Cancel" className="btn btn-sm btn-outline-light ms-2" onClick={onCancel} />
        </form>
    );
};

export default DeleteWonder;
