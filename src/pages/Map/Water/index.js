import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import {useEffect, useRef, useState} from "react";

mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_KEY ||
  "pk.eyJ1IjoiYWxlaXZjIiwiYSI6ImNreTJjNGc2azBrZ2MydnJtbDY1bWVkZGsifQ.q71gMIIPSTNoz6VbWLUanw";

const initFeatures = [
  {
    id: 1,
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [121.93589571400003, 30.98026708200007],
          [121.93635103300005, 30.980280440000059],
          [121.93637893300002, 30.980258826000069],
          [121.93642526000008, 30.98020835400007],
          [121.93791655000007, 30.975788359000036],
          [121.93731591900007, 30.975687979000044],
          [121.93727981300003, 30.975717830000066],
          [121.93724124300002, 30.97576878600006],
          [121.93572930700009, 30.98017701300006],
          [121.93573011300009, 30.980215117000058],
          [121.9357520320001, 30.980258725000057],
          [121.93579498400004, 30.980264473000035],
          [121.93589571400003, 30.98026708200007],
        ],
      ],
    },
    properties: {
      name: "test",
      height: 10
    },
  },
  // {
  //   id: 2,
  //   type: "Feature",
  //   geometry: {
  //     type: "Polygon",
  //     coordinates: [
  //       [
  //         [121.9366550740001, 30.98029323700007],
  //         [121.93714179800009, 30.980312626000058],
  //         [121.93717896800001, 30.980270447000068],
  //         [121.93721305700001, 30.980221929000039],
  //         [121.93879304500001, 30.975554411000077],
  //         [121.93878919400004, 30.97548484200007],
  //         [121.93874053900004, 30.975477325000044],
  //         [121.93815117600002, 30.975455830000045],
  //         [121.9381217670001, 30.975483265000038],
  //         [121.9380661560001, 30.975561157000074],
  //         [121.93649891700011, 30.980163404000053],
  //         [121.93653233400005, 30.980176078000058],
  //         [121.93649897400008, 30.98023880100004],
  //         [121.93650042400009, 30.980283155000053],
  //         [121.9366550740001, 30.98029323700007],
  //       ],
  //     ],
  //   },
  //   properties: {
  //     name: "test123",
  //     height: 20
  //   },
  // },
]
const Water = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [features, setFeatures] = useState([...initFeatures]);

  let hoveredStateId = null;
  let clickedStateId = null;
  useEffect(() => {
    const style = `mapbox://styles/mapbox/dark-v10`;
    if (map.current) {
      map.current.setStyle(style);
      return; // initialize map only once
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style,
      center: [121.93551036500003, 30.980475287000048],
      zoom: 15,
      pitch: 60,
      bearing: 10,
    });

    map.current.on("load", function () {
      map.current.addSource("area", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features,
        },
      });

      map.current.addLayer({
        id: "area",
        type: "fill",
        source: "area",
        layout: {},
        paint: {
          "fill-color": [
            "case",
            ["boolean", ["feature-state", "clicked"], false],
            "#64bdbb",
            "#888888",
          ],
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0.5,
          ],
        },
      });

      map.current.addLayer({
        id: "areaText",
        type: "symbol",
        source: "area",
        layout: {
          "text-field": ["to-string", ["get", "name"]],
          "text-rotation-alignment": "map",
          "text-offset": [0, 0],
          "text-size": 18,
          "text-rotate": -100,
        },
        paint: { "text-translate": [0, 0], "text-color": "#fff" },
      });

      map.current.addLayer({
        id: "areaLevel",
        type: "fill-extrusion",
        source: "area",
        paint: {
          "fill-extrusion-height": ['get', 'height'],
          "fill-extrusion-color": "#64bdbb",
          "fill-extrusion-height-transition": {
            duration: 0,
            delay: 0,
          },
          "fill-extrusion-opacity": 0.6,
        },
      });

      map.current.on("mousemove", "area", (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.current.setFeatureState(
              { source: "area", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.current.setFeatureState(
            { source: "area", id: hoveredStateId },
            { hover: true }
          );
        }
      });

      map.current.on("mouseleave", "area", () => {
        if (hoveredStateId !== null) {
          map.current.setFeatureState(
            { source: "area", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
      });

      map.current.on("click", "area", (e) => {
        // map.current.setPaintProperty('area', 'fill-color', '#fff')
        if (e.features.length > 0) {
          if (clickedStateId !== null) {
            map.current.setFeatureState(
              { source: "area", id: clickedStateId },
              { clicked: false, id: clickedStateId }
            );
          }
          clickedStateId = e.features[0].id;
          map.current.setFeatureState(
            { source: "area", id: clickedStateId },
            { clicked: true, id: clickedStateId }
          );
          console.log(e.features[0])
        }

        const geoJson = map.current.getSource('area');

        geoJson.setData({
          type: 'FeatureCollection',
          features: [
            {
              id: 1,
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [121.93589571400003, 30.98026708200007],
                    [121.93635103300005, 30.980280440000059],
                    [121.93637893300002, 30.980258826000069],
                    [121.93642526000008, 30.98020835400007],
                    [121.93791655000007, 30.975788359000036],
                    [121.93731591900007, 30.975687979000044],
                    [121.93727981300003, 30.975717830000066],
                    [121.93724124300002, 30.97576878600006],
                    [121.93572930700009, 30.98017701300006],
                    [121.93573011300009, 30.980215117000058],
                    [121.9357520320001, 30.980258725000057],
                    [121.93579498400004, 30.980264473000035],
                    [121.93589571400003, 30.98026708200007],
                  ],
                ],
              },
              properties: {
                name: "test",
                height: Math.floor(Math.random() * 100)
              },
            },
          ]
        })
      });
    });

    // return () => map.current.remove()
  }, []);

  return <div ref={mapContainer} className="map-container h-screen"></div>;
};

export default Water;
