import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import App from "./App.tsx";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
