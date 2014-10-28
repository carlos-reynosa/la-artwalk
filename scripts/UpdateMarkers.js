define(['GalleryMarkers', 'BaseMarkerSize', 'GetResizedMarkerSize', 'ChartURL', 'GalleryMarkerData'],
    function (galleryMarkers, baseMarkerSize, getResizedMarkerSize, ChartURL, galleryData) {


        return function (markerOptions) {
            var imageURL;
            var resizedMarkerSize;
            for (var i = 0; i < galleryMarkers.length; i++) {
                resizedMarkerSize = getResizedMarkerSize(baseMarkerSize, galleryData[i]);
                imageURL = new ChartURL(galleryData[i], markerOptions, resizedMarkerSize).getChartURL();
                galleryMarkers[i].setIcon(imageURL);
            }
        };


    });