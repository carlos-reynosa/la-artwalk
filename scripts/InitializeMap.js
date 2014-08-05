/**
 * Returns a Google Maps Object that represents the application.
 * @param lat
 * @param lng
 * @param mapStyle
 * @param zoomLevel
 * @param mapDivID
 * @returns {document.Map}
 */
function initializeMap(lat, lng, mapStyle, zoomLevel, mapDivID) {

    var myLatLng = new google.maps.LatLng(lat, lng);
    var mapOptions = this.getMapOptions(zoomLevel, myLatLng, mapStyle);

    return new google.maps.Map(document.getElementById(mapDivID), mapOptions);

}