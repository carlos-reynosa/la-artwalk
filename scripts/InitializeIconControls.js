/**
 *  Initializes click and hover event listeners on the controls that allow the user to toggle marker visibility and
 *  zoom level.
 *
 */
define(['MarkerVisibility', 'ToggleMarkerVisibility', 'BarMarkers', 'RestaurantMarkers', 'GalleryMarkers', 'AppMap'],
    function (markerVisibility, toggleMarkerVisibility, barMarkers, restaurantMarkers, galleryMarkers, map) {

        var global = window;

        //Icon hover event for bars toggle button
        $('#toggle-bar a > img').hover(
            function () {
                this.src = './images/bar_off.png';
            },
            function () {
                if (markerVisibility.bar) {
                    this.src = './images/bar_off.png';
                }
                else {
                    this.src = './images/bar_on.png';
                }
            });

        //Icon click event for bars toggle button
        $('#toggle-bar > a').click(function () {
            toggleMarkerVisibility(barMarkers);
            if (!(markerVisibility.bar)) {
                $('#toggle-bar a > img').prop('src', './images/bar_on.png');
            }
        });

        //Icon hover event for restaurant toggle button
        $('#toggle-restaurant a > img').hover(
            function () {
                this.src = './images/restaurant_off.png';
            },
            function () {
                if (markerVisibility.restaurant) {
                    this.src = './images/restaurant_off.png';
                }
                else {
                    this.src = './images/restaurant_on.png';
                }
            });

        //Icon click event for restaurant toggle button
        $('#toggle-restaurant > a').click(function () {
            toggleMarkerVisibility(restaurantMarkers);
            if (!(markerVisibility.restaurant )) {
                $('#toggle-restaurant a > img').prop('src', './images/restaurant_on.png');
            }
        });

        //Icon hover event for gallery toggle button
        $('#toggle-gallery a > img').hover(
            function () {
                this.src = './images/gallery_off.png';
            },
            function () {
                if (markerVisibility.gallery) {
                    this.src = './images/gallery_off.png';
                }
                else {
                    this.src = './images/gallery_on.png';
                }
            });

        //Icon click event for gallery toggle button
        $('#toggle-gallery > a').click(function () {
            toggleMarkerVisibility(galleryMarkers);
            if (!(markerVisibility.gallery)) {
                $('#toggle-gallery a > img').prop('src', './images/gallery_on.png');
            }
        });

        //Icon hover event for increase zoom button
        $('#zoomControls-add a > img').hover(
            function () {
                this.src = './images/add_on.png';
            },
            function () {
                this.src = './images/add_off.png';
            });

        //Icon hover event for decrease zoom button
        $('#zoomControls-minus a > img').hover(
            function () {
                this.src = './images/minus_on.png';
            },
            function () {
                this.src = './images/minus_off.png';
            });


        //Icon click event for increase zoom button
        $('#zoomControls-add a').click(function () {
            map.setZoom(map.zoom + 1);
        });

        //Icon click event for decrease zoom button
        $('#zoomControls-minus a').click(function () {
            map.setZoom(map.zoom - 1);
        });

    });