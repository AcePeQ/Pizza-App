import { NavLink } from "react-router";
import { MainNavbarLinks } from "../../../utils/NavigationLinks";

import { Pizza, House } from "lucide-react";

function MainNavigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        {MainNavbarLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className="flex gap-x-1 justify-center items-center"
              to={link.path}
            >
              {link.icon === "pizza" ? (
                <Pizza size={24} color="red" />
              ) : (
                <House size={24} color="red" />
              )}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
