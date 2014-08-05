function switchMarkerType(type) {
    for (var i = 0; i < this.galleryMarkers.length; i++) {
        if (type == "pink") {
            this.galleryMarkers[i].setIcon(this.galleryMarkers[i].pinkMarkerURL);
        } else if (type == "blue") {
            this.galleryMarkers[i].setIcon(this.galleryMarkers[i].blueMarkerURL);
        }
    }
    this.addMarkersToMap(galleryMarkers, map);
}