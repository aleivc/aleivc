import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import routes from "../../routes";
import { useTheme } from "../../hooks/useDarkMode";

function SideBar() {
  const { dark, setDark } = useTheme();
  const { pathname } = useLocation();
  const list = routes.find((item) => {
    return item.children && pathname.includes(item.path);
  });
  return (
    <div className="flex">
      <div className="w-16 h-screen py-3 flex flex-col justify-between bg-gray-400 dark:bg-gray-900 text-white shadow-lg">
        <div>
          {routes.map((item) => {
            return (
              <Link key={item.path} to={item.path}>
                <SideBarIcon
                  icon={item.icon}
                  tooltip={item.name}
                  isActive={pathname.includes(item.path)}
                />
                {item.divider ? <Divider /> : null}
              </Link>
            );
          })}
        </div>
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
      {pathname === "/home" ? null : (
        <ul className="w-64 h-screen pt-4 space-y-2 bg-gray-200 dark:bg-gray-800">
          {list &&
            list.children.map((item) => {
              return (
                <Link key={item.path} to={item.path} className="block">
                  <li
                    className={`mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer 
                       hover:bg-gray-300 dark:hover:bg-gray-700
                       ${
                         item.path === pathname
                           ? "bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700"
                           : ""
                       }
                       `}
                  >
                    <p className="text-gray-600 dark:text-gray-500">
                      {item.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-600">
                      {item.desc}
                    </p>
                  </li>
                </Link>
              );
            })}
        </ul>
      )}
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
