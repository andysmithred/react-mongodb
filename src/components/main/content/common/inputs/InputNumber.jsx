const InputNumber = ({ label, input, setInput, placeholder }) => {
  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">{label}</span>
      <input
        type="number"
        className="form-control"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
    </div>
  );
};

export default InputNumber;
