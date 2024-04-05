import { FaRegEye } from "react-icons/fa";
import useStore from "../../zustand";

const Projects = () => {
  const { data } = useStore();

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul
          style={{
            flexWrap: "wrap",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data?.projects?.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={index}
              style={{ width: "100%" }}
            >
              <a
                href="#"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={project.image.url}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        Width: "200px",
                        height: "300px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category" style={{ maxWidth: "500px" }}>
                  {project.description}
                </p>
              </a>
              <div
                style={{
                  color: "white",
                  paddingTop: "12px",
                  paddingBottom: "40px",
                }}
              >
                <h4 style={{ textAlign: "center", padding: "15px" }}>
                  Tech-Stack
                </h4>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  {project?.techStack?.map((project, index) => (
                    <li
                      className="project-item active"
                      key={index}
                      style={{
                        border: "2px solid gray",
                        padding: "8px",
                        borderRadius: "8px",
                      }}
                    >
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Projects;
