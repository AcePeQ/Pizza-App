import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import LoaderFull from "./components/Loaders/LoaderFull/LoaderFull";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Layout = lazy(() => import("./layouts/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
