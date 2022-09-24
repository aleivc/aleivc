import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import Projects from "./pages/Projects/index";
import SideBar2 from "./pages/Projects/SideBar2/index";
import SideBar3 from "./pages/Projects/SideBar3/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "/side-bar/2",
    element: <SideBar2 />,
  },
  {
    path: "/side-bar/3",
    element: <SideBar3 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
