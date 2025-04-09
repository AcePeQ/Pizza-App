import { NavLink } from "react-router";
import { MainNavbarLinks } from "../../../utils/NavigationLinks";

import { Pizza, House } from "lucide-react";

// 1024 - 32

function MainNavigation() {
  return (
    <nav className="lg:flex lg:items-center lg:text-[22px] lg:justify-center">
      <ul className="flex gap-3 lg:gap-8">
        {MainNavbarLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex gap-x-1.5 lg:gap-x-2 justify-center items-center transition-colors duration-300 text-white"
                  : "flex gap-x-1.5 lg:gap-x-2 justify-center items-center transition-colors duration-300 text-amber-100 hover:text-white active:text-white"
              }
              to={link.path}
            >
              {link.icon === "pizza" ? (
                <Pizza size={24} />
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
