import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ProviderConf from "./tools/provider";
import { router } from "./roots";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <RouterProvider router={router} />
    </ProviderConf>
  </StrictMode>
);
