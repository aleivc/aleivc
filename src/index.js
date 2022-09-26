import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import App from "./App";
import { BasicLayout } from "./layout/BasicLayout";
import Home from "./pages/Home";
import Map from "./pages/Map";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App>
      <Router>
        <BasicLayout>
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/map/:id" exact children={<div>map 1</div>} />
            <Route path="/three/:id" exact children={<div>three 1</div>} />
            <Route path="*" children={<div>not found</div>} />
          </Switch>
        </BasicLayout>
      </Router>
    </App>
  </React.StrictMode>
);
