var wms_layers = [];

var format_HAcc_Noche_0 = new ol.format.GeoJSON();
var features_HAcc_Noche_0 = format_HAcc_Noche_0.readFeatures(json_HAcc_Noche_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAcc_Noche_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAcc_Noche_0.addFeatures(features_HAcc_Noche_0);
var lyr_HAcc_Noche_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAcc_Noche_0, 
                style: style_HAcc_Noche_0,
                interactive: true,
    title: 'H-Acc_Noche<br />\
    <img src="styles/legend/HAcc_Noche_0_0.png" /> 1:    0.0 - 2.0<br />\
    <img src="styles/legend/HAcc_Noche_0_1.png" /> 2:    2.0 - 6.0<br />\
    <img src="styles/legend/HAcc_Noche_0_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/HAcc_Noche_0_3.png" /> 4:    12.0 - 22.0<br />\
    <img src="styles/legend/HAcc_Noche_0_4.png" /> 5:    22.0 - 56.0<br />'
        });
var format_HAcc_Tarde_1 = new ol.format.GeoJSON();
var features_HAcc_Tarde_1 = format_HAcc_Tarde_1.readFeatures(json_HAcc_Tarde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAcc_Tarde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAcc_Tarde_1.addFeatures(features_HAcc_Tarde_1);
var lyr_HAcc_Tarde_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAcc_Tarde_1, 
                style: style_HAcc_Tarde_1,
                interactive: true,
    title: 'H-Acc_Tarde<br />\
    <img src="styles/legend/HAcc_Tarde_1_0.png" /> 1:    0.0 - 5.0<br />\
    <img src="styles/legend/HAcc_Tarde_1_1.png" /> 2:    5.0 - 13.0<br />\
    <img src="styles/legend/HAcc_Tarde_1_2.png" /> 3:    13.0 - 27.0<br />\
    <img src="styles/legend/HAcc_Tarde_1_3.png" /> 4:    27.0 - 55.0<br />\
    <img src="styles/legend/HAcc_Tarde_1_4.png" /> 5:    55.0 - 160.0<br />'
        });
var format_HAcc_Medio_Dia_2 = new ol.format.GeoJSON();
var features_HAcc_Medio_Dia_2 = format_HAcc_Medio_Dia_2.readFeatures(json_HAcc_Medio_Dia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAcc_Medio_Dia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAcc_Medio_Dia_2.addFeatures(features_HAcc_Medio_Dia_2);
var lyr_HAcc_Medio_Dia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAcc_Medio_Dia_2, 
                style: style_HAcc_Medio_Dia_2,
                interactive: true,
    title: 'H-Acc_Medio_Dia<br />\
    <img src="styles/legend/HAcc_Medio_Dia_2_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/HAcc_Medio_Dia_2_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/HAcc_Medio_Dia_2_2.png" /> 3:    6.0 - 10.0<br />\
    <img src="styles/legend/HAcc_Medio_Dia_2_3.png" /> 4:    10.0 - 18.0<br />\
    <img src="styles/legend/HAcc_Medio_Dia_2_4.png" /> 5:    18.0 - 52.0<br />'
        });
var format_HAcc_Manana_3 = new ol.format.GeoJSON();
var features_HAcc_Manana_3 = format_HAcc_Manana_3.readFeatures(json_HAcc_Manana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAcc_Manana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAcc_Manana_3.addFeatures(features_HAcc_Manana_3);
var lyr_HAcc_Manana_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAcc_Manana_3, 
                style: style_HAcc_Manana_3,
                interactive: true,
    title: 'H-Acc_Manana<br />\
    <img src="styles/legend/HAcc_Manana_3_0.png" /> 1:    0.0 - 6.0<br />\
    <img src="styles/legend/HAcc_Manana_3_1.png" /> 2:    6.0 - 15.0<br />\
    <img src="styles/legend/HAcc_Manana_3_2.png" /> 3:    15.0 - 30.0<br />\
    <img src="styles/legend/HAcc_Manana_3_3.png" /> 4:    30.0 - 60.0<br />\
    <img src="styles/legend/HAcc_Manana_3_4.png" /> 5:    60.0 - 165.0<br />'
        });
