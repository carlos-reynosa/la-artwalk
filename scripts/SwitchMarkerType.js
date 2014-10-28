define(['GalleryMarkers', 'AppMap', 'AddMarkersToMap'],
    function (galleryMarkers, map, addMarkersToMap) {

        return function (type) {
            for (var i = 0; i < galleryMarkers.length; i++) {
                if (type == "pink") {
                    galleryMarkers[i].setIcon(galleryMarkers[i].pinkMarkerURL);
                } else if (type == "blue") {
                    galleryMarkers[i].setIcon(galleryMarkers[i].blueMarkerURL);
                }
            }
            addMarkersToMap(galleryMarkers, map);
        };


    });

