import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import LoaderFull from "./components/Loaders/LoaderFull/LoaderFull";

const Layout = lazy(() => import("./layouts/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderFull />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
