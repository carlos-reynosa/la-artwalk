define(['MarkerVisibility'], function (markerVisibility) {

    return function setMarkerVisibilityValue(markers, value) {
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
    };
});