var format_HAcc_Madrugada_4 = new ol.format.GeoJSON();
var features_HAcc_Madrugada_4 = format_HAcc_Madrugada_4.readFeatures(json_HAcc_Madrugada_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAcc_Madrugada_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAcc_Madrugada_4.addFeatures(features_HAcc_Madrugada_4);
var lyr_HAcc_Madrugada_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAcc_Madrugada_4, 
                style: style_HAcc_Madrugada_4,
                interactive: true,
    title: 'H-Acc_Madrugada<br />\
    <img src="styles/legend/HAcc_Madrugada_4_0.png" /> 1:    0.0 - 2.0<br />\
    <img src="styles/legend/HAcc_Madrugada_4_1.png" /> 2:    2.0 - 4.0<br />\
    <img src="styles/legend/HAcc_Madrugada_4_2.png" /> 3:    4.0 - 8.0<br />\
    <img src="styles/legend/HAcc_Madrugada_4_3.png" /> 4:    8.0 - 14.0<br />\
    <img src="styles/legend/HAcc_Madrugada_4_4.png" /> 5:    14.0 - 32.0<br />'
        });
var format_2020_5 = new ol.format.GeoJSON();
var features_2020_5 = format_2020_5.readFeatures(json_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_5.addFeatures(features_2020_5);
var lyr_2020_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_5, 
                style: style_2020_5,
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_5_0.png" /> 1:    0.0 - 2.0<br />\
    <img src="styles/legend/2020_5_1.png" /> 2:    2.0 - 4.0<br />\
    <img src="styles/legend/2020_5_2.png" /> 3:    4.0 - 6.0<br />\
    <img src="styles/legend/2020_5_3.png" /> 4:    6.0 - 12.0<br />\
    <img src="styles/legend/2020_5_4.png" /> 5:    12.0 - 28.0<br />'
        });
var format_2019_6 = new ol.format.GeoJSON();
var features_2019_6 = format_2019_6.readFeatures(json_2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_6.addFeatures(features_2019_6);
var lyr_2019_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_6, 
                style: style_2019_6,
                interactive: true,
    title: '2019<br />\
    <img src="styles/legend/2019_6_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/2019_6_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/2019_6_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/2019_6_3.png" /> 4:    12.0 - 24.0<br />\
    <img src="styles/legend/2019_6_4.png" /> 5:    24.0 - 64.0<br />'
        });
var format_2018_7 = new ol.format.GeoJSON();
var features_2018_7 = format_2018_7.readFeatures(json_2018_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_7.addFeatures(features_2018_7);
var lyr_2018_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_7, 
                style: style_2018_7,
                interactive: true,
    title: '2018<br />\
    <img src="styles/legend/2018_7_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/2018_7_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/2018_7_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/2018_7_3.png" /> 4:    12.0 - 24.0<br />\
    <img src="styles/legend/2018_7_4.png" /> 5:    24.0 - 64.0<br />'
        });
var format_2017_8 = new ol.format.GeoJSON();
var features_2017_8 = format_2017_8.readFeatures(json_2017_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_8.addFeatures(features_2017_8);
var lyr_2017_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_8, 
                style: style_2017_8,
                interactive: true,
    title: '2017<br />\
    <img src="styles/legend/2017_8_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/2017_8_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/2017_8_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/2017_8_3.png" /> 4:    12.0 - 20.0<br />\
    <img src="styles/legend/2017_8_4.png" /> 5:    20.0 - 50.0<br />'
        });
var format_2016_9 = new ol.format.GeoJSON();
var features_2016_9 = format_2016_9.readFeatures(json_2016_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_9.addFeatures(features_2016_9);
var lyr_2016_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_9, 
                style: style_2016_9,
                interactive: true,
    title: '2016<br />\
    <img src="styles/legend/2016_9_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/2016_9_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/2016_9_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/2016_9_3.png" /> 4:    12.0 - 22.0<br />\
    <img src="styles/legend/2016_9_4.png" /> 5:    22.0 - 54.0<br />'
        });
var format_2015_10 = new ol.format.GeoJSON();
var features_2015_10 = format_2015_10.readFeatures(json_2015_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_10.addFeatures(features_2015_10);
var lyr_2015_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015_10, 
                style: style_2015_10,
                interactive: true,
    title: '2015<br />\
    <img src="styles/legend/2015_10_0.png" /> 1:    0.0 - 3.0<br />\
    <img src="styles/legend/2015_10_1.png" /> 2:    3.0 - 6.0<br />\
    <img src="styles/legend/2015_10_2.png" /> 3:    6.0 - 12.0<br />\
    <img src="styles/legend/2015_10_3.png" /> 4:    12.0 - 24.0<br />\
    <img src="styles/legend/2015_10_4.png" /> 5:    24.0 - 64.0<br />'
        });
