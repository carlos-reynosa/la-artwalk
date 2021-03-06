/**
 * Removes all the provided marker types (bars,galleries,restaurants) from the map.
 */
define(['SetMarkerVisibility', 'jquery', 'MarkerInfoBubble'], function (setMarkerVisibilityValue, $, infoBubble) {
    return function (markers) {
        if (markers) {
            if (infoBubble.isOpen()) {
                infoBubble.close();
            }
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
                if (markers[i].shadow) {
                    markers[i].shadow.setMap(null);
                }
            }
            setMarkerVisibilityValue(markers, false);
            $('#toggle-' + markers[0].markerType + ' a > img').prop('src', './images/' + markers[0].markerType + '_on.png');
        }
    };
});
