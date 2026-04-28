import "./List.css";

const List = ({list, label}) => {

    const renderList = () => {
        return list.map((item, index) => {
            return (
                <div key={index} className="item">{item}</div>
            )
        })
    }

    return (
        <div className="list">
            <div className="label">{label.toUpperCase()}</div>
            <div className="content">{renderList()}</div>
        </div>
    )
}

export default List;
