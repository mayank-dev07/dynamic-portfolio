import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className="navbar-link"
            data-nav-link
            style={{ fontSize: "14px" }}
          >
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/timeline"
            className="navbar-link"
            data-nav-link
            style={{ fontSize: "14px" }}
          >
            Timeline
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/projects"
            className="navbar-link"
            data-nav-link
            style={{ fontSize: "14px" }}
          >
            Projects
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/skills"
            className="navbar-link"
            data-nav-link
            style={{ fontSize: "14px" }}
          >
            Skills
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/contact"
            className="navbar-link"
            data-nav-link
            style={{ fontSize: "14px" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
