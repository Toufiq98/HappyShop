import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { RouterProvider } from "react-router";
import Router from "./Router/Router.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
