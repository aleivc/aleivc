import DemoPi from "./DemoPi";
import DemoWordCloud from "./DemoWordCloud";
import DemoHeatmap from "./DemoHeatMap";
import DemoArea from "./DemoArea";

function Home() {
  return (
    <div className="h-screen p-6 bg-gray-400 dark:bg-gray-800">
      <div className="flex-1 items-center justify-center">
        <ul className="grid grid-cols-4 grid-rows-4 gap-8 text-center">
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 ">
              <DemoPi />
            </div>
          </li>
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">
              <DemoWordCloud />
            </div>
          </li>
          <li className="col-span-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">
              <DemoHeatmap />
            </div>
          </li>
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">
              <DemoArea />
            </div>
          </li>
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">some</div>
          </li>
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">some</div>
          </li>
          <li className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">some</div>
          </li>
          <li className="row-span-6 col-span-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg">
            <div className="h-36 p-1">some</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
