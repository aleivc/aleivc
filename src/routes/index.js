import Home from "../pages/Home/index";
import Map from "../pages/Map/index";
import ThreeComp from "../pages/ThreeComp/index";
import Others from "../pages/Others/index";

import { FaCube, FaHome, FaMapSigns, FaPoo } from "react-icons/fa";

const routes = [
  {
    path: "/",
    name: "首页",
    icon: <FaHome size="20" />,
    exact: true,
    main: <Home />,
  },
  {
    path: "/map",
    name: "地图",
    icon: <FaMapSigns size="20" />,
    main: <Map />,
  },
  {
    path: "/three",
    name: "3D内容",
    icon: <FaCube size="20" />,
    main: <ThreeComp />,
    divider: true,
  },
  {
    path: "/others",
    name: "其它",
    icon: <FaPoo size="20" />,
    main: <Others />,
  },
];

export default routes;
