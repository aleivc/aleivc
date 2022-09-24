import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";
import useDarkMode from "../../../hooks/useDarkMode";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // 这个dark theme 没有在context 里面，所以不能跟着变
  const [darkTheme, setDarkTheme] = useDarkMode();

  useEffect(() => {
    console.log(darkTheme);
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${darkTheme ? "dark" : "light"}-v10`,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [darkTheme]);

  return <div ref={mapContainer} className="flex-grow map-container"></div>;
};

export default Map;
