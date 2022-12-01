import { FaCube, FaHome, FaMapSigns, FaPoo } from "react-icons/fa";

import Home from "../pages/Home/index";
import Map from "../pages/Map/index";
import Shoe from "../pages/ThreeComp/Shoe";
import Others from "../pages/Others";
import Robot from "../pages/ThreeComp/Robot";
import Tank from "../pages/ThreeComp/Tank";
import CanvasDrawing from "../pages/Map/CanvasDrawing";

const routes = [
  {
    path: "/home",
    element: <Home />,
    name: "首页",
    icon: <FaHome size="20" />,
  },
  {
    path: "/map",
    redirect: "/map/1",
    name: "地图",
    icon: <FaMapSigns size="20" />,
    children: [
      {
        path: "/map/1",
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
      {
        path: "/map/3",
        element: <CanvasDrawing />,
        title: "地图，图片标注",
        desc: "绘制流动线条",
      },
    ],
  },
  {
    path: "/three",
    redirect: "/three/1",
    name: "3D内容",
    icon: <FaCube size="20" />,
    divider: true,
    children: [
      {
        path: "/three/1",
        element: <Shoe />,
        title: "鞋子",
        desc: "商品展示, 颜色，拖拽，旋转",
      },
      // {
      //   path: "/three/soldier",
      //   element: <Soldier />,
      //   title: "士兵",
      //   desc: "前进后退控制",
      // },
      {
        path: "/three/2",
        element: <Robot />,
        title: "采摘机器人",
        desc: "机械臂旋转控制",
      },
      {
        path: "/three/3",
        element: <Tank />,
        title: "坦克示例",
        desc: "摄像头旋转",
      },
    ],
  },
  {
    path: "/others",
    redirect: "/others/1",
    name: "其它",
    icon: <FaPoo size="20" />,
    children: [
      {
        path: "/others/1",
        element: <Others />,
        title: "待添加",
        desc: "待添加",
      },
    ],
  },
];

export default routes;
