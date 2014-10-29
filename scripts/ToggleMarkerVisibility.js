define(['AppMap', 'GetMarkerVisibility', 'ClearMarkers', 'AddMarkersToMap'],
    function (map, getMarkerVisibility, clearMarkers, addMarkersToMap) {
        return function (markers) {
            if (getMarkerVisibility(markers) == true) {
                clearMarkers(markers);
            }
            else {
                addMarkersToMap(markers, map);
            }
        };
    }
);