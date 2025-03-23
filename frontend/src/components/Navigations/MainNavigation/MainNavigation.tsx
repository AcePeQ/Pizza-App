import { NavLink } from "react-router";
import { MainNavbarLinks } from "../../../utils/NavigationLinks";

function MainNavigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        {MainNavbarLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
