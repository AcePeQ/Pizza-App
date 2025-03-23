import { NavLink, useLocation } from "react-router";
import { ProfileLinks } from "../../utils/NavigationLinks";
import { useEffect, useRef, useState } from "react";

function ProfileMenu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const location = useLocation();

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function handleToggleMenu() {
    setMenuOpen((cur) => !cur);
  }

  useEffect(() => {
    function checkClickOutside(e: Event) {
      if (
        menuOpen &&
        buttonRef.current !== e.target &&
        (!menuRef.current || !menuRef.current.contains(e.target as Node))
      ) {
        handleCloseMenu();
      }
    }

    document.addEventListener("mousedown", checkClickOutside);

    return () => document.removeEventListener("mousedown", checkClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    handleCloseMenu();
  }, [location.pathname]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={handleToggleMenu}
        aria-expanded={menuOpen}
        className="flex cursor-pointer rounded-full bg-red-700 w-9 h-9"
      >
        {/* <img src="" alt="user profile photography" /> */}
      </button>

      <nav
        aria-hidden={!menuOpen}
        ref={menuRef}
        className={`absolute -right-2 p-2 mt-2 bg-green-500 transition-transform duration-1000 ${
          menuOpen ? "translate-0" : "translate-x-full pointer-events-none"
        } `}
      >
        <ul className="flex flex-col gap-2">
          {ProfileLinks.map((link) => (
            <li className="flex items-center justify-center" key={link.name}>
              <NavLink className="px-3 py-1 " to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProfileMenu;
