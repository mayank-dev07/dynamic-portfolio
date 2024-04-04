import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import useStore from "../../zustand";

const Portfolio = () => {
  const { data } = useStore();
  console.log(data.projects);
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section
      className="portfolio"
      data-page="portfolio"
      // style={{ width: "80%" }}
    >
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul
          className=""
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
            >
              <a
                href="#"
                style={{
                  // flexWrap: "wrap",
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
                  <img
                    src={project.image.url}
                    alt={project.title}
                    loading="lazy"
                    style={{ maxWidth: "500px" }}
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category" style={{ maxWidth: "500px" }}>
                  {project.description}
                </p>
              </a>
              <div style={{ color: "white", paddingTop: "12px" }}>
                <h4 style={{ textAlign: "center" }}>Tech-Stack</h4>
                <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
                  {project?.techStack?.map((project, index) => (
                    <li className="project-item active" key={index}>
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

export default Portfolio;
