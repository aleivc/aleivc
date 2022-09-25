import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../../../hooks/useDarkMode";
import { Link } from "react-router-dom";

import routes from "../../../routes";

function SideBar() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div className="fixed top-0 left-0 w-16 h-screen py-3 flex flex-col justify-between bg-gray-200 dark:bg-gray-900 text-white shadow-lg">
      <div>
        {routes.map((item) => {
          return (
            <Link to={item.path} key={item.path}>
              <SideBarIcon icon={item.icon} tooltip={item.name} />
              {item.divider ? <Divider /> : null}
            </Link>
          );
        })}
      </div>
      <div
        onClick={handleMode}
        className="flex items-center justify-center h-12"
      >
        {darkTheme ? (
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
  );
}

const SideBarIcon = ({ icon, tooltip = "tooltip 💡 " }) => {
  return (
    <div
      className="relative
        flex items-center justify-center
        h-12 w-12 my-2 mx-auto
        bg-gray-400 hover:bg-green-600 dark:bg-gray-800
        text-green-500 hover:text-white
        rounded-3xl hover:rounded-xl
        transition-all duration-300 ease-linear
        cursor-pointer
        shadow-lg group"
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
