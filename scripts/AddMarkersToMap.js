define(['SetMarkerVisibility'], function (setMarkerVisibilityValue) {
    return function (markers, map) {
        if (markers) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
                if (markers[i].shadow && map.mapTypeAppState == "pie") {
                    markers[i].shadow.setMap(map);
                }
            }
            setMarkerVisibilityValue(markers, true);

            $("#toggle-" + markers[0].markerType + " a > img").prop("src", "./images/" + markers[0].markerType + "_off.png");
        }
    };
});

