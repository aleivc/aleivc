import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import routes from "./routes";
import BasicLayout from "./layout/BasicLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasicLayout>
        <Routes>
          {routes.map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.main} />
            );
          })}
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  </React.StrictMode>
);
