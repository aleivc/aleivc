import SideBar from "./SideBar";
import useDarkMode from "../../hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";

function Projects() {
  return (
    <>
      <SideBar />
      <ThemeIcon />
    </>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div
      className="flex items-center h-16 m-0 ml-16 pl-8 bg-gray-200 dark:bg-gray-800 overflow-hidden"
      onClick={handleMode}
    >
      {darkTheme ? (
        <FaSun size="24" className="toggleIcon" />
      ) : (
        <FaMoon size="24" className="toggleIcon" />
      )}
    </div>
  );
};

export default Projects;
