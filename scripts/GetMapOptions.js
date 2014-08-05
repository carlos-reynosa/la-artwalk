/**
 * Returns a formatted Goole maps options object for creating the map used witin the application.
 * @param zoomLevel
 * @param myLatLng
 * @param mapStyle
 * @returns {{zoom: *, center: *, mapTypeId: *, panControl: boolean, scaleControl: boolean, zoomControl: boolean, styles: *, mapTypeControl: boolean, streetViewControl: boolean}}
 */
function getMapOptions(zoomLevel, myLatLng, mapStyle) {

    return{
        zoom: zoomLevel,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        scaleControl: false,
        zoomControl: false,
        styles: mapStyle,
        mapTypeControl: false,
        streetViewControl: false
    };
}