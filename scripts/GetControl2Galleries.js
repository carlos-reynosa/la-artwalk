function getControl2Galleries() {
    var markerIDs = [];
    $("li", $(".control2-listitems")[0]).each(function (item) {
        markerIDs.push(this.getAttribute("id"))
    })
    var controller2Galleries = [];
    for (var i = 0; i < galleryMarkers.length; i++) {
        for (var j = 0; j < markerIDs.length; j++) {
            if (markerIDs[j].toString() == galleryMarkers[i].galleryID.toString()) {
                controller2Galleries.push(galleryMarkers[i]);
            }
        }
    }
    return controller2Galleries;
}