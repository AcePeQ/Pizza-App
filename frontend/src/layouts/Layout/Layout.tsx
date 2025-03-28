import { Outlet } from "react-router";
import MobileNavbar from "../../components/Navbars/MobileNavBar";

function Layout() {
  return (
    <div className="font-body  grid grid-cols-1 grid-layout layout-height bg-amber-50 text-stone-800">
      <header className="w-full fixed top-0 left-0 z-[10000000] ">
        <MobileNavbar />
      </header>
      <main className="mt-[52px]">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
