import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import { useEffect, useRef, useState } from "react";
import MainNavigation from "../Navigations/MainNavigation/MainNavigation";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useLocation } from "react-router";

function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function handleToggleMenu() {
    setMenuOpen((cur) => !cur);
  }

  useEffect(() => {
    function menuClickOutside(e: Event) {
      if (
        menuOpen &&
        (!menuRef.current || !menuRef.current.contains(e.target as Node))
      ) {
        handleCloseMenu();
      }
    }

    document.addEventListener("mousedown", menuClickOutside);

    return () => document.removeEventListener("mousedown", menuClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    handleCloseMenu();
  }, [location.pathname]);

  return (
    <div className="flex justify-between  z-[100002] relative bg-amber-200">
      <div className="flex justify-between p-1.5  relative z-[100001] w-full h-full bg-amber-500">
        <Logo />

        <button
          onClick={handleToggleMenu}
          type="button"
          className="cursor-pointer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X color="red" size={40} />
          ) : (
            <Menu color="red" size={40} />
          )}
        </button>
      </div>

      <div
        ref={menuRef}
        aria-hidden={!menuOpen}
        className={`flex z-[100000] p-1.5  duration-1000 bg-amber-900 ${
          menuOpen ? " translate-y-full" : "translate-y-0 pointer-events-none"
        }   transition-all justify-between items-center absolute top-0 left-0 w-full h-full `}
      >
        <MainNavigation />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default MobileNavbar;
