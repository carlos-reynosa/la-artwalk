/**
 * Initializes the pop up that is displayed when a bar, gallery, or restaurant marker is clicked within the application.
 */
define(['RestaurantMarkers',
        'Google',
        'MarkerInfoBubble',
        'GetInfoBoxContentString',
        'AppMap',
        'BarMarkers',
        'GalleryMarkers',
        'OpenProfile',
        'AddMarkerToMyMap',
        'jquery',
        'domReady!',
        'MarkerListControl'],
    function (restaurantMarkers,
              google, infoBubble,
              getInfoBoxContentString,
              map,
              barMarkers,
              galleryMarkers,
              openProfile,
              addMarkerToMyMap,
              $,
              document,
              markerListControl) {
        var contentString;

        $('.profile-open-link').live('click', function () {
            openProfile(this.dataset.profileId);
        });

        $('.infobubble-button-link').live('click', function () {
            addMarkerToMyMap();
        });

        for (var j = 0; j < restaurantMarkers.length; j++) {
            //Display a pop up for each restaurant marker when it is clicked  within the map
            google.maps.event.addListener(restaurantMarkers[j], 'click', function () {
                if (!markerListControl.isOpen) {
                    $('button2').click();
                    markerListControl.isOpen = true;
                }

                var lastMarkerClicked = infoBubble.getCurrentMarker();

                if (lastMarkerClicked) {
                    if (lastMarkerClicked.galleryID >= 0) {
                        lastMarkerClicked.focusOut();
                        this.focusIn();
                        this.switchMarkerColor('light-blue');
                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('pink');
                        }
                    }
                    else {
                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('dark-blue');
                            lastMarkerClicked.focusOut();
                        }
                        this.focusIn();
                        this.switchMarkerColor('light-blue');
                    }
                }
                else {
                    this.focusIn();
                    this.switchMarkerColor('light-blue');
                }
                if (infoBubble.isOpen()) {
                    infoBubble.close();
                }
                //The HTML that should be displayed within the pop up for the marker that is clicked
                var contentString = getInfoBoxContentString(this);

                infoBubble.addTab('', contentString);
                infoBubble.open(map, this);
            });

            //Each marker changes colors when selected
            //Two possible colors, pink and blue
            restaurantMarkers[j].clickedIconURL = './images/restaurant_b.png';
            restaurantMarkers[j].unClickedIconURL = './images/restaurant.png';

            restaurantMarkers[j].isSelected = false;

            restaurantMarkers[j].switchMarkerColor = function (color) {
                if (color == 'light-blue') {
                    this.setIcon(this.clickedIconURL);
                }
                else if (color == 'dark-blue') {
                    this.setIcon(this.unClickedIconURL);
                }
            };

            //Makes sure that the restaurant marker is on top of all other markers when it is selected on the map
            restaurantMarkers[j].focusIn = function () {
                this.defaultzIndex = this.zIndex;
                this.zIndex = 10000;
            };

            restaurantMarkers[j].focusOut = function () {
                this.zIndex = this.defaultzIndex;
            };
        }

        for (var j = 0; j < barMarkers.length; j++) {

            //Display a pop up for each bar marker when it is clicked  within the map
            google.maps.event.addListener(barMarkers[j], 'click', function () {
                if (!markerListControl.isOpen) {
                    $('button2').click();
                    markerListControl.isOpen = true;
                }

                var lastMarkerClicked = infoBubble.getCurrentMarker();

                if (lastMarkerClicked) {
                    if (lastMarkerClicked.galleryID >= 0) {
                        this.focusIn();
                        this.switchMarkerColor('light-blue');
                        lastMarkerClicked.focusOut();
                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('pink')
                        }
                    }
                    else {
                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('dark-blue');
                            lastMarkerClicked.focusOut();
                        }
                        this.focusIn();
                        this.switchMarkerColor('light-blue');
                    }
                }
                else {
                    this.focusIn();
                    this.switchMarkerColor('light-blue');
                }
                if (infoBubble.isOpen()) {
                    infoBubble.close();
                }

                //The HTML that should be displayed within the pop up for restaurant the marker that is clicked
                var contentString = getInfoBoxContentString(this);

                infoBubble.addTab('', contentString);
                infoBubble.open(map, this);
            });

            //Each bar marker changes colors when selected
            //Two possible colors, pink and blue
            barMarkers[j].clickedIconURL = './images/bar_b.png';
            barMarkers[j].unClickedIconURL = './images/bar.png';

            barMarkers[j].isSelected = false;

            barMarkers[j].switchMarkerColor = function (color) {
                if (color == 'light-blue') {
                    this.setIcon(this.clickedIconURL);
                }
                else if (color == 'dark-blue') {
                    this.setIcon(this.unClickedIconURL);
                }
            };


            //Makes sure that the bar marker is on top of all other markers when it is selected on the map
            barMarkers[j].focusIn = function () {
                this.defaultzIndex = this.zIndex;
                this.zIndex = 10000;
            };

            barMarkers[j].focusOut = function () {
                this.zIndex = this.defaultzIndex;
            };
        }

        for (var i = 0; i < galleryMarkers.length; i++) {

            //Display a pop up for each gallery marker when it is clicked  within the map
            google.maps.event.addListener(galleryMarkers[i], 'click', function () {
                if (!markerListControl.isOpen) {
                    $('button2').click();
                    markerListControl.isOpen = true;
                }

                var lastMarkerClicked = infoBubble.getCurrentMarker();

                if (lastMarkerClicked) {
                    if (lastMarkerClicked.galleryID >= 0) {
                        this.focusIn();
                        lastMarkerClicked.focusOut();

                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('pink');
                        }

                        this.switchMarkerColor('blue');
                    }
                    else if (lastMarkerClicked.barID >= 0 || lastMarkerClicked.restaurantID >= 0) {
                        this.focusIn();
                        this.switchMarkerColor('blue');
                        lastMarkerClicked.focusOut();
                        if (!lastMarkerClicked.isSelected) {
                            lastMarkerClicked.switchMarkerColor('dark-blue');
                        }
                    }
                }
                else {
                    this.switchMarkerColor('blue');
                    this.focusIn();
                }

                if (infoBubble.isOpen()) {
                    infoBubble.close();
                }

                //The HTML that should be displayed within the pop up for gallery marker that is clicked
                var contentString = getInfoBoxContentString(this);

                infoBubble.addTab('', contentString);
                infoBubble.open(map, this);
            });

            galleryMarkers[i].switchMarkerColor = function (color) {
                if (map.mapTypeAppState == 'colors') {
                    if (color == 'pink') {
                        this.setIcon(this.pinkMarkerURL);
                    } else if (color = 'blue') {
                        this.setIcon(this.blueMarkerURL);
                    }
                }
            };

            //Makes sure that the gallery marker is on top of all other markers when it is selected on the map
            galleryMarkers[i].focusIn = function () {
                this.defaultzIndex = this.zIndex;
                this.zIndex = 10000;
            };

            galleryMarkers[i].markerType = 'gallery';

            galleryMarkers[i].focusOut = function () {
                this.zIndex = this.defaultzIndex;
            };
        }
    });