const TimelineItem = ({ title, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text" style={{ maxWidth: "80%" }}>
        {description}
      </p>
    </li>
  );
};

export default TimelineItem;
