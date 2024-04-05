const TimelineItem = ({ title, date, description, jobtitle, location }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text" style={{ maxWidth: "80%" }}>
        {description}
      </p>
      <div style={{ display: "flex", color: "gray" }}>
        <p>Job-Title&nbsp;</p>
        <p style={{ color: "white" }}>{jobtitle}</p>
      </div>
      <div style={{ display: "flex", color: "gray" }}>
        <p>Location&nbsp;</p>
        <p style={{ color: "white" }}>{location}</p>
      </div>
    </li>
  );
};

export default TimelineItem;
