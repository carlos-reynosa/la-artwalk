function clearMarkers(markers) {
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
        $("#toggle-" + markers[0].markerType + " a > img").prop("src", "./images/" + markers[0].markerType + "_on.png");
    }
}