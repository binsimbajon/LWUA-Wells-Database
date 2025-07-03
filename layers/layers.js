var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_WellDirectory_2 = new ol.format.GeoJSON();
var features_WellDirectory_2 = format_WellDirectory_2.readFeatures(json_WellDirectory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WellDirectory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WellDirectory_2.addFeatures(features_WellDirectory_2);
cluster_WellDirectory_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_WellDirectory_2
});
var lyr_WellDirectory_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WellDirectory_2, 
                style: style_WellDirectory_2,
                popuplayertitle: 'Well Directory',
                interactive: true,
                title: '<img src="styles/legend/WellDirectory_2.png" /> Well Directory'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_WellDirectory_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_WellDirectory_2];
lyr_WellDirectory_2.set('fieldAliases', {'Well Name': 'Well Name', 'Well Depth': 'Well Depth', '1st Screen': '1st Screen', 'SWL (m)': 'SWL (m)', 'PWL (m)': 'PWL (m)', 'DD (m)': 'DD (m)', 'Discharge': 'Discharge', });
lyr_WellDirectory_2.set('fieldImages', {'Well Name': '', 'Well Depth': '', '1st Screen': '', 'SWL (m)': '', 'PWL (m)': '', 'DD (m)': '', 'Discharge': '', });
lyr_WellDirectory_2.set('fieldLabels', {'Well Name': 'inline label - always visible', 'Well Depth': 'inline label - always visible', '1st Screen': 'inline label - always visible', 'SWL (m)': 'inline label - always visible', 'PWL (m)': 'inline label - always visible', 'DD (m)': 'inline label - always visible', 'Discharge': 'inline label - always visible', });
lyr_WellDirectory_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});