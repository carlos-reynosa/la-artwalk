define(['AppMap', 'GetMarkerVisibility', 'ClearMarkers', 'AddMarkersToMap'],
    function (map, getMarkerVisibility, clearMarkers, addMarkersToMap) {

        function ToggleMarkerVisibility(markers) {
            if (getMarkerVisibility(markers) == true) {
                clearMarkers(markers);
            }
            else {
                addMarkersToMap(markers, map);
            }
        }


        return ToggleMarkerVisibility;
    }
);