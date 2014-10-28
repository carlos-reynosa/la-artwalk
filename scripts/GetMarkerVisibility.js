define(['MarkerVisibility'], function (markerVisibility) {

    return function (markers) {
        if (markers[0].markerType == "gallery") {
            return markerVisibility.gallery;
        }
        else if (markers[0].markerType == "bar") {
            return markerVisibility.bar;
        }
        else if (markers[0].markerType == "restaurant") {
            return markerVisibility.restaurant;
        }
    };


});