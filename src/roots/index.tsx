import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main-layout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";

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
    ],
  },
]);
