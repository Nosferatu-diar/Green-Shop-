import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/main-layout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";
import ProcedCheckout from "../pages/proced-checkout";
import Blog from "../pages/blog";
import Rendering from "../components/blog/rendering";
import { cookieInfo } from "../generic/cookies";
import ProfileComponent from "../components/profile";
import { path_profile, profile_tab_items } from "../utils";
import UserPage from "../pages/userPage";
import UserDetails from "../components/user-page-children/user-details";
const { isAuthorization } = cookieInfo();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductsShop />,
      },
      {
        path: "/proced-checkout",
        element: <ProcedCheckout />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:created_by/:id",
        element: <Rendering />,
      },
      {
        path: "profile",
        element: isAuthorization ? (
          <ProfileComponent />
        ) : (
          <Navigate to={"/"} replace />
        ),
        children: path_profile.map(({ path, Component }) => ({
          path: `${path}`,
          element: <Component />,
        })),
      },
      {
        path: "/user-page/:id",
        element: <UserPage />,
        children: [
          {
            path: "",
            element: <UserDetails />,
            children: profile_tab_items.map(({ key, Components }: any) => ({
              path: key,
              element: <Components />,
            })),
          },
        ],
      },
    ],
  },
]);
