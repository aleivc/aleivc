import { FaCube, FaHome, FaMapSigns, FaPoo } from "react-icons/fa";
import { BasicLayout, MenuLayout } from "../layout/BasicLayout";

import Home from "../pages/Home/index";
import Map from "../pages/Map/index";
import Shoe from "../pages/ThreeComp/Shoe";
import Soldier from "../pages/ThreeComp/Soldier";
import Others from "../pages/Others";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "首页",
    icon: <FaHome size="20" />,
  },
  {
    path: "/map",
    children: [
      {
        path: "/map/1",
        name: "地图",
        icon: <FaMapSigns size="20" />,
        element: <Map />,
        title: "点集合",
        desc: "点集合，点击下探",
      },
      {
        path: "/map/2",
        element: <div>map/2</div>,
        title: "路线",
        desc: "包裹，快递追踪",
      },
    ],
  },
  {
    path: "/three",
    children: [
      {
        path: "/three/1",
        name: "3D内容",
        icon: <FaCube size="20" />,
        divider: true,
        element: <Shoe />,
        title: "鞋子",
        desc: "商品展示, 颜色，拖拽，旋转",
      },
      {
        path: "/three/soldier",
        element: <Soldier />,
        title: "士兵",
        desc: "前进后退控制",
      },
    ],
  },
  {
    path: "/others",
    children: [
      {
        path: "/others/1",
        name: "其它",
        icon: <FaPoo size="20" />,
        element: <Others />,
        title: "待添加",
        desc: "待添加",
      },
    ],
  },
];

export default routes;
