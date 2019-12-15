require([
    "esri/Map",
    "esri/views/SceneView"
  ], function(Map, SceneView) {

  var map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation"  // show elevation
  });

  var view = new SceneView({
    container: "viewDiv_map",
    map: map,
    camera: {
      position: {  // observation point
        x: 280,
        y: 0,
        z: 3000000 // altitude in meters
      },
      tilt: 34  // perspective in degrees
    }
  });
});