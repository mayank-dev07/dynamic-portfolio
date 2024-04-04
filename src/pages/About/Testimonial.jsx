const Testimonial = ({ name, avatar, testimonial, position }) => {
  return (
    <li className="testimonials-item">
      <div className="content-card" data-testimonials-item>
        <figure className="testimonials-avatar-box">
          <img src={avatar} alt={name} width="60" data-testimonials-avatar />
        </figure>
        <p className="h4 testimonials-item-title" data-testimonials-title>
          {` ${name}`}{" "}
          <span style={{ fontSize: "16px" }}>{`(${position})`}</span>
        </p>
        <div className="testimonials-text" data-testimonials-text>
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
