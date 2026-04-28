import "./DetailsHeader.css";

const DetailsHeader = ({ icon, label }) => (
  <div className="d-flex flex-row mt-2 details-header">
    {/* <div className="ms-1">
      <img src={icon} className="image" alt={label} />
    </div> */}
    <div className="label">{label.toUpperCase()}</div>
  </div>
);

export default DetailsHeader;
