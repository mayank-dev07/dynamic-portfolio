const SkillPost = ({ title, category, date, image, description }) => {
  return (
    <li className="blog-post-item">
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">percentage&nbsp;{description}</p>
        </div>
      </a>
    </li>
  );
};

export default SkillPost;
