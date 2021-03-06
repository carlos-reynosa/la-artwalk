/**
 * Builds a list of gallery markers and all their associated data for use within the application.
 */
define(['GalleryMarkerData', 'MarkerOptions', 'BaseMarkerSize', 'AppMap', 'Google', 'GetResizedMarkerSize'],
    function (markerData, markerOptions, baseMarkerSize, map, google, getResizedMarkerSize) {
        var markerImageURL;
        var markers = [];
        var gallery;
        var shape;

        for (var i = 0; i < markerData.length; i++) {
            var resizedMarkerSize;

            gallery = markerData[i];

            resizedMarkerSize = getResizedMarkerSize(baseMarkerSize, gallery);

            //Define the selection area of the marker within the map
            shape = {
                coord: [resizedMarkerSize.width, resizedMarkerSize.height / 2, (resizedMarkerSize.width / 2) + 10],
                type: 'circle'
            };

            markers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(gallery.latitude, gallery.longitude),
                clickable: true,
                title: gallery.galleryName,
                zIndex: gallery.zIndex,
                shape: shape
            });

            markers[i].galleryID = i;

            markers[i].blueMarkerURL = './images/markers/' + markers[i].galleryID + '_b.png';
            markers[i].pinkMarkerURL = './images/markers/' + markers[i].galleryID + '_p.png';

            /**
             * Providing each marker with tha ability to fade slightly.
             * The function parses the URL representing the pie chart icon and
             * attempts to built a new one but a slight transparency affect added.
             */
            markers[i].fadeOut = function () {

                this.fadeInURL = this.icon;

                var tempIcon = this.icon;
                var urlColorIndex;
                var urlItems = tempIcon.split('&');

                for (var i = 0; i < urlItems.length; i++) {
                    if (urlItems[i].indexOf('chco') >= 0) {
                        urlColorIndex = i;
                        break;
                    }
                }

                var splitColors = urlItems[urlColorIndex].split('|');
                var newColorSection = '';

                for (var i = 0; i < splitColors.length; i++) {
                    if (i == splitColors.length - 1) {
                        newColorSection += splitColors[i] + 'AA';
                    } else {
                        newColorSection += splitColors[i] + 'AA|';
                    }
                }

                urlItems[urlColorIndex] = newColorSection;

                var newFadedIcon = '';

                for (var i = 0; i < urlItems.length; i++) {
                    if (i == urlItems.length - 1) {
                        newFadedIcon += urlItems[i];
                    } else {
                        newFadedIcon += urlItems[i] + '&';
                    }
                }

                this.setIcon(newFadedIcon);

                this.fadeOutURL = newFadedIcon;
            };

            markers[i].fadeIn = function () {
                this.setIcon(this.fadeInURL);
            };

            google.maps.Marker.prototype.galleryData = null;

            markers[i].galleryData = gallery;
        }
        return markers;
    });