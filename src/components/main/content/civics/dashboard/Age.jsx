import "./Age.css";

const Age = ({age}) => {
    return (
        <div className="age">
            <div className="label">
                Age
            </div>
            <div className="content">
                {age}
            </div>
        </div>
    )
}

export default Age;
