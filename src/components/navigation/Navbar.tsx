import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";

import { INavlinks } from "./INavlinks";
import IconText from "../text-image/IconText";

const navlinks: INavlinks[] = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    text: "Home",
    link: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faGamepad} />,
    text: "My Team",
    link: "my-team",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-items">
        {navlinks.map((navlink, index) => {
          return (
            <NavLink
              key={index}
              to={navlink.link}
              className={({ isActive }) =>
                isActive ? "navbar-items-active" : ""
              }
            >
              <IconText {...navlink} />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
