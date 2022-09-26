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

  return <div ref={mapContainer} className="map-container h-screen"></div>;
};

export default Map;
