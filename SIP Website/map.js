

function init(){
  var view = new ol.View({
    center:ol.proj.fromLonLat([41.01224, 28.976018]),
    zoom: 6
  });
  var map = new ol.Map({
    target: 'map',
    layers:[
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view:view
  });
}
window.onload = init;
