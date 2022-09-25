import SideBar from "./SideBar";
import Map from "./Map/index";

function Projects() {
  return (
    <div className="flex">
      <SideBar />
      <ul className="w-64 h-screen ml-16 pt-6 space-y-2 bg-gray-200 dark:bg-gray-800">
        <li className="mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
          <p className="text-gray-600 dark:text-gray-500">点集合</p>
          <p className="text-gray-500 dark:text-gray-600">
            我去过的地方, 老家, 现居
          </p>
        </li>

        <li className="mx-2 p-2 rounded border border-dashed border-gray-500 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
          <p className="text-gray-600 dark:text-gray-500">路线</p>
          <p className="text-gray-500 dark:text-gray-600">包裹，快递追踪</p>
        </li>
      </ul>
      <div className="flex-grow">
        <Map />
      </div>
    </div>
  );
}

export default Projects;