var format_Muertos_11 = new ol.format.GeoJSON();
var features_Muertos_11 = format_Muertos_11.readFeatures(json_Muertos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muertos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muertos_11.addFeatures(features_Muertos_11);
var lyr_Muertos_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muertos_11, 
                style: style_Muertos_11,
                interactive: true,
    title: 'Muertos<br />\
    <img src="styles/legend/Muertos_11_0.png" /> 1:    0.0 - 6.0<br />\
    <img src="styles/legend/Muertos_11_1.png" /> 2:    6.0 - 12.0<br />\
    <img src="styles/legend/Muertos_11_2.png" /> 3:    12.0 - 24.0<br />\
    <img src="styles/legend/Muertos_11_3.png" /> 4:    24.0 - 45.0<br />\
    <img src="styles/legend/Muertos_11_4.png" /> 5:    45.0 - 70.0<br />'
        });
var format_Heridos_12 = new ol.format.GeoJSON();
var features_Heridos_12 = format_Heridos_12.readFeatures(json_Heridos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heridos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heridos_12.addFeatures(features_Heridos_12);
var lyr_Heridos_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Heridos_12, 
                style: style_Heridos_12,
                interactive: true,
    title: 'Heridos<br />\
    <img src="styles/legend/Heridos_12_0.png" /> 1:    0.0 - 6.0<br />\
    <img src="styles/legend/Heridos_12_1.png" /> 2:    6.0 - 12.0<br />\
    <img src="styles/legend/Heridos_12_2.png" /> 3:    12.0 - 24.0<br />\
    <img src="styles/legend/Heridos_12_3.png" /> 4:    24.0 - 44.0<br />\
    <img src="styles/legend/Heridos_12_4.png" /> 5:    44.0 - 122.0<br />'
        });
var format_SoloDaos_13 = new ol.format.GeoJSON();
var features_SoloDaos_13 = format_SoloDaos_13.readFeatures(json_SoloDaos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoloDaos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoloDaos_13.addFeatures(features_SoloDaos_13);
var lyr_SoloDaos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoloDaos_13, 
                style: style_SoloDaos_13,
                interactive: true,
    title: 'Solo Daños<br />\
    <img src="styles/legend/SoloDaos_13_0.png" /> 1:    0.0 - 10.0<br />\
    <img src="styles/legend/SoloDaos_13_1.png" /> 2:    10.0 - 25.0<br />\
    <img src="styles/legend/SoloDaos_13_2.png" /> 3:    25.0 - 50.0<br />\
    <img src="styles/legend/SoloDaos_13_3.png" /> 4:    50.0 - 90.0<br />\
    <img src="styles/legend/SoloDaos_13_4.png" /> 5:    90.0 - 265.0<br />'
        });
var format_Total_14 = new ol.format.GeoJSON();
var features_Total_14 = format_Total_14.readFeatures(json_Total_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_14.addFeatures(features_Total_14);
var lyr_Total_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Total_14, 
                style: style_Total_14,
                interactive: true,
    title: 'Total<br />\
    <img src="styles/legend/Total_14_0.png" /> 1:    0.0 - 16.0<br />\
    <img src="styles/legend/Total_14_1.png" /> 2:    16.0 - 42.0<br />\
    <img src="styles/legend/Total_14_2.png" /> 3:    42.0 - 80.0<br />\
    <img src="styles/legend/Total_14_3.png" /> 4:    80.0 - 156.0<br />\
    <img src="styles/legend/Total_14_4.png" /> 5:    156.0 - 450.0<br />'
        });

        var lyr_WazeWorld_15 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var group_AccidentalidadTotal20152020 = new ol.layer.Group({
                                layers: [lyr_Total_14,],
                                title: "Accidentalidad Total 2015 - 2020"});
var group_AccidentalidadSegunTipodeDao = new ol.layer.Group({
                                layers: [lyr_Muertos_11,lyr_Heridos_12,lyr_SoloDaos_13,],
                                title: "Accidentalidad Segun Tipo de Daño"});
var group_AccidentalidadAnual = new ol.layer.Group({
                                layers: [lyr_2020_5,lyr_2019_6,lyr_2018_7,lyr_2017_8,lyr_2016_9,lyr_2015_10,],
                                title: "Accidentalidad Anual"});
var group_AccidentalidadHoraria = new ol.layer.Group({
                                layers: [lyr_HAcc_Noche_0,lyr_HAcc_Tarde_1,lyr_HAcc_Medio_Dia_2,lyr_HAcc_Manana_3,lyr_HAcc_Madrugada_4,],
                                title: "Accidentalidad Horaria"});

