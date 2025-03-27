import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main-layout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";
import ProcedCheckout from "../pages/proced-checkout";
import Blog from "../pages/blog";
import Rendering from "../components/blog/rendering";

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
    ],
  },
]);
