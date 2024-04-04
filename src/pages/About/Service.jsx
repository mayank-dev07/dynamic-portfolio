const Service = ({ title, icon, description, charge }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt={`${title} icon`} width="40" />
      </div>
      <div className="">
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{title}</h4>
          <p className="service-item-text">{description}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <h4>Charge</h4>
          <h5 style={{ paddingLeft: "12px" }}>{charge}</h5>
        </div>
      </div>
    </li>
  );
};

export default Service;
