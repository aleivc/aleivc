import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import App from "./App";
import { BasicLayout } from "./layout/BasicLayout";

import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <BasicLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {routes.map((r) => {
              if (r.children) {
                const temp = [];
                for (const c of r.children) {
                  temp.push(
                    <Route key={c.path} path={c.path} element={c.element} />
                  );
                }
                temp.push(
                  <Route
                    key={r.path}
                    path={r.path}
                    element={<Navigate replace to={r.redirect} />}
                  />
                );
                return temp;
              } else {
                return <Route key={r.path} path={r.path} element={r.element} />;
              }
            })}
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </BasicLayout>
      </BrowserRouter>
    </App>
  </React.StrictMode>
);
