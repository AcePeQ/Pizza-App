import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import LoaderFull from "./components/Loaders/LoaderFull/LoaderFull";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage/CartPage";

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
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px", zIndex: "1000" }}
        toastOptions={{
          style: {
            backgroundColor: "oklch(0.987 0.022 95.277)",
            color: "#292524",
            font: "inherit",
            fontWeight: "500",
          },
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