lyr_HAcc_Noche_0.setVisible(true);lyr_HAcc_Tarde_1.setVisible(true);lyr_HAcc_Medio_Dia_2.setVisible(true);lyr_HAcc_Manana_3.setVisible(true);lyr_HAcc_Madrugada_4.setVisible(true);lyr_2020_5.setVisible(true);lyr_2019_6.setVisible(true);lyr_2018_7.setVisible(true);lyr_2017_8.setVisible(true);lyr_2016_9.setVisible(true);lyr_2015_10.setVisible(true);lyr_Muertos_11.setVisible(true);lyr_Heridos_12.setVisible(true);lyr_SoloDaos_13.setVisible(true);lyr_Total_14.setVisible(true);lyr_WazeWorld_15.setVisible(true);
var layersList = [lyr_WazeWorld_15,group_AccidentalidadHoraria,group_AccidentalidadAnual,group_AccidentalidadSegunTipodeDao,group_AccidentalidadTotal20152020];
lyr_HAcc_Noche_0.set('fieldAliases', {'DN': 'DN', });
lyr_HAcc_Tarde_1.set('fieldAliases', {'DN': 'DN', });
lyr_HAcc_Medio_Dia_2.set('fieldAliases', {'DN': 'DN', });
lyr_HAcc_Manana_3.set('fieldAliases', {'DN': 'DN', });
lyr_HAcc_Madrugada_4.set('fieldAliases', {'DN': 'DN', });
lyr_2020_5.set('fieldAliases', {'DN': 'DN', });
lyr_2019_6.set('fieldAliases', {'DN': 'DN', });
lyr_2018_7.set('fieldAliases', {'DN': 'DN', });
lyr_2017_8.set('fieldAliases', {'DN': 'DN', });
lyr_2016_9.set('fieldAliases', {'DN': 'DN', });
lyr_2015_10.set('fieldAliases', {'DN': 'DN', });
lyr_Muertos_11.set('fieldAliases', {'DN': 'DN', });
lyr_Heridos_12.set('fieldAliases', {'DN': 'DN', });
lyr_SoloDaos_13.set('fieldAliases', {'DN': 'DN', });
lyr_Total_14.set('fieldAliases', {'DN': 'DN', });
lyr_HAcc_Noche_0.set('fieldImages', {'DN': 'Range', });
lyr_HAcc_Tarde_1.set('fieldImages', {'DN': 'Range', });
lyr_HAcc_Medio_Dia_2.set('fieldImages', {'DN': 'Range', });
lyr_HAcc_Manana_3.set('fieldImages', {'DN': 'Range', });
lyr_HAcc_Madrugada_4.set('fieldImages', {'DN': 'Range', });
lyr_2020_5.set('fieldImages', {'DN': 'Range', });
lyr_2019_6.set('fieldImages', {'DN': 'Range', });
lyr_2018_7.set('fieldImages', {'DN': 'Range', });
lyr_2017_8.set('fieldImages', {'DN': 'Range', });
lyr_2016_9.set('fieldImages', {'DN': 'Range', });
lyr_2015_10.set('fieldImages', {'DN': 'Range', });
lyr_Muertos_11.set('fieldImages', {'DN': 'Range', });
lyr_Heridos_12.set('fieldImages', {'DN': 'Range', });
lyr_SoloDaos_13.set('fieldImages', {'DN': 'Range', });
lyr_Total_14.set('fieldImages', {'DN': 'Range', });
lyr_HAcc_Noche_0.set('fieldLabels', {});
lyr_HAcc_Tarde_1.set('fieldLabels', {});
lyr_HAcc_Medio_Dia_2.set('fieldLabels', {});
lyr_HAcc_Manana_3.set('fieldLabels', {});
lyr_HAcc_Madrugada_4.set('fieldLabels', {});
lyr_2020_5.set('fieldLabels', {});
lyr_2019_6.set('fieldLabels', {});
lyr_2018_7.set('fieldLabels', {});
lyr_2017_8.set('fieldLabels', {});
lyr_2016_9.set('fieldLabels', {});
lyr_2015_10.set('fieldLabels', {});
lyr_Muertos_11.set('fieldLabels', {});
lyr_Heridos_12.set('fieldLabels', {});
lyr_SoloDaos_13.set('fieldLabels', {});
lyr_Total_14.set('fieldLabels', {});
lyr_Total_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});