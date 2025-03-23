import { Outlet } from "react-router";
import MobileNavbar from "../../components/Navbars/MobileNavBar";

function Layout() {
  return (
    <div className="grid grid-cols-1 grid-layout layout-height">
      <header className="w-full fixed top-0 left-0 z-[10000000] ">
        <MobileNavbar />
      </header>
      <main className="pt-[52px]">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
