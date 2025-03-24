import { NavLink, useLocation } from "react-router";
import { ProfileLinks } from "../../utils/NavigationLinks";
import { useEffect, useRef, useState } from "react";
import { Settings, User } from "lucide-react";

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
        className={`absolute -right-2 p-2 mt-1 bg-stone-700 transition-[transform, box-shadow]  duration-1000 rounded-bl-md  ${
          menuOpen
            ? "translate-0 shadow-md shadow-stone-900/30"
            : "translate-x-full pointer-events-none "
        } `}
      >
        <ul className="flex flex-col gap-2.5">
          {ProfileLinks.map((link) => (
            <li className="flex items-center justify-center " key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "w-full flex items-center  gap-x-1.5 px-3 py-1 transition-colors duration-300 text-white  bg-stone-600 rounded-md"
                    : "w-full flex items-center  gap-x-1.5 px-3 py-1 transition-colors duration-300 text-amber-100 hover:text-white active:text-white hover:bg-stone-600 rounded-md"
                }
                to={link.path}
              >
                {link.icon === "profile" ? <User /> : <Settings />}
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
