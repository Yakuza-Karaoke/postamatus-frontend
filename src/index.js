import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

import MainPage from "./pages/mainPage";
import { adminPage } from "./pages/adminPage";
import { page404 } from "./pages/page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/admin",
    element: adminPage,
  },
  {
    path: "/*",
    element: page404,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
