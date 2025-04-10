import { Outlet } from "react-router";
import MobileNavbar from "../../components/Navbars/MobileNavBar";
import Footer from "../../components/Footer/Footer";
import DesktopNavbar from "../../components/Navbars/DesktopNavbar";
import { useMediaQuery } from "react-responsive";

function Layout() {
  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div className="font-body  grid grid-cols-1 grid-layout layout-height bg-amber-50 text-stone-800">
      <header className="w-full fixed top-0 left-0 z-[90] h-[52px]">
        {!isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </header>
      <main className="mt-[52px]">
        <Outlet />
      </main>
      <footer className="flex flex-col gap-4 px-1 py-6 bg-stone-800 text-amber-50 border-t-2 border-amber-50">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
