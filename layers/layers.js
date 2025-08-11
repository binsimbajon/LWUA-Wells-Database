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
var format_LuzonWellDatabase_2 = new ol.format.GeoJSON();
var features_LuzonWellDatabase_2 = format_LuzonWellDatabase_2.readFeatures(json_LuzonWellDatabase_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuzonWellDatabase_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuzonWellDatabase_2.addFeatures(features_LuzonWellDatabase_2);
var lyr_LuzonWellDatabase_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuzonWellDatabase_2, 
                style: style_LuzonWellDatabase_2,
                popuplayertitle: 'Luzon Well Database',
                interactive: true,
                title: '<img src="styles/legend/LuzonWellDatabase_2.png" /> Luzon Well Database'
            });
var format_VisayasWellDatabase_3 = new ol.format.GeoJSON();
var features_VisayasWellDatabase_3 = format_VisayasWellDatabase_3.readFeatures(json_VisayasWellDatabase_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VisayasWellDatabase_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VisayasWellDatabase_3.addFeatures(features_VisayasWellDatabase_3);
var lyr_VisayasWellDatabase_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VisayasWellDatabase_3, 
                style: style_VisayasWellDatabase_3,
                popuplayertitle: 'Visayas Well Database',
                interactive: true,
                title: '<img src="styles/legend/VisayasWellDatabase_3.png" /> Visayas Well Database'
            });
var format_MindanaoWellDatabase_4 = new ol.format.GeoJSON();
var features_MindanaoWellDatabase_4 = format_MindanaoWellDatabase_4.readFeatures(json_MindanaoWellDatabase_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MindanaoWellDatabase_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MindanaoWellDatabase_4.addFeatures(features_MindanaoWellDatabase_4);
var lyr_MindanaoWellDatabase_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MindanaoWellDatabase_4, 
                style: style_MindanaoWellDatabase_4,
                popuplayertitle: 'Mindanao Well Database',
                interactive: true,
                title: '<img src="styles/legend/MindanaoWellDatabase_4.png" /> Mindanao Well Database'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_LuzonWellDatabase_2.setVisible(true);lyr_VisayasWellDatabase_3.setVisible(true);lyr_MindanaoWellDatabase_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_LuzonWellDatabase_2,lyr_VisayasWellDatabase_3,lyr_MindanaoWellDatabase_4];
lyr_LuzonWellDatabase_2.set('fieldAliases', {'Well Name': 'Well Name', 'Water District': 'Water District', 'x(y)': 'x(y)', 'y(x)': 'y(x)', 'SWL (m)': 'SWL (m)', 'PWL (m)': 'PWL (m)', 'Q (lps)': 'Q (lps)', 'Screen Depth (m)': 'Screen Depth (m)', 'Date': 'Date', });
lyr_VisayasWellDatabase_3.set('fieldAliases', {'Well Name': 'Well Name', 'Water District': 'Water District', 'x(y)': 'x(y)', 'y(x)': 'y(x)', 'SWL (m)': 'SWL (m)', 'PWL (m)': 'PWL (m)', 'Q (lps)': 'Q (lps)', 'Screen Depth (m)': 'Screen Depth (m)', 'Date': 'Date', });
lyr_MindanaoWellDatabase_4.set('fieldAliases', {'Well Name': 'Well Name', 'Water District': 'Water District', 'x(y)': 'x(y)', 'y(x)': 'y(x)', 'SWL (m)': 'SWL (m)', 'PWL (m)': 'PWL (m)', 'Q (lps)': 'Q (lps)', 'Screen Depth (m)': 'Screen Depth (m)', 'Date': 'Date', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_LuzonWellDatabase_2.set('fieldImages', {'Well Name': '', 'Water District': '', 'x(y)': '', 'y(x)': '', 'SWL (m)': '', 'PWL (m)': '', 'Q (lps)': '', 'Screen Depth (m)': '', 'Date': '', });
lyr_VisayasWellDatabase_3.set('fieldImages', {'Well Name': '', 'Water District': '', 'x(y)': '', 'y(x)': '', 'SWL (m)': '', 'PWL (m)': '', 'Q (lps)': '', 'Screen Depth (m)': '', 'Date': '', });
lyr_MindanaoWellDatabase_4.set('fieldImages', {'Well Name': '', 'Water District': '', 'x(y)': '', 'y(x)': '', 'SWL (m)': '', 'PWL (m)': '', 'Q (lps)': '', 'Screen Depth (m)': '', 'Date': '', 'field_10': '', 'field_11': '', 'field_12': '', });
lyr_LuzonWellDatabase_2.set('fieldLabels', {'Well Name': 'inline label - always visible', 'Water District': 'inline label - always visible', 'x(y)': 'no label', 'y(x)': 'no label', 'SWL (m)': 'inline label - always visible', 'PWL (m)': 'inline label - always visible', 'Q (lps)': 'inline label - always visible', 'Screen Depth (m)': 'inline label - always visible', 'Date': 'inline label - always visible', });
lyr_VisayasWellDatabase_3.set('fieldLabels', {'Well Name': 'inline label - always visible', 'Water District': 'inline label - always visible', 'x(y)': 'no label', 'y(x)': 'no label', 'SWL (m)': 'inline label - always visible', 'PWL (m)': 'inline label - always visible', 'Q (lps)': 'inline label - always visible', 'Screen Depth (m)': 'inline label - always visible', 'Date': 'inline label - always visible', });
lyr_MindanaoWellDatabase_4.set('fieldLabels', {'Well Name': 'inline label - always visible', 'Water District': 'inline label - always visible', 'x(y)': 'no label', 'y(x)': 'no label', 'SWL (m)': 'inline label - always visible', 'PWL (m)': 'inline label - always visible', 'Q (lps)': 'inline label - always visible', 'Screen Depth (m)': 'inline label - always visible', 'Date': 'inline label - always visible', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_MindanaoWellDatabase_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});