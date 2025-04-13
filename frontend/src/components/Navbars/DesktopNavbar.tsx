import { useState } from "react";
import SignInButton from "../../features/Auth/Login/SignInButton";
import SignUpButton from "../../features/Auth/Register/SignUpButton";
import Logo from "../Logo/Logo";
import MainNavigation from "../Navigations/MainNavigation/MainNavigation";
import CartButton from "../CartButton/CartButton";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useUserStore } from "../../store/useUserStore";

function DesktopNavbar() {
  const { user } = useUserStore();
  const [, setMenuOpen] = useState<boolean>(false);

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="flex w-fill h-full justify-between z-[90] relative ">
      <div className="grid grid-cols-3 p-1.5 transition-all duration-500 relative z-[100001] w-full h-full shadow-lg shadow-stone-900/30 bg-stone-800">
        <Logo />
        <MainNavigation />

        {user ? (
          <div className="flex gap-2.5 items-center justify-end">
            <CartButton />
            <ProfileMenu />
          </div>
        ) : (
          <div className="flex gap-2.5 lg:justify-end">
            <SignUpButton onMenuClose={handleCloseMenu} />
            <SignInButton onMenuClose={handleCloseMenu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DesktopNavbar;
