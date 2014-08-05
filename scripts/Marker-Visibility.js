
function setMarkerVisibilityValue(markers, value) {
    var markerType = markers[0].markerType;
    if (markerType == "gallery") {
        markerVisibility.gallery = value;
    }
    else if (markerType == "bar") {
        markerVisibility.bar = value;
    }
    else if (markerType == "restaurant") {
        markerVisibility.restaurant = value;
    }
}
function getMarkerVisibility(markers) {
    if (markers[0].markerType == "gallery") {
        return markerVisibility.gallery;
    }
    else if (markers[0].markerType == "bar") {
        return markerVisibility.bar;
    }
    else if (markers[0].markerType == "restaurant") {
        return markerVisibility.restaurant;
    }
}
function toggleMarkerVisibility(markers) {
    if (getMarkerVisibility(markers) == true) {
        clearMarkers(markers);
    }
    else {
        addMarkersToMap(markers, map);
    }
}