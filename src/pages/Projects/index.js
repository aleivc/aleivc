import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";
import SideBar from "./SideBar";
import Map from "./Map/index";

function Projects() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col h-screen ml-16">
        <ThemeIcon />
        <Map />
      </div>
    </>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="flex items-center justify-end h-16 m-0 px-8 bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <div onClick={handleMode}>
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
};

export default Projects;
