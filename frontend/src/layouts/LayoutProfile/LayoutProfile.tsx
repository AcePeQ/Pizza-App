import { Outlet } from "react-router";
import MobileNavbar from "../../components/Navbars/MobileNavBar";
import DesktopNavbar from "../../components/Navbars/DesktopNavbar";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

import { useLocation } from "react-router";
import { useCheckAuth } from "../../features/Auth/useCheckAuth";

function LayoutProfile() {
  const { checkAuthFn } = useCheckAuth();
  const location = useLocation();

  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useEffect(() => {
    checkAuthFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="font-body grid grid-cols-1 grid-layout layout-height bg-amber-50 text-stone-800">
      <header className="w-full fixed top-0 left-0 z-[90] h-[52px]">
        {!isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </header>
      <main className="mt-[52px] overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutProfile;
