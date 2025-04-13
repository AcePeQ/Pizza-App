import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import { useEffect, useRef, useState } from "react";
import MainNavigation from "../Navigations/MainNavigation/MainNavigation";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useLocation } from "react-router";
import CartButton from "../CartButton/CartButton";
import SignUpButton from "../../features/Auth/Register/SignUpButton";
import SignInButton from "../../features/Auth/Login/SignInButton";
import { useUserStore } from "../../store/useUserStore";

function MobileNavbar() {
  const { user } = useUserStore();
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
    <div className="flex justify-between z-[90] relative ">
      <div
        className={`flex justify-between p-1.5 transition-all duration-500 relative z-[100001] w-full h-full bg-stone-800 ${
          menuOpen ? "" : "shadow-lg shadow-stone-900/30"
        } `}
      >
        <Logo />

        <div className="flex justify-center items-center gap-x-3">
          {user && <CartButton />}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="cursor-pointer flex justify-center items-center transition-colors duration-300 text-amber-100 hover:text-white active:text-white"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        aria-hidden={menuOpen}
        className={`flex z-[100000] p-1.5  duration-700 ease-in-out bg-stone-700 ${
          menuOpen
            ? "translate-y-full shadow-lg shadow-stone-900/30"
            : "translate-y-0 pointer-events-none invisible"
        }   transition-all justify-between items-center absolute top-0 left-0 w-full h-full text-lg font-bold`}
      >
        <MainNavigation />
        {user ? (
          <ProfileMenu />
        ) : (
          <div className="flex gap-2.5">
            <SignUpButton onMenuClose={handleCloseMenu} />
            <SignInButton onMenuClose={handleCloseMenu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
