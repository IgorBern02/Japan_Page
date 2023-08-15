// Função Hover Dropdown
function chanceImg() {
    document.getElementById('arrow-down').src = "../global-images/arrow-up.png";
}

function backImg() {
    document.getElementById('arrow-down').src = "../global-images/arrow-down.png";
}

// Map
// LatLng(36.555982, -99.052734
var map = L.map('map').setView([38.882481, 20.80957], 2);

var Japan = L.marker([36.146747, 138.515625], 13).bindPopup('Japan').addTo(map),
    UnitedStates = L.marker([36.555982, -99.052734], 13).bindPopup('United States').addTo(map),
    Germany = L.marker([51.201721, 10.546875], 13).bindPopup('Germany').addTo(map),
    England = L.marker([55.289283, -3.911133], 13).bindPopup('England').addTo(map);
    Ireland = L.marker([53.375546, -7.734375], 13).bindPopup('Ireland').addTo(map);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var coutries = L.layerGroup([Japan, UnitedStates, Germany, England, Ireland]);

var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Coutries": coutries
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//Spots Japan
var osakaCastle = L.marker([34.68731003196862, 135.5258116692123]).bindPopup('Osaka Castle').addTo(map),
    kyoto = L.marker([35.02018570654959, 135.77372942127684]).bindPopup('Kyoto').addTo(map);
    meijiShrine = L.marker([35.378435185850634, 134.31146737815078]).bindPopup('Meiji Shrine').addTo(map);
    tokyoSkytree = L.marker([35.71011494223514, 139.81071112434938]).bindPopup('Tokyo Skytree').addTo(map);
    mountFuji = L.marker([35.36100954649485, 138.72736332973335]).bindPopup('Mount Fuji').addTo(map);
    shinjuku = L.marker([35.70227873214035, 139.70267295523635]).bindPopup('Shinjuku').addTo(map);
    hiroshimaMemorial = L.marker([34.427206083307496, 132.46457808364136]).bindPopup('Hiroshima Memorial').addTo(map);
    todaiJiTempleNara = L.marker([34.68906446929562, 135.8398157954642]).bindPopup('Todai-ji Temple Nara').addTo(map);

var spotsJapan = L.layerGroup([osakaCastle, kyoto, meijiShrine, tokyoSkytree, mountFuji, shinjuku, hiroshimaMemorial, todaiJiTempleNara]);

layerControl.addOverlay(spotsJapan, "Favorite Spots Japan");

//Spots Eua
var centralPark = L.marker([40.78270083657338, -73.96556196538424]).bindPopup('Central Park').addTo(map);
    magicKingdom = L.marker([28.418654463363517, -81.58120620480939]).bindPopup('Magic Kingdom').addTo(map);
    empireStateBuilding = L.marker([40.748513623183115, -73.98566440422142]).bindPopup('Empire State Building').addTo(map);
    timesSquare = L.marker([40.75805815905454, -73.98553656771453]).bindPopup('Times Square').addTo(map);
    grandCanyon = L.marker([36.51551070672093, -112.17774601094884]).bindPopup('Grand Canyon').addTo(map);
    hollywood = L.marker([34.09345961231548, -118.32536343403409]).bindPopup('Hollywood').addTo(map);
    statueOfLiberty = L.marker([40.68928998424684, -74.04447896541522]).bindPopup('Statue of Liberty').addTo(map);
    bridgeGoldenGate = L.marker([37.820013323489626, -122.47824437554387]).bindPopup('Bridge Golden Gate').addTo(map);

var spotsEua = L.layerGroup([centralPark, magicKingdom, empireStateBuilding, timesSquare, grandCanyon, hollywood, statueOfLiberty, bridgeGoldenGate]);

layerControl.addOverlay(spotsEua, "Favorite Spots United States");

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// 34.68727474401137, 135.5258546