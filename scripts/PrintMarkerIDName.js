
function printMarkerIDName(galleryMarkers) {
    console.log("*******************Printing Gallery Markers' Name and ID********************");
    for (var i = 0; i < galleryMarkers.length; i++) {
        console.log("Gallery ID: " + galleryMarkers[i].galleryID + "\n Gallery IMG URL:" + galleryMarkers[i].icon + "\n\n")
    }
    console.log("************END PRINT MARKER DATA*******************");
}