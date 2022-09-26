import {
  FaHockeyPuck,
  FaHome,
  FaMapSigns,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { matchPath } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import routes from "../../routes";
import { useTheme } from "../../hooks/useDarkMode";

function SideBar() {
  const { dark, setDark } = useTheme();
  const { pathname } = useLocation();

  const match = matchPath(pathname, { path: "/map/:id" });
  console.log(match);

  return (
    <div>
      {/* sidebar */}
      <div className="flex">
        {/* menu 1 */}
        <div className="w-16 h-screen py-3 flex flex-col justify-between bg-gray-400 dark:bg-gray-900 text-white shadow-lg">
          <div>
            <Link to="/">
              <SideBarIcon
                isActive={pathname == "/"}
                icon={<FaHome size="20" />}
              />
            </Link>
            <Link to="/map">
              <SideBarIcon
                isActive={pathname == "/map"}
                icon={<FaMapSigns size="20" />}
              />
            </Link>
            <Link to="/three/1">
              <SideBarIcon
                isActive={pathname == "/three/1"}
                icon={<FaMapSigns size="20" />}
              />
            </Link>
          </div>
          {/* dark mode */}
          <div
            onClick={() => setDark(!dark)}
            className="flex items-center justify-center h-12"
          >
            {dark ? (
              <FaSun
                size="24"
                className="text-gray-500
        transition duration-300 ease-in-out
        hover:text-yellow-400
        cursor-pointer"
              />
            ) : (
              <FaMoon
                size="24"
                className="text-gray-500
        transition duration-300 ease-in-out
        hover:text-yellow-400
        cursor-pointer"
              />
            )}
          </div>
        </div>
        <ul className="w-64 h-screen pt-6 space-y-2 bg-gray-200 dark:bg-gray-800">
          {/*{routes*/}
          {/*  .find((item) => item.path == pathname)*/}
          {/*  .children.map((route) => (*/}
          {/*    <Link key={route.title} to={route.path}>*/}
          {/*      <li className="mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">*/}
          {/*        <p className="text-gray-600 dark:text-gray-500">*/}
          {/*          {route.title}*/}
          {/*        </p>*/}
          {/*        <p className="text-gray-500 dark:text-gray-600">*/}
          {/*          {route.desc}*/}
          {/*        </p>*/}
          {/*      </li>*/}
          {/*    </Link>*/}
          {/*  ))}*/}
        </ul>
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon, tooltip = "tooltip 💡 ", isActive }) => {
  return (
    <div
      className={`relative
        flex items-center justify-center
        h-12 w-12 my-2 mx-auto
        bg-gray-400 hover:bg-green-600 dark:bg-gray-800
        ${isActive ? "rounded-xl" : "rounded-3xl"}
        hover:rounded-xl
        ${isActive ? "text-white" : "text-green-400"}
        hover:text-white
        transition-all duration-300 ease-linear
        cursor-pointer
        shadow-xl group 
        `}
    >
      {icon}
      <span
        className="absolute
        w-auto p-2 m-2 min-w-max left-14
        rounded-md shadow-md
        text-white bg-gray-900
        text-xs font-bold
        transition-all duration-100 scale-0 origin-left group-hover:scale-100"
      >
        {tooltip} 💡
      </span>
    </div>
  );
};

const Divider = () => (
  <hr
    className="bg-gray-100 dark:bg-gray-800
        border border-gray-400 dark:border-gray-800 rounded-full
        mx-2"
  />
);

export default SideBar;
