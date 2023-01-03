import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();
  let newLinks = [...links];

  if (!["expert", "club", "investigator"].includes(user?.type)) {
    newLinks = newLinks.filter((link) => link.path !== "objection");
  }

  if (!["observer", "expert"].includes(user?.type)) {
    newLinks = newLinks.filter((link) => link.path !== "reports");
  }

  return (
    <div className="nav-links">
      {newLinks.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
