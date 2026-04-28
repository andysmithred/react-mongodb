const InputStringButton = ({ label, input, setInput, placeholder, onAdd }) => {
  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">
            {label}
      </span>
        <input 
        type="text" 
        className="form-control" 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
    />
    <button 
        className="btn btn-outline-secondary" 
        type="button" 
        id="button-addon2"
        onClick={onAdd}
    >
        Add
    </button>
      {/* <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-outline-light" type="button" onClick={onAdd}>+</button> */}
    </div>
  );
};

export default InputStringButton;
