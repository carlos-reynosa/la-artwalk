function getMarkerByID(ID, markerType) {
    if (markerType == "bar") {
        for (var i = 0; i < barMarkers.length; i++) {
            if ("bar-" + barMarkers[i].barID.toString() == ID) {
                return barMarkers[i];
            }
        }
    }
    else if (markerType == "restaurant") {
        for (var i = 0; i < restaurantMarkers.length; i++) {
            if ("restaurant-" + restaurantMarkers[i].restaurantID.toString() == ID) {
                return restaurantMarkers[i];
            }
        }
    }
    else {
        for (var i = 0; i < galleryMarkers.length; i++) {
            if (galleryMarkers[i].galleryID.toString() == ID.toString()) {
                return galleryMarkers[i];
            }
        }
    }
}