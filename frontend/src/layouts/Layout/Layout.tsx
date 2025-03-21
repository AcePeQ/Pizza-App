import { Outlet } from "react-router";

function Layout() {
  return (
    <div aria-hidden="true">
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
