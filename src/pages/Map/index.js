import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useDarkMode";

mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_KEY ||
  "pk.eyJ1IjoiYWxlaXZjIiwiYSI6ImNreTJjNGc2azBrZ2MydnJtbDY1bWVkZGsifQ.q71gMIIPSTNoz6VbWLUanw";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { dark } = useTheme();

  useEffect(() => {
    const style = `mapbox://styles/mapbox/${dark ? "dark" : "light"}-v10`;
    if (map.current) {
      map.current.setStyle(style);
      return; // initialize map only once
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style,
      center: [-70.9, 42.35],
      zoom: 9,
    });
  }, [dark]);

  return (
    <div className="flex">
      <ul className="w-64 h-screen pt-6 space-y-2 bg-gray-200 dark:bg-gray-800">
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
        <div ref={mapContainer} className="map-container h-screen"></div>
      </div>
    </div>
  );
};

export default Map;
