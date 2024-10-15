let home = document.getElementById("home")


home.addEventListener("click", () => {

    window.location = "../E-commerce.html"

})
var map = L.map('map').setView([34.761923, 36.078265
], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([34.847762, 36.089173]).addTo(map)
    .bindPopup('The first branch')
    .openPopup();

var marker = L.marker([34.847762, 36.089173]).addTo(map);

var marker = L.marker([34.819511, 36.1119553]).addTo(map);

var popup = L.popup();


map.on('click', onMapClick);