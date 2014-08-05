function updateMarkers(markerOptions) {
    var tempThis = this;
    console.log("UpdatingMarkers:");
    var imageURL;
    var gallery;
    var resizedMarkerSize;
    for (var i = 0; i < galleryMarkers.length; i++) {
        resizedMarkerSize = getResizedMarkerSize(baseMarkerSize, galleryData[i]);
        imageURL = new ChartURL(galleryData[i], markerOptions, resizedMarkerSize).getChartURL();
        galleryMarkers[i].setIcon(imageURL);
    }
}