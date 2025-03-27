import { NavLink } from "react-router";
import { MainNavbarLinks } from "../../../utils/NavigationLinks";

import { Pizza, House } from "lucide-react";

function MainNavigation() {
  return (
    <nav>
      <ul className="flex gap-3">
        {MainNavbarLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex gap-x-1.5 justify-center items-center transition-colors duration-300 text-white"
                  : "flex gap-x-1.5 justify-center items-center transition-colors duration-300 text-amber-100 hover:text-white active:text-white"
              }
              to={link.path}
            >
              {link.icon === "pizza" ? (
                <Pizza className="align-baseline" size={24} />
              ) : (
                <House size={24} />
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
