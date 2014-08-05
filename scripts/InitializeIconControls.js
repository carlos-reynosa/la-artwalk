/**
 *  Initializes click and hover event listeners on the controls that allow the user to toggle marker visibility and
 *  zoom level.
 */
function initializeIconControls() {
    var tempThis = this;

    //Icon hover event for bars toggle button
    $("#toggle-bar a > img").hover(
        function (event) {
            this.src = "./images/bar_off.png";
        },
        function (event) {
            if (tempThis.markerVisibility.bar) {
                this.src = "./images/bar_off.png";
            }
            else {
                this.src = "./images/bar_on.png";
            }
        });

    //Icon click event for bars toggle button
    $("#toggle-bar > a").click(function () {
        tempThis.toggleMarkerVisibility(barMarkers);
        if (!tempThis.markerVisibility.bar) {
            $("#toggle-bar a > img").prop("src", "./images/bar_on.png");
        }
    });

    //Icon hover event for restaurant toggle button
    $("#toggle-restaurant a > img").hover(
        function (event) {
            this.src = "./images/restaurant_off.png";
        },
        function (event) {
            if (tempThis.markerVisibility.restaurant) {
                this.src = "./images/restaurant_off.png";
            }
            else {
                this.src = "./images/restaurant_on.png";
            }
        });

    //Icon click event for restaurant toggle button
    $("#toggle-restaurant > a").click(function () {
        tempThis.toggleMarkerVisibility(restaurantMarkers);
        if (!tempThis.markerVisibility.restaurant) {
            $("#toggle-restaurant a > img").prop("src", "./images/restaurant_on.png");
        }
    });

    //Icon hover event for gallery toggle button
    $("#toggle-gallery a > img").hover(
        function (event) {
            this.src = "./images/gallery_off.png";
        },
        function (event) {
            if (tempThis.markerVisibility.gallery) {
                this.src = "./images/gallery_off.png";
            }
            else {
                this.src = "./images/gallery_on.png";
            }
        });

    //Icon click event for gallery toggle button
    $("#toggle-gallery > a").click(function () {
        tempThis.toggleMarkerVisibility(galleryMarkers);
        if (!tempThis.markerVisibility.gallery) {
            $("#toggle-gallery a > img").prop("src", "./images/gallery_on.png");
        }
    });

    //Icon hover event for increase zoom button
    $("#zoomControls-add a > img").hover(
        function (event) {
            this.src = "./images/add_on.png";
        },
        function (event) {
            this.src = "./images/add_off.png";
        });

    //Icon hover event for decrease zoom button
    $("#zoomControls-minus a > img").hover(
        function (event) {
            this.src = "./images/minus_on.png";
        },
        function (event) {
            this.src = "./images/minus_off.png";
        });


    //Icon click event for increase zoom button
    $("#zoomControls-add a").click(function () {
        tempThis.map.setZoom(map.zoom + 1);
    });

    //Icon click event for decrease zoom button
    $("#zoomControls-minus a").click(function () {
        tempThis.map.setZoom(map.zoom - 1);
    });
}