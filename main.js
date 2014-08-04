

function getProfileHeight(markerID) {
    return markerProfileHeight[markerID];
}
function setMarkerVisibilityValue(markers, value) {
    var markerType = markers[0].markerType;
    if (markerType == "gallery") {
        markerVisibility.gallery = value;
    }
    else if (markerType == "bar") {
        markerVisibility.bar = value;
    }
    else if (markerType == "restaurant") {
        markerVisibility.restaurant = value;
    }
}
function getMarkerVisibility(markers) {
    if (markers[0].markerType == "gallery") {
        return markerVisibility.gallery;
    }
    else if (markers[0].markerType == "bar") {
        return markerVisibility.bar;
    }
    else if (markers[0].markerType == "restaurant") {
        return markerVisibility.restaurant;
    }
}
function toggleMarkerVisibility(markers) {
    if (getMarkerVisibility(markers) == true) {
        clearMarkers(markers);
    }
    else {
        addMarkersToMap(markers, map);
    }
}
function initialize() {
    markerVisibility = {bar: true, restaurant: true, gallery: true};
    markerProfileHeight = {
        0: 700,
        1: 700,
        2: 700,
        3: 700,
        4: 700,
        5: 700,
        6: 700,
        7: 700,
        8: 700,
        9: 700,
        10: 700,
        11: 700,
        12: 700,
        13: 700,
        14: 700,
        15: 700,
        16: 700,
        17: 700,
        18: 700,
        19: 700,
        20: 700,
        21: 700,
        22: 700,
        23: 700,
        24: 700,
        25: 700,
        26: 700,
        27: 700,
        28: 700,
        29: 700,
        30: 700,
        31: 700,
        32: 700,
        33: 700,
        34: 700,
        35: 700,
        36: 700,
        37: 700,
        38: 700,
        39: 700,
        40: 700,
        41: 700
    };
    $("#colorboard").fadeOut(0);
    var zoomLevel = 16;
    var lat = 34.044646;
    var lng = -118.250612;
    this.baseMarkerSize = {
        width: 45,
        height: 45
    };
    this.infoBubble = new InfoBubble({
        backgroundColor: 'rgb(0,179,192)',
        maxWidth: 152
    });
    this.barData = [
        ['Broadway Bar', '830 S Broadway Los Angeles, CA 90014', '213-614-9909', 34.042964, -118.255260, 100],
        ['Club 740', '753 S Spring St Los Angeles, CA 90014', '216-627-6277', 34.043485, -118.253832, 6],
        ['Big Wangs', '801 S Grand Ave Los Angeles, CA 90017', '213-629-2449', 34.045618, -118.258157, 6],
        ['Bonaventure Brewing', '404 S Figueroa St Los Angeles, CA 90071', '213-236-0802', 34.052745, -118.256199, 6],
        ['Charlottes Lounge', '880 W 1st St Los Angeles, CA 90012', '310-696-1304', 34.056811, -118.251622, 6],
        ['Bar 107', '107 4th St Los Angeles, CA 90013', '213-625-7382', 34.048414, -118.247581, 6],
        ['La Cita Bar', '336 S Hill St Los Angeles, CA 90013', '213-687-7111', 34.050792, -118.249747, 6],
        ['The Crocker club', '453 S Spring St Los Angeles, CA 90013', '213-239-9099', 34.047633, -118.249410, 6],
        ['Las Perlas', '107 E 6th St Los Angeles, CA 90014', '213-988-8355', 34.045091, -118.249522, 6],
        ['Golden Gopher', '417 W 8th St Los Angeles, CA 90014', '213-614-8001', 34.044908, -118.256290, 6],
        ['Exchange LA', '618 S Spring St Los Angeles, CA 90014', '213-627-8070', 34.045271, -118.251138, 6],
        ['Belasco Theatre', '1050 S Hill St Los Angeles, CA 90015', '213-746-5670', 34.040393, -118.259407, 6]
    ];
    this.restaurantData = [
        ['Water Grill', '544 S Grand Ave Los Angeles, CA 90071', '213-891-0900', 34.049092, -118.254855, 6],
        ['Engine Co. No. 28.', '644 S Figueroa St Los Angeles, CA 90017', '213-624-6996', 34.049742, -118.259408, 7],
        ['IHOP Restaurant', '3165 6th Ave Los Angeles, CA 90018', '213-388-7770', 34.047234, -118.260110, 8],
        ['J Restaurant & Lounge', '1119 S Olive St Los Angeles, CA 90015', '213-746-7746', 34.040675, -118.261730, 9],
        ['Palm Restaurant', '1100 S. Flower St Los Angeles, CA 90015', '213-763-4600', 34.042632, -118.264110, 3],
        ['Sushi Go 55', '333 S Alameda St Los Angeles, CA 90012', '213-687-0777', 34.045423, -118.238297, 5],
        ['Sushi Gen', '422 E 2nd St Los Angeles, CA 90012', '213-617-0552', 34.04701, -118.238413, 6],
        ['Daikokuya', '327 E 1st St Los Angeles, CA 90012', '213-626-1680', 34.049964, -118.240118, 7],
        ['Orochon Ramen', '123 S Onizuka St Los Angeles, CA 90012', '213-617-1766', 34.050815, -118.242030, 8],
        ['The Lazy Ox Canteen', '241 S San Pedro St Los Angeles, CA 90012', '213-626-5299', 34.048637, -118.242016, 9],
        ['Pitfire Pizza Company', '108 W 2nd St Los Angeles, CA 90012', '213-808-1200', 34.051007, -118.245015, 6],
        ['The Gorbals', '501 S Spring St Los Angeles, CA 90013', '213-488-3408', 34.04747, -118.249841, 6],
        ['Coles', '118 E 6th St Los Angeles, CA 90014', '213-622-4090', 34.044800, -118.249475, 6],
        ['Nickel Diner', '524 S Main St Los Angeles, CA 90013', '213-623-8301', 34.045891, -118.248765, 6],
        ['Petes Cafe', '400 S Main St Los Angeles, CA 90013', '213-617-1000', 34.047824, -118.247352, 6],
        ['Syrup Desserts', '611 S Spring St Los Angeles, CA 90014', '213-488-5136', 34.045727, -118.251378, 5],
        ['Cliftons Cafeteria', '648 S Broadway Los Angeles, CA 90014', '213-627-1673', 34.045448, -118.252991, 6],
        ['Cicada Restaurant', '617 S Olive St Los Angeles, CA 90014', '213-488-9488', 34.047697, -118.254473, 7]
    ];
    this.chartColors = {
        COLOR1: "ffcc33",
        COLOR2: "F3891E",
        COLOR3: "33cccc",
        COLOR4: "A4CE3B",
        COLOR5: "ff3399",
        COLOR6: "3399cc",
        COLOR7: "009966",
        COLOR8: "993366",
        COLOR9: "000000"
    };
    this.galleryMetaData = {
        categories: {
            media: {
                value: "media",
                title: "Media"
            },
            style: {
                value: "style",
                title: "Style"
            },
            price: {
                value: "price",
                title: "Price"
            }
        },
        types: {
            media: {
                PAINTING: {
                    value: "painting",
                    title: "Painting"
                },
                DRAWING: {
                    value: "drawing",
                    title: "Drawing"
                },
                PRINTMAKING: {
                    value: "printmaking",
                    title: "Printmaking"
                },
                PHOTOGRAPHY: {
                    value: "photography",
                    title: "Photography"
                },
                DIGITALMEDIA: {
                    value: "digitalMedia",
                    title: "Digital Media"
                },
                VIDEO: {
                    value: "video",
                    title: "Video"
                },
                INSTALLATION: {
                    value: "installation",
                    title: "Installation"
                },
                MIXEDMEDIA: {
                    value: "mixedMedia",
                    title: "Mixed Media"
                },
                SCULPTURE: {
                    value: "sculpture",
                    title: "Sculpture"
                }
            },
            style: {
                TRADITIONAL: {
                    value: "traditional",
                    title: "Traditional"
                },
                MODERN: {
                    value: "modern",
                    title: "Modern"
                },
                POSTMODERN: {
                    value: "postModern",
                    title: "Post Modern"
                },
                CONTEMPORARY: {
                    value: "contemporary",
                    title: "Contemporary"
                },
                ABSTRACT: {
                    value: "abstract",
                    title: "Abstract"
                },
                FIGURATIVE: {
                    value: "figurative",
                    title: "Figurative"
                },
                CARTOONEE: {
                    value: "cartoonee",
                    title: "Cartoonee"
                },
                SYMBOLISM: {
                    value: "symbolism",
                    title: "Symbolism"
                },
                SURREALISM: {
                    value: "surrealism",
                    title: "Surrealism"
                },
                REPRESENTATIONAL: {
                    value: "representational",
                    title: "Representational"
                }
            },
            price: {
                BEGINNER: {
                    value: "beginner",
                    title: "Beginner"
                },
                INTERMEDIATE: {
                    value: "intermediate",
                    title: "Intermediate"
                },
                SERIOUS: {
                    value: "serious",
                    title: "Serious"
                },
                INVESTOR: {
                    value: "investor",
                    title: "Investor"
                }
            }
        }
    };
    var galleryArtTypeRawData = getGalleryRawData();
    var galleries = getGalleries();
    this.galleryData = getGalleryMarkerData(galleries, galleryArtTypeRawData);
    this.map = initializeMap(lat, lng, this.getMapStyle(), zoomLevel, "map_canvas");
    this.markerOptions = {
        category: this.galleryMetaData.categories.media.value,
        typeFilter: [
            {
                type: this.galleryMetaData.types.media.PAINTING.value,
                color: this.chartColors.COLOR1
            },
            {
                type: this.galleryMetaData.types.media.DRAWING.value,
                color: this.chartColors.COLOR2
            },
            {
                type: this.galleryMetaData.types.media.PRINTMAKING.value,
                color: this.chartColors.COLOR3
            },
            {
                type: this.galleryMetaData.types.media.PHOTOGRAPHY.value,
                color: this.chartColors.COLOR4
            },
            {
                type: this.galleryMetaData.types.media.DIGITALMEDIA.value,
                color: this.chartColors.COLOR5
            },
            {
                type: this.galleryMetaData.types.media.VIDEO.value,
                color: this.chartColors.COLOR6
            },
            {
                type: this.galleryMetaData.types.media.INSTALLATION.value,
                color: this.chartColors.COLOR7
            },
            {
                type: this.galleryMetaData.types.media.MIXEDMEDIA.value,
                color: this.chartColors.COLOR8
            },
            {
                type: this.galleryMetaData.types.media.SCULPTURE.value,
                color: this.chartColors.COLOR9
            }
        ]
    };
    this.galleryMarkers = initializeGalleryMarkers(galleryData, this.markerOptions, baseMarkerSize, map);
    this.barMarkers = getBarMarkers(this.barData);
    this.addMarkersToMap(this.barMarkers, this.map)
    this.restaurantMarkers = getRestaurantMarkers(this.restaurantData);
    this.addMarkersToMap(this.restaurantMarkers, this.map);
    this.controlDiv = document.getElementById("tabs_wrapper");
    this.control2Div = document.getElementById("control2Container");
    this.mapControlsDiv = document.getElementById("mapControlsWrapper");
    initializeController2Functions(control2Div);
    controlDiv.index = 1;
    control2Div.index = 2;
    mapControlsDiv.index = 4;
    this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(control2Div);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapControlsDiv);
    this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv);
    initializeListiners();
    initializeIconControls();
    var colorList = $(".colorBoardItem");
    console.log("Initializing color board:" + colorList);
    initializeInfoWindow();
    this.directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);
    map.mapTypeAppState = "colors";
    $("button2").click();
}
function initializeIconControls() {
    var tempThis = this;
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
    $("#toggle-bar > a").click(function () {
        tempThis.toggleMarkerVisibility(barMarkers);
        if (!tempThis.markerVisibility.bar) {
            $("#toggle-bar a > img").prop("src", "./images/bar_on.png");
        }
    });
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
    $("#toggle-restaurant > a").click(function () {
        tempThis.toggleMarkerVisibility(restaurantMarkers);
        if (!tempThis.markerVisibility.restaurant) {
            $("#toggle-restaurant a > img").prop("src", "./images/restaurant_on.png");
        }
    });
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
    $("#toggle-gallery > a").click(function () {
        tempThis.toggleMarkerVisibility(galleryMarkers);
        if (!tempThis.markerVisibility.gallery) {
            $("#toggle-gallery a > img").prop("src", "./images/gallery_on.png");
        }
    });
    $("#zoomControls-add a > img").hover(
        function (event) {
            this.src = "./images/add_on.png";
        },
        function (event) {
            this.src = "./images/add_off.png";
        });
    $("#zoomControls-minus a > img").hover(
        function (event) {
            this.src = "./images/minus_on.png";
        },
        function (event) {
            this.src = "./images/minus_off.png";
        });
    $("#zoomControls-add a").click(function () {
        tempThis.map.setZoom(map.zoom + 1);
    });
    $("#zoomControls-minus a").click(function () {
        tempThis.map.setZoom(map.zoom - 1);
    });
}
function printMarkerIDName(galleryMarkers) {
    console.log("*******************Printing Gallery Markers' Name and ID********************");
    for (var i = 0; i < galleryMarkers.length; i++) {
        console.log("Gallery ID: " + galleryMarkers[i].galleryID + "\n Gallery IMG URL:" + galleryMarkers[i].icon + "\n\n")
    }
    console.log("************END PRINT MARKER DATA*******************");
}
function initializeController2Functions(controller) {
    var tempThis = this;
    controller.addMarker = function (marker, category) {
        console.log("In AddMarker Function");
        if (!this.isGalleryInController2List(marker)) {
            $("#control2-" + category + "-listitems").prepend(controller._getListItemObject(marker));
            $(".close_btnbox").click(function () {
                var type = $(this).parent().parent().attr("id");
                var listItemID = "";
                if (!type.substr(0, type.indexOf("-"))) {
                    type = "gallery-";
                    listItemID += type + $(this).parent().parent().attr("id");
                }
                else {
                    type = type.substr(0, type.indexOf("-"));
                    listItemID = $(this).parent().parent().attr("id");
                }
                var markerID = "";
                if (infoBubble.getCurrentMarker().galleryID >= 0) {
                    markerID = "gallery-" + infoBubble.getCurrentMarker().galleryID;
                }
                else if (infoBubble.getCurrentMarker().barID >= 0) {
                    markerID = "bar-" + infoBubble.getCurrentMarker().barID;
                }
                else if (infoBubble.getCurrentMarker().restaurantID >= 0) {
                    markerID = "restaurant-" + infoBubble.getCurrentMarker().restaurantID;
                }
                if (infoBubble.isOpen() && markerID == listItemID) {
                    $(".infobubble-button-add").fadeTo("slow", 1);
                }
                var tempMarker = tempThis.getMarkerByID($(this).parent().parent().attr("id"), type);
                tempMarker.isSelected = false;
                if (tempMarker.galleryID >= 0) {
                    if (tempThis.map.mapTypeAppState == "pie") {
                        tempMarker.fadeIn();
                    } else if (tempThis.map.mapTypeAppState == "colors") {
                        tempMarker.switchMarkerColor("pink");
                    }
                }
                else {
                    tempMarker.switchMarkerColor("dark-blue");
                }
                controller._removeListItem($(this).parent().parent().attr("id"), marker.markerType);
            });
            $("#control2-gallery-listitems li").hover(function () {
                $(this).css("cursor", "move");
            });
        }
    }
    controller.isGalleryInController2List = function (marker) {
        console.log("Checking Marking ID: " + marker.galleryID);
        console.log("Checking item: ");
        console.log($("#control2-gallery-listitems  #" + marker.galleryID));
        if (marker.galleryID >= 0) {
            if ($("#control2-gallery-listitems  #" + marker.galleryID).length > 0) {
                console.log("Marker is in gallery");
                return true;
            } else {
                console.log("Marker is not in gallery");
                return false;
            }
        }
        else if (marker.barID >= 0 || marker.restaurantID >= 0) {
            console.log("Checked for:");
            console.log($("#control2-" + marker.markerType + "-listwrapper  #" + (marker.barID >= 0 ? "bar-" + marker.barID : "restaurant-" + marker.restaurantID)));
            if ($("#control2-" + marker.markerType + "-listwrapper  #" + (marker.barID >= 0 ? "bar-" + marker.barID : "restaurant-" + marker.restaurantID)).length > 0) {
                console.log("Marker is in gallery");
                return true;
            } else {
                console.log("Marker is not in gallery");
                return false;
            }
        }
    };
    controller._removeListItem = function (ID, category) {
        $("#control2-" + category + "-listitems li").each(function (index, element) {
            if (ID == element.getAttribute("id")) {
                $(element).remove();
            }
        });
    }
    controller.isOpen = true;
    controller._getListItemObject = function (marker) {
        if (marker.galleryID >= 0) {
            var listItemString = '<li id=' + marker.galleryID + '><div class="control2-listitem-text">' + marker.galleryData.galleryName + '<div class="close_btnbox"> <a class="control2-closbutton" href="#"><img src="images/close_btn2.jpg" width="13" height="17" border="0" /></a> </div></div> </li> ';
        }
        else if (marker.barID >= 0) {
            var listItemString = '<li id=bar-' + marker.barID + '><div class="control2-listitem-text">' + marker.title + '<div class="close_btnbox"> <a class="control2-closbutton" href="#"><img src="images/close_btn2.jpg" width="13" height="17" border="0" /></a> </div></div> </li> ';
        }
        else if (marker.restaurantID >= 0) {
            var listItemString = '<li id=restaurant-' + marker.restaurantID + '><div class="control2-listitem-text">' + marker.title + '<div class="close_btnbox"> <a class="control2-closbutton" href="#"><img src="images/close_btn2.jpg" width="13" height="17" border="0" /></a> </div></div> </li> ';
        }
        var listItemObject = $(listItemString);
        return listItemObject;
    }
}
function initializeInfoWindow() {
    console.log("Initializiing Marker Bubbles:");
    var tempThis = this;
    var contentString;
    for (var j = 0; j < restaurantMarkers.length; j++) {
        google.maps.event.addListener(restaurantMarkers[j], 'click', function () {
            console.log("Bar Clicked!");
            if (!control2Div.isOpen) {
                console.log("opening control 2");
                $("button2").click();
                control2Div.isOpen = true;
            }
            var lastMarkerClicked = tempThis.infoBubble.getCurrentMarker();
            if (lastMarkerClicked) {
                if (lastMarkerClicked.galleryID >= 0) {
                    lastMarkerClicked.focusOut();
                    this.focusIn();
                    this.switchMarkerColor("light-blue");
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("pink")
                    }
                }
                else {
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("dark-blue");
                        lastMarkerClicked.focusOut();
                    }
                    this.focusIn();
                    this.switchMarkerColor("light-blue");
                }
            }
            else {
                this.focusIn();
                this.switchMarkerColor("light-blue");
            }
            if (infoBubble.isOpen()) {
                infoBubble.close();
            }
            var contentString = getInfoBoxContentString(this);
            infoBubble.addTab('', contentString);
            infoBubble.open(tempThis.map, this);
        });
        restaurantMarkers[j].clickedIconURL = "./images/restaurant_b.png";
        restaurantMarkers[j].unClickedIconURL = "./images/restaurant.png";
        restaurantMarkers[j].isSelected = false;
        restaurantMarkers[j].switchMarkerColor = function (color) {
            if (color == "light-blue") {
                this.setIcon(this.clickedIconURL);
            }
            else if (color == "dark-blue") {
                this.setIcon(this.unClickedIconURL);
            }
        };
        restaurantMarkers[j].focusIn = function () {
            this.defaultzIndex = this.zIndex;
            this.zIndex = 10000;
        };
        restaurantMarkers[j].focusOut = function () {
            this.zIndex = this.defaultzIndex;
        };
    }
    for (var j = 0; j < barMarkers.length; j++) {
        google.maps.event.addListener(barMarkers[j], 'click', function () {
            console.log("Bar Clicked!");
            if (!control2Div.isOpen) {
                console.log("opening control 2");
                $("button2").click();
                control2Div.isOpen = true;
            }
            var lastMarkerClicked = tempThis.infoBubble.getCurrentMarker();
            if (lastMarkerClicked) {
                if (lastMarkerClicked.galleryID >= 0) {
                    this.focusIn();
                    this.switchMarkerColor("light-blue");
                    lastMarkerClicked.focusOut();
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("pink")
                    }
                }
                else {
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("dark-blue");
                        lastMarkerClicked.focusOut();
                    }
                    this.focusIn();
                    this.switchMarkerColor("light-blue");
                }
            }
            else {
                this.focusIn();
                this.switchMarkerColor("light-blue");
            }
            if (infoBubble.isOpen()) {
                infoBubble.close();
            }
            var contentString = getInfoBoxContentString(this);
            infoBubble.addTab('', contentString);
            infoBubble.open(tempThis.map, this);
        });
        barMarkers[j].clickedIconURL = "./images/bar_b.png";
        barMarkers[j].unClickedIconURL = "./images/bar.png";
        barMarkers[j].isSelected = false;
        barMarkers[j].switchMarkerColor = function (color) {
            if (color == "light-blue") {
                this.setIcon(this.clickedIconURL);
            }
            else if (color == "dark-blue") {
                this.setIcon(this.unClickedIconURL);
            }
        };
        barMarkers[j].focusIn = function () {
            this.defaultzIndex = this.zIndex;
            this.zIndex = 10000;
        };
        barMarkers[j].focusOut = function () {
            this.zIndex = this.defaultzIndex;
        };
    }
    for (var i = 0; i < galleryMarkers.length; i++) {
        google.maps.event.addListener(galleryMarkers[i], 'click', function () {
            if (!control2Div.isOpen) {
                console.log("opening control 2");
                $("button2").click();
                control2Div.isOpen = true;
            }
            var lastMarkerClicked = tempThis.infoBubble.getCurrentMarker();
            if (lastMarkerClicked) {
                if (lastMarkerClicked.galleryID >= 0) {
                    this.focusIn();
                    lastMarkerClicked.focusOut();
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("pink")
                    }
                    this.switchMarkerColor("blue");
                }
                else if (lastMarkerClicked.barID >= 0 || lastMarkerClicked.restaurantID >= 0) {
                    this.focusIn();
                    this.switchMarkerColor("blue");
                    lastMarkerClicked.focusOut();
                    if (!lastMarkerClicked.isSelected) {
                        lastMarkerClicked.switchMarkerColor("dark-blue");
                    }
                }
            }
            else {
                this.switchMarkerColor("blue");
                this.focusIn();
            }
            if (infoBubble.isOpen()) {
                infoBubble.close();
            }
            var contentString = getInfoBoxContentString(this);
            infoBubble.addTab('', contentString);
            infoBubble.open(tempThis.map, this);
        });
        galleryMarkers[i].switchMarkerColor = function (color) {
            if (tempThis.map.mapTypeAppState == "colors") {
                if (color == "pink") {
                    this.setIcon(this.pinkMarkerURL);
                } else if (color = "blue") {
                    this.setIcon(this.blueMarkerURL);
                }
            }
        };
        galleryMarkers[i].focusIn = function () {
            console.log("********START FOCUS IN****************");
            console.log("zIndex: " + this.zIndex);
            this.defaultzIndex = this.zIndex;
            this.zIndex = 10000;
            console.log("New zIndex: " + this.zIndex);
            console.log("**************END FOCUS IN************");
        };
        galleryMarkers[i].markerType = "gallery";
        galleryMarkers[i].focusOut = function () {
            console.log("********START FOCUS OUT****************");
            console.log("defaultzIndex: " + this.defaultzIndex);
            this.zIndex = this.defaultzIndex;
            console.log("**************END FOCUS OUT************");
        };
    }
}
function addMarkerToMyMap() {
    var marker = this.infoBubble.getCurrentMarker();
    if (marker.galleryID >= 0) {
        if (map.mapTypeAppState == "pie") {
            if (!marker.isSelected) {
                marker.fadeOut();
            }
        }
        else if (map.mapTypeAppState == "colors") {
            if (!marker.isSelected) {
                marker.switchMarkerColor("blue");
            }
        }
    }
    else if (marker.barID >= 0 || marker.restaurantID >= 0) {
        marker.switchMarkerColor("light-blue");
    }
    if (marker.galleryID >= 0) {
        this.control2Div.addMarker(marker, "gallery");
        marker.isSelected = true;
    }
    else if (marker.barID >= 0) {
        this.control2Div.addMarker(marker, "bar");
        marker.isSelected = true;
    }
    else if (marker.restaurantID >= 0) {
        this.control2Div.addMarker(marker, "restaurant");
        marker.isSelected = true;
    }
    $(".infobubble-button-add").fadeTo("slow", .5);
}
function getInfoBoxContentString(marker) {
    var contentString = "";
    if (marker.markerType == "bar" || marker.markerType == "restaurant") {
        contentString += "<div id='infobubble'><div id='content'><h1>" + marker.title + "</h1>";
    }
    else {
        var galleryName = marker.galleryData.galleryName;
        var contentString = "<div id='infobubble'><div id='content'><h1>" + galleryName + "</h1>";
        var filterButtonTypes = getFilterButtonTypeData();
        var percent;
        var percentTotal = 0;
        var markerData = marker.galleryData.artTypeData[currentCategory.value];
        var markerDataTotal = marker.galleryData.artTypeData.totalPieces;
        var filterButtonTitles = getFilterButtonTitles();
    }
    contentString += "<div id='infoBubbleDataBody'>";
    if (marker.markerType == "bar" || marker.markerType == "restaurant") {
        contentString += marker.address + "<br>" + marker.phoneNumber + "</div><br/>";
    } else {
        if (map.mapTypeAppState == "pie") {
            for (var i = 0; i < filterButtonTypes.length; i++) {
                percent = parseFloat((markerData[filterButtonTypes[i]] / markerDataTotal * 100).toFixed(2));
                percentTotal += percent;
                contentString += filterButtonTitles[i] + " " + Math.floor(percent) + "%<br/>";
            }
            if (percentTotal != 100) {
                contentString += "Other: " + (100 - this.Math.floor(percentTotal) + "%<br/>");
            }
        } else if (map.mapTypeAppState == "colors") {
            contentString += "<br>" + marker.galleryData.galleryAddress;
        }
        contentString += "</div>"
        contentString += "<br/>";
    }
    if (!control2Div.isGalleryInController2List(marker)) {
        contentString += '<a  href="#"><img class="infobubble-button-add" src="images/btn_add.jpg" width="43" height="18" onclick="addMarkerToMyMap()"></a>';
    } else {
        contentString += '<a  href="#"><img class="infobubble-button-add" style="opacity:.5" src="images/btn_add.jpg" width="43" height="18" onclick="addMarkerToMyMap()"></a>';
    }
    if (marker.markerType != "bar" && marker.markerType != "restaurant") {
        contentString += "<a onclick='openProfile(" + marker.galleryID + ")' href='#'><img src='images/btn_profile.jpg' width='43' height'18'></a>";
    }
    contentString += '</div></div>';
    return contentString;
}
function openProfile(markerID) {
    var tempThis;
    var profileHeight = getProfileHeight(markerID);
    if (!profileHeight) {
        profileHeight = 200;
    }
    var profileLinkObject = $('<a class="iframe"  href="./profiles/profile_' + markerID + '.html"></a>');
    profileLinkObject.fancybox({
        width: 1300,
        height: profileHeight,
        autoScale: false
    });
    profileLinkObject.click();
}

function initializeTabListiners() {
    var tempThis = this;
    $("#control2-gallery-listitems").sortable();
    $("#control1Slider").click(function () {
        tempThis.clearMarkers(tempThis.barMarkers);
        tempThis.clearMarkers(tempThis.restaurantMarkers);
        tempThis.clearMarkers(tempThis.galleryMarkers);
        $("#tabs_container,#tabs_content_container").each(function () {
            $(this).animate({
                width: 'toggle'
            }, "0");
        });
        if ($("#control1Slider").css("marginLeft") == "0px") {
            tempThis.map.mapTypeAppState = "pie";
            $("#control1Slider").css("marginLeft", "245px");
            $("#control1Slider").css("backgroundImage", "url(./images/slide_btn.jpg)");
        }
        else {
            tempThis.map.mapTypeAppState = "colors"
            tempThis.switchMarkerType("pink");
            tempThis.addMarkersToMap(tempThis.barMarkers, tempThis.map);
            tempThis.addMarkersToMap(tempThis.restaurantMarkers, tempThis.map);
            for (var i = 0; i < tempThis.galleryMarkers.length; i++) {
                if (galleryMarkers[i].isSelected) {
                    galleryMarkers[i].switchMarkerColor("blue");
                }
            }
            $("#control1Slider").animate({
                marginLeft: '0px'
            });
            $("#control1Slider").css("backgroundImage", "url(./images/slide_btn2.jpg)");
        }
    });
    $("#control1Slider").click();
    this.switchMarkerType("pink");
    this.addMarkersToMap(this.barMarkers, this.map);
    this.addMarkersToMap(this.restaurantMarkers, this.map);
    $("button2").click(function () {
        if (tempThis.control2Div.isOpen == true) {
            control2Div.isOpen = false;
        } else if (tempThis.control2Div.isOpen == false) {
            control2Div.isOpen = true;
        }
        $('#slide_container').slideToggle("");
    });
    currentCategory = galleryMetaData.categories.media;
    $("#tabs li").click(function () {
        tempThis.infoBubble.close();
        tempThis.clearMarkers(tempThis.galleryMarkers);
        $("#tabs li").removeClass('active');
        $(this).addClass("active");
        $(".tab_content").hide();
        var selected_tab = $(this).find("a").attr("href");
        clearCurrentFilterButtons();
        $("#filter-type-selector").children().each(function (index, element) {
            $(this).remove();
        });
        ;
        console.log("Tabed clicked:slected_tab:" + selected_tab);
        if (selected_tab == "#tab1") {
            replaceSelectOptions(tempThis.galleryMetaData.categories.media.value);
            tempThis.currentCategory = galleryMetaData.categories.media;
        } else if (selected_tab == "#tab2") {
            replaceSelectOptions(tempThis.galleryMetaData.categories.style.value);
            tempThis.currentCategory = galleryMetaData.categories.style;
        } else if (selected_tab == "#tab3") {
            console.log("in tab if");
            replaceSelectOptions(tempThis.galleryMetaData.categories.price.value);
            tempThis.currentCategory = galleryMetaData.categories.price;
        }
        $("select").multiselect("refresh");
        $("#tab1").fadeIn(0);
        return false;
    });
    $(".colorBoardItem").click(function (e) {
        var selectedColor = this.getAttribute("value");
        var currentListColor = $("#" + tempThis.currentListSelectedID + " div:first-child").children()[0];
        currentListColor.style.backgroundColor = "#" + tempThis.chartColors[selectedColor];
        currentListColor.setAttribute("value", selectedColor);
        console.log("Current list selected :" + tempThis.currentListSelectedID);
        console.log("Current List selected reference:" + currentListColor);
        console.log("Color Selected: " + selectedColor);
        $("#colorboard").fadeOut(0);
    });
}
function replaceSelectOptions(category) {
    var categoryTypes = galleryMetaData.types[category];
    for (type in categoryTypes) {
        $('<option value="' + categoryTypes[type].value + '">' + categoryTypes[type].title + '</option>').appendTo("#filter-type-selector");
    }
}
function getMarkerOptions(colorArray, typeArray) {
    console.log("In getMarkerOptions:");
    var markerOptions = {
        category: "",
        typeFilter: []
    };
    if (colorArray.length == typeArray.length) {
        markerOptions["category"] = this.currentCategory.value;
        for (var i = 0; i < colorArray.length; i++) {
            markerOptions.typeFilter.push({
                type: typeArray[i],
                color: this.chartColors[colorArray[i]]
            });
        }
    } else {
    }
    return markerOptions;
}
function getMarkerByID(ID, markerType) {
    if (markerType == "bar") {
        for (var i = 0; i < barMarkers.length; i++) {
            if ("bar-" + barMarkers[i].barID.toString() == ID) {
                return barMarkers[i];
            }
        }
    }
    else if (markerType == "restaurant") {
        for (var i = 0; i < restaurantMarkers.length; i++) {
            if ("restaurant-" + restaurantMarkers[i].restaurantID.toString() == ID) {
                return restaurantMarkers[i];
            }
        }
    }
    else {
        for (var i = 0; i < galleryMarkers.length; i++) {
            if (galleryMarkers[i].galleryID.toString() == ID.toString()) {
                return galleryMarkers[i];
            }
        }
    }
}
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
function initializeListiners() {
    var tempThis = this;
    initializeTabListiners();
    <!--multiple select select-->
    $(function () {
        $("select").multiselect();
    });
    $("#finish-button").click(function (e) {
        tempThis.infoBubble.close();
        console.log("Finish Button Listiner Clicke:");
        console.log(getFilterButtonColorData());
        console.log(getFilterButtonTypeData());
        var numberOfFilters = getFilterButtonTypeData().length;
        if (numberOfFilters > 0) {
            console.log("Number of filters Greater than 0");
            var markerOptions = getMarkerOptions(getFilterButtonColorData(), getFilterButtonTypeData());
            tempThis.updateMarkers(markerOptions);
            for (var i = 0; i < tempThis.galleryMarkers.length; i++) {
                if (tempThis.galleryMarkers[i].isSelected) {
                    tempThis.galleryMarkers[i].fadeOut();
                }
            }
            tempThis.addMarkersToMap(tempThis.galleryMarkers, tempThis.map);
        } else {
            console.log("Number of filter less than 0");
            tempThis.clearMarkers(tempThis.galleryMarkers);
        }
    });
    $("#revert-button").click(function () {
        console.log("Revert Button Clicked ");
        $("select").multiselect("uncheckAll");
        $("#colorboard").fadeOut(0);
        clearCurrentFilterButtons();
        tempThis.infoBubble.close();
        clearMarkers(tempThis.galleryMarkers);
    });
    $("select").multiselect({
        close: function (event, ui) {
            clearCurrentFilterButtons();
            currentCategoriesSelected = getSelectedTypes();
            addFilterButtons(currentCategoriesSelected);
        },
        open: function (event, ui) {
            refreshSelectBox();
        }
    });
}
function getFilterButtonColorData() {
    var data = [];
    $(".menu #color").map(function (index, element) {
        data.push(this.getAttribute("value"));
    });
    return data;
}
function getFilterButtonTitles() {
    var data = [];
    $("#filter-list #text").map(function () {
        data.push(this.innerHTML);
    });
    return data;
}
function getFilterButtonTypeData() {
    var data = [];
    $("#filter-list > li").map(function () {
        data.push(this.getAttribute("value"));
    });
    return data;
}
function clearCurrentFilterButtons() {
    $(".filterButton").fadeOut(150, function () {
        $(this).remove();
    });
}
function multiSelectUncheckAll() {
    $("select").multiselect("uncheckAll");
}
function getFilterButton(categoryName) {
    return $("<li class='filterButton' id=" + categoryName.value + " value='" + categoryName.value + "'><div class='menu'><div id='color' class='color'><A href='#' id='anchor-" + categoryName.value + "' name='" + categoryName.value + "'>&nbsp;</A> </div><div id='text'>" + categoryName.text + "</div><div class='close-button'><a href='#'><img src='images/close_buttom.jpg' width='20' height='20' border='0' /></a></div></div></li>");
}
function addFilterButtons(categories) {
    var tempThis = this;
    for (var i = 0; i < categories.length; i++) {
        getFilterButton(categories[i]).appendTo("#filter-list");
    }
    $(".color > a").click(function (e) {
        tempThis.currentListSelectedID = $(this).parent().parent().parent().attr("id");
        var colorDivLinkID = $(this).attr("name");
        var linkOffSet = $(this).offset();
        var colorboard = $("#colorboard").children();
        var leftOffSet = linkOffSet.left;
        var topOffSet = linkOffSet.top;
        console.log("Link offset: " + colorboard);
        $("#colorboard").css({
            "position": "absolute",
            "top": topOffSet + 8,
            "left": leftOffSet,
            "z-index": 100000
        });
        console.log(colorDivLinkID);
        $("#colorboard").attr("name", colorDivLinkID);
        $("#colorboard").fadeIn("fast");
    });
    $(".close-button").click(function () {
        $(this).parent().parent().remove();
        refreshSelectBox();
    });
}
function refreshSelectBox() {
    var filterButtonData = getFilterButtonTypeData();
    multiSelectUncheckAll();
    $("select").multiselect("widget").find(":checkbox").each(function () {
        if (filterButtonData.indexOf(this.value) != -1) {
            this.click();
        }
    });
    $("select").multiselect("refresh");
}
function getSelectedTypes() {
    return $("select").multiselect("getChecked").map(function () {
        return{
            value: this.value,
            text: this.title
        };
    }).get();
}
function getGalleries() {
    return[
        ['118 Winston ', 34.046991, -118.247305, 43],
        ['Art Walk Lounge ', 34.045082, -118.251681, 44],
        ['ART-E ', 34.051234, -118.245882, 45],
        ['Arty', 34.044646, -118.250612, 4],
        ['Black & White Gallery', 34.042760, -118.253591, 5],
        ['CB1 Gallery', 34.047694, -118.249919, 68],
        ['CHRONOS', 34.040664, -118.257045, 2],
        ['Dialect', 34.046268, -118.251410, 31],
        ['Drkrm/gallery', 34.0439, -118.252998, 11],
        ['El Nopal Press', 34.04685, -118.248738, 12],
        ['Fine Arts Building', 34.048866, -118.259029, 14],
        ['Gallery Metamorphosis', 34.048144, -118.246493, 15],
        ['Gallery Mujo', 34.045952, -118.250472, 16],
        ['Take My Picture', 34.042358, -118.255812, 17],
        ['Ground Floor Gallery', 34.048347, -118.249225, 17.5],
        ['Hatakeyama Gallery', 34.042791, -118.25735, 18],
        ['Hold Up Art Gallery ', 34.048834, -118.241044, 19],
        ['Jennifer Main Gallery', 34.044588, -118.250452, 20],
        ['LA ARTCORE ', 34.050988, -118.239927, 21],
        ['LELA Terakoya ', 34.050729, -118.238077, 22],
        ['Lexander gallery', 34.046217, -118.251477, 30],
        ['Los Angeles Center for Digital Art', 34.046544, -118.250612, 23],
        ['MB Abram Galleries ', 34.047207, -118.256186, 24],
        ['Miguel Osuna Art Studio', 34.048366, -118.248126, 68],
        ['MOCA Grand Avenue', 34.05344, -118.250662, 26],
        ['Morono Kiang Gallery ', 34.050591, -118.247619, 27],
        ['Norbertellen Gallery ', 34.046310, -118.251372, 32],
        ['Phil Stern Gallery ', 34.044596, -118.249031, 68],
        ['PYO Gallery LA ', 34.041684, -118.263076, 31],
        ['REDCAT Gallery ', 34.055148, -118.25071, 33],
        ['Robert Reynolds ', 34.04869, -118.248328, 32],
        ['Spring Arts Tower', 34.047733, -118.249409, 28],
        ['Takeuchi Galleries ', 34.042352, -118.256539, 34],
        ['Temple of Visions ', 34.044037, -118.252931, 35],
        ['Terrell Moore Gallery ', 34.040431, -118.264934, 36],
        ['The Annex  ', 34.042765, -118.256063, 37],
        ['The Cooper Gallery ', 34.040943, -118.253658, 38],
        ['The Garden Gallery ', 34.042514, -118.25635, 39],
        ['The Hive Gallery ', 34.043938, -118.253087, 40],
        ['The Latino Museum  ', 34.046907, -118.249851, 41],
        ['The local tourist spot', 34.0170736, -117.362752, 33],
        ['Downtown Art Center Gallery', 34.042117, -118.253911, 10]
    ];
}
function getGalleryRawData() {
    return[
        {
            galleryAddress: "118 Winston St. 2nd Floor",
            galleryName: "118 Winston Gallery",
            totalPieces: 10,
            media: {
                painting: 9,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 1,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 2,
                abstract: 8,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 8,
                serious: 1,
                investor: 0,
            }
        },
        {
            galleryAddress: "634 S. Spring St.",
            galleryName: "Art Walk Lounge",
            totalPieces: 5,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 5,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 5,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 5,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "216 S. Spring St.",
            galleryName: "ART-E Gallery",
            totalPieces: 9,
            media: {
                painting: 8,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 1,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 1,
                representational: 8
            },
            price: {
                beginner: 0,
                intermediate: 9,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "634 South Main Street",
            galleryName: "Arty Gallery",
            totalPieces: 6,
            media: {
                painting: 6,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 5,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 1
            },
            price: {
                beginner: 6,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "810 Spring St. Lower Level",
            galleryName: "Black & White Gallery",
            totalPieces: 17,
            media: {
                painting: 9,
                drawing: 8,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 8,
                abstract: 8,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 1
            },
            price: {
                beginner: 17,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "207 W. 5th Street",
            galleryName: "CB1 Gallery",
            totalPieces: 15,
            media: {
                painting: 6,
                drawing: 9,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 3,
                abstract: 6,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 6,
                representational: 0
            },
            price: {
                beginner: 6,
                intermediate: 9,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "177 W. Olympic Blvd",
            galleryName: "CHRONOS Gallery",
            totalPieces: 10,
            media: {
                painting: 10,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 1,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 4,
                representational: 5
            },
            price: {
                beginner: 0,
                intermediate: 10,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "215 W. 6th St. #111",
            galleryName: "Dialect Gallery",
            totalPieces: 11,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 11
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 11,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 10,
                serious: 1,
                investor: 0,
            }
        },
        {
            galleryAddress: "727 S. Spring Street",
            galleryName: "Drkrm gallery",
            totalPieces: 36,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 36,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 36,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 36,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "109 W. 5th St",
            galleryName: "El Nopal Press Gallery",
            totalPieces: 7,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 4,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 3,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 7
            },
            price: {
                beginner: 0,
                intermediate: 7,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "811 W. 7th St",
            galleryName: "Fine Arts Building",
            totalPieces: 21,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 21,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 9,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 12
            },
            price: {
                beginner: 0,
                intermediate: 14,
                serious: 5,
                investor: 2,
            }
        },
        {
            galleryAddress: "334s. Main Street",
            galleryName: "Gallery Metamorphosis",
            totalPieces: 31,
            media: {
                painting: 31,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 3,
                cartoonee: 4,
                symbolism: 3,
                surrealism: 21,
                representational: 0
            },
            price: {
                beginner: 31,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "548 S. Spring St",
            galleryName: "Gallery Mujo",
            totalPieces: 16,
            media: {
                painting: 16,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 16,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 14,
                serious: 2,
                investor: 0,
            }
        },
        {
            galleryAddress: "860 S. Broadway",
            galleryName: "Take My Picture",
            totalPieces: 30,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 30,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 30,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 30,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "433 S. Spring St",
            galleryName: "Ground Floor Gallery",
            totalPieces: 31,
            media: {
                painting: 24,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 6,
                sculpture: 1
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 16,
                abstract: 8,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 7
            },
            price: {
                beginner: 0,
                intermediate: 28,
                serious: 3,
                investor: 0,
            }
        },
        {
            galleryAddress: "905 S. Hill St",
            galleryName: "Hatakeyama Gallery",
            totalPieces: 20,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 20,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 8,
                abstract: 1,
                figurative: 5,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 6
            },
            price: {
                beginner: 0,
                intermediate: 20,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "358 E. 2nd St",
            galleryName: "Hold Up Art Gallery",
            totalPieces: 39,
            media: {
                painting: 29,
                drawing: 10,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 1,
                cartoonee: 30,
                symbolism: 8,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 39,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "620 S. Main Street #204",
            galleryName: "Jennifer Main Gallery",
            totalPieces: 35,
            media: {
                painting: 35,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 22,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 2,
                surrealism: 6,
                representational: 5
            },
            price: {
                beginner: 2,
                intermediate: 33,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "120 Judge John Aiso St.",
            galleryName: "LA ARTCORE Gallery",
            totalPieces: 26,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 2,
                mixedMedia: 0,
                sculpture: 24
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 26,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 21,
                serious: 5,
                investor: 0,
            }
        },
        {
            galleryAddress: "333 Alameda St.",
            galleryName: "LELA Terakoya",
            totalPieces: 23,
            media: {
                painting: 11,
                drawing: 5,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 1,
                mixedMedia: 4,
                sculpture: 2
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 3,
                abstract: 10,
                figurative: 0,
                cartoonee: 0,
                symbolism: 4,
                surrealism: 0,
                representational: 6
            },
            price: {
                beginner: 2,
                intermediate: 21,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "215 W. 6th St. #113",
            galleryName: "Lexander gallery",
            totalPieces: 35,
            media: {
                painting: 0,
                drawing: 35,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 9,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 9,
                symbolism: 17,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 35,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "102 W. 5th St",
            galleryName: "Los Angeles Center for Digital Art",
            totalPieces: 19,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 16,
                video: 0,
                installation: 3,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 19,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 3,
                intermediate: 16,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "525 West 7th St",
            galleryName: "MB Abram Galleries",
            totalPieces: 18,
            media: {
                painting: 0,
                drawing: 2,
                printmaking: 0,
                photography: 1,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 15
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 1,
                abstract: 0,
                figurative: 1,
                cartoonee: 2,
                symbolism: 10,
                surrealism: 0,
                representational: 4
            },
            price: {
                beginner: 5,
                intermediate: 13,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "410 S. Spring St",
            galleryName: "Miguel Osuna Art Studio",
            totalPieces: 25,
            media: {
                painting: 25,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 9,
                abstract: 15,
                figurative: 0,
                cartoonee: 0,
                symbolism: 1,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 10,
                intermediate: 13,
                serious: 2,
                investor: 0,
            }
        },
        {
            galleryAddress: "250 S. Grand Ave",
            galleryName: "MOCA Grand Avenue",
            totalPieces: 17,
            media: {
                painting: 1,
                drawing: 2,
                printmaking: 0,
                photography: 6,
                digitalMedia: 0,
                video: 0,
                installation: 8,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 15,
                abstract: 1,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 1
            },
            price: {
                beginner: 8,
                intermediate: 5,
                serious: 4,
                investor: 0,
            }
        },
        {
            galleryAddress: "218 3rd St",
            galleryName: "Morono Kiang Gallery",
            totalPieces: 26,
            media: {
                painting: 9,
                drawing: 11,
                printmaking: 1,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 5,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 5,
                figurative: 0,
                cartoonee: 11,
                symbolism: 10,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 16,
                intermediate: 10,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "215 W. 6th Street #110",
            galleryName: "Norbertellen Gallery",
            totalPieces: 10,
            media: {
                painting: 9,
                drawing: 1,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 1,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 3,
                representational: 6
            },
            price: {
                beginner: 0,
                intermediate: 9,
                serious: 1,
                investor: 0,
            }
        },
        {
            galleryAddress: "601 S. Los Angeles St.",
            galleryName: "Phil Stern Gallery",
            totalPieces: 40,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 40,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 40,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 40,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "1100 S. Hope St. #105",
            galleryName: "PYO Gallery LA",
            totalPieces: 55,
            media: {
                painting: 22,
                drawing: 18,
                printmaking: 0,
                photography: 12,
                digitalMedia: 0,
                video: 0,
                installation: 3,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 15,
                abstract: 10,
                figurative: 2,
                cartoonee: 0,
                symbolism: 5,
                surrealism: 10,
                representational: 13
            },
            price: {
                beginner: 30,
                intermediate: 25,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "631 W. 2nd St",
            galleryName: "REDCAT Gallery",
            totalPieces: 16,
            media: {
                painting: 5,
                drawing: 1,
                printmaking: 0,
                photography: 3,
                digitalMedia: 0,
                video: 6,
                installation: 1,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 10,
                abstract: 2,
                figurative: 1,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 3
            },
            price: {
                beginner: 1,
                intermediate: 12,
                serious: 3,
                investor: 0,
            }
        },
        {
            galleryAddress: "408 S. Spring St",
            galleryName: "Robert Reynolds",
            totalPieces: 11,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 3,
                mixedMedia: 7,
                sculpture: 1
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 11,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 0,
                intermediate: 7,
                serious: 1,
                investor: 2,
            }
        },
        {
            galleryAddress: "453 S Spring St",
            galleryName: "Spring Arts Tower",
            totalPieces: 41,
            media: {
                painting: 6,
                drawing: 6,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 4,
                installation: 0,
                mixedMedia: 3,
                sculpture: 22
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 6,
                intermediate: 32,
                serious: 3,
                investor: 0,
            }
        },
        {
            galleryAddress: "901 S. Broadway",
            galleryName: "Takeuchi Galleries",
            totalPieces: 13,
            media: {
                painting: 12,
                drawing: 1,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 7,
                postModern: 0,
                contemporary: 6,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 13,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "719 S. Spring St",
            galleryName: "Temple of Visions",
            totalPieces: 46,
            media: {
                painting: 46,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 10,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 12,
                surrealism: 9,
                representational: 15
            },
            price: {
                beginner: 36,
                intermediate: 10,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "1221 S. Hope St",
            galleryName: "Terrell Moore Gallery",
            totalPieces: 14,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 14,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 14,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 6,
                intermediate: 8,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "849 South Broadway",
            galleryName: "The Annex",
            totalPieces: 20,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 15,
                digitalMedia: 0,
                video: 2,
                installation: 0,
                mixedMedia: 3,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 20,
                abstract: 0,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 15,
                intermediate: 3,
                serious: 2,
                investor: 0,
            }
        },
        {
            galleryAddress: "860 Los Angeles St",
            galleryName: "The Cooper Gallery",
            totalPieces: 23,
            media: {
                painting: 23,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 23,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 8,
                intermediate: 15,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "215 W. 9th St",
            galleryName: "The Garden Gallery",
            totalPieces: 16,
            media: {
                painting: 16,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 1,
                abstract: 0,
                figurative: 15,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 4,
                intermediate: 12,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "729 S. Spring St",
            galleryName: "The Hive Gallery",
            totalPieces: 15,
            media: {
                painting: 13,
                drawing: 2,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 6,
                abstract: 1,
                figurative: 0,
                cartoonee: 8,
                symbolism: 0,
                surrealism: 0,
                representational: 0
            },
            price: {
                beginner: 2,
                intermediate: 13,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "514 S. Spring St",
            galleryName: "The Latino Museum",
            totalPieces: 17,
            media: {
                painting: 0,
                drawing: 17,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 0,
                figurative: 0,
                cartoonee: 4,
                symbolism: 0,
                surrealism: 0,
                representational: 13
            },
            price: {
                beginner: 17,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "450 Main St.",
            galleryName: "The Local Tourist Spot",
            totalPieces: 27,
            media: {
                painting: 0,
                drawing: 0,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 0,
                mixedMedia: 0,
                sculpture: 0
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 0,
                abstract: 21,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 6
            },
            price: {
                beginner: 27,
                intermediate: 0,
                serious: 0,
                investor: 0,
            }
        },
        {
            galleryAddress: "828 S. Main St., Los Angeles 90014",
            galleryName: "Downtown Art Center Gallery",
            totalPieces: 37,
            media: {
                painting: 4,
                drawing: 16,
                printmaking: 0,
                photography: 0,
                digitalMedia: 0,
                video: 0,
                installation: 7,
                mixedMedia: 5,
                sculpture: 5
            },
            style: {
                traditional: 0,
                modern: 0,
                postModern: 0,
                contemporary: 12,
                abstract: 24,
                figurative: 0,
                cartoonee: 0,
                symbolism: 0,
                surrealism: 0,
                representational: 1
            },
            price: {
                beginner: 16,
                intermediate: 14,
                serious: 7,
                investor: 0,
            }
        }
    ];
}
function getGalleryMarkerData(galleries, galleryArtTypeRawData) {
    var temp = [];
    for (var i = 0; i < galleries.length; i++) {
        temp[i] = {
            galleryName: galleries[i][0],
            latitude: galleries[i][1],
            longitude: galleries[i][2],
            zIndex: galleries[i][3],
            galleryAddress: galleryArtTypeRawData[i].galleryAddress,
            artTypeData: {
                totalPieces: galleryArtTypeRawData[i].totalPieces,
                media: {
                    painting: galleryArtTypeRawData[i].media.painting,
                    drawing: galleryArtTypeRawData[i].media.drawing,
                    printmaking: galleryArtTypeRawData[i].media.printmaking,
                    photography: galleryArtTypeRawData[i].media.photography,
                    digitalMedia: galleryArtTypeRawData[i].media.digitalMedia,
                    video: galleryArtTypeRawData[i].media.video,
                    installation: galleryArtTypeRawData[i].media.installation,
                    mixedMedia: galleryArtTypeRawData[i].media.mixedMedia,
                    sculpture: galleryArtTypeRawData[i].media.sculpture
                },
                style: {
                    traditional: galleryArtTypeRawData[i].style.traditional,
                    modern: galleryArtTypeRawData[i].style.modern,
                    postModern: galleryArtTypeRawData[i].style.postModern,
                    contemporary: galleryArtTypeRawData[i].style.contemporary,
                    abstract: galleryArtTypeRawData[i].style.abstract,
                    figurative: galleryArtTypeRawData[i].style.figurative,
                    cartoonee: galleryArtTypeRawData[i].style.cartoonee,
                    symbolism: galleryArtTypeRawData[i].style.symbolism,
                    surrealism: galleryArtTypeRawData[i].style.surrealism,
                    representational: galleryArtTypeRawData[i].style.representational
                },
                price: {
                    beginner: galleryArtTypeRawData[i].price.beginner,
                    intermediate: galleryArtTypeRawData[i].price.intermediate,
                    serious: galleryArtTypeRawData[i].price.serious,
                    investor: galleryArtTypeRawData[i].price.investor
                }
            }
        };
    }
    return temp;
}
function getArtTypeDataObjectArray(artTypeData) {
    temp = [];
    for (var i = 0; i < artTypeData.length; i++) {
        temp[i] = {
            value: artTypeData[i][0],
            color: artTypeData[i][1],
            artType: artTypeData[i][2]
        };
    }
    return temp;
}
function clearMarkers(markers) {
    if (markers) {
        if (infoBubble.isOpen()) {
            infoBubble.close();
        }
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
            if (markers[i].shadow) {
                markers[i].shadow.setMap(null);
            }
        }
        setMarkerVisibilityValue(markers, false);
        $("#toggle-" + markers[0].markerType + " a > img").prop("src", "./images/" + markers[0].markerType + "_on.png");
    }
}
function addMarkersToMap(markers, map) {
    if (markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            if (markers[i].shadow && map.mapTypeAppState == "pie") {
                markers[i].shadow.setMap(map);
            }
        }
        setMarkerVisibilityValue(markers, true);
        $("#toggle-" + markers[0].markerType + " a > img").prop("src", "./images/" + markers[0].markerType + "_off.png");
    }
}
function getResizedMarkerSize(baseMarkerSize, gallery) {
    return{
        width: baseMarkerSize.width + gallery.artTypeData.totalPieces,
        height: baseMarkerSize.height + gallery.artTypeData.totalPieces
    };
}
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
function getStartEndWayPoints(wayPoints) {
    if (wayPoints.length == 1) {
        return{
            start: wayPoints[0],
            end: wayPoints[0]
        };
    } else if (wayPoints.length > 1) {
        return{
            start: wayPoints[0],
            end: wayPoints[wayPoints.length - 1]
        };
    } else {
        return null;
    }
}
function generateMap() {
    var wayPoints = getRouteWayPoints(getControl2Galleries());
    var wayPointsStartEnd = getStartEndWayPoints(wayPoints);
    var request = {
        origin: wayPointsStartEnd["start"].location,
        destination: wayPointsStartEnd["end"].location,
        waypoints: wayPoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
function getRouteWayPoints(wayPointGalleries) {
    var wayPoints = [];
    for (var i = 0; i < wayPointGalleries.length; i++) {
        wayPoints.push({
            location: wayPointGalleries[i].getPosition(),
            stopover: true
        });
    }
    return wayPoints;
}
function getBarMarkers(barData) {
    var markerList = [];
    for (var i = 0; i < barData.length; i++) {
        markerList.push(new google.maps.Marker({
            position: new google.maps.LatLng(barData[i][3], barData[i][4]),
            clickable: true,
            title: barData[i][0],
            zIndex: barData[i][5],
            icon: "./images/bar.png",
            shape: {
                coord: [30, 15, 15],
                type: "circle"
            }
        }));
        markerList[i].markerType = "bar";
        markerList[i].barID = i;
        markerList[i].address = barData[i][1];
        markerList[i].phoneNumber = barData[i][2];
    }
    return markerList;
}
function getRestaurantMarkers(restaurantData) {
    var markerList = [];
    for (var i = 0; i < restaurantData.length; i++) {
        markerList.push(new google.maps.Marker({
            position: new google.maps.LatLng(restaurantData[i][3], restaurantData[i][4]),
            clickable: true,
            title: restaurantData[i][0],
            zIndex: restaurantData[i][5],
            icon: "./images/restaurant.png",
            shape: {
                coord: [30, 15, 15],
                type: "circle"
            }
        }));
        markerList[i].markerType = "restaurant";
        markerList[i].restaurantID = i;
        markerList[i].address = restaurantData[i][1];
        markerList[i].phoneNumber = restaurantData[i][2];
    }
    return markerList;
}
function initializeGalleryMarkers(markerData, markerOptions, baseMarkerSize, map) {
    var markerImageURL;
    var markers = [];
    var gallery;
    var shape;
    for (var i = 0; i < markerData.length; i++) {
        var resizedMarkerSize;
        gallery = markerData[i];
        resizedMarkerSize = getResizedMarkerSize(baseMarkerSize, gallery);
        shape = {
            coord: [resizedMarkerSize.width, resizedMarkerSize.height / 2, (resizedMarkerSize.width / 2) + 10],
            type: "circle"
        };
        markers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(gallery.latitude, gallery.longitude),
            clickable: true,
            title: gallery.galleryName,
            zIndex: gallery.zIndex,
            shape: shape
        });
        if (i == 0) {
            markers[i].shadow = new google.maps.Marker({
                position: new google.maps.LatLng(gallery.latitude, gallery.longitude),
                clickable: false,
                title: gallery.galleryName,
                zIndex: gallery.zIndex,
                shape: shape
            });
            markers[i].shadow.imageURL = "./images/markers/0_shadow.png";
            markers[i].shadow.setIcon(markers[i].shadow.imageURL);
            markers[i].shadow.setMap(map);
        }
        markers[i].galleryID = i;
        markers[i].blueMarkerURL = "./images/markers/" + markers[i].galleryID + "_b.png";
        markers[i].pinkMarkerURL = "./images/markers/" + markers[i].galleryID + "_p.png";
        markers[i].fadeOut = function () {
            this.fadeInURL = this.icon;
            var tempIcon = this.icon;
            var urlColorIndex;
            var urlItems = tempIcon.split("&");
            for (var i = 0; i < urlItems.length; i++) {
                if (urlItems[i].indexOf("chco") >= 0) {
                    urlColorIndex = i;
                    break;
                }
            }
            var splitColors = urlItems[urlColorIndex].split("|");
            var newColorSection = "";
            for (var i = 0; i < splitColors.length; i++) {
                if (i == splitColors.length - 1) {
                    newColorSection += splitColors[i] + "AA";
                } else {
                    newColorSection += splitColors[i] + "AA|";
                }
            }
            urlItems[urlColorIndex] = newColorSection;
            var newFadedIcon = "";
            for (var i = 0; i < urlItems.length; i++) {
                if (i == urlItems.length - 1) {
                    newFadedIcon += urlItems[i];
                } else {
                    newFadedIcon += urlItems[i] + "&";
                }
            }
            this.setIcon(newFadedIcon);
            this.fadeOutURL = newFadedIcon;
        }
        markers[i].fadeIn = function () {
            this.setIcon(this.fadeInURL);
        }
        google.maps.Marker.prototype.galleryData = null;
        markers[i].galleryData = gallery;
    }
    return markers;
}
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
function initializeMap(lat, lng, mapStyle, zoomLevel, mapDivID) {
    var mapInitialPosition = new google.maps.LatLng(lat, lng);
    var myLatLng = new google.maps.LatLng(lat, lng);
    var mapOptions = this.getMapOptions(zoomLevel, myLatLng, mapStyle);
    return new google.maps.Map(document.getElementById(mapDivID), mapOptions);
}
function getMapStyle() {
    return styleArray = [
        {
            featureType: 'all',
            stylers: [
                {
                    hue: "#8dbfd7"
                },
                {
                    saturation: -100
                },
                {
                    lightness: 55
                },
                {
                    gamma: 1
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    hue: '#8e8e8e'
                },
            ]
        },
        {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        }
    ];
}
function getMapOptions(zoomLevel, myLatLng, mapStyle) {

    return{
        zoom: zoomLevel,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        scaleControl: false,
        zoomControl: false,
        styles: mapStyle,
        mapTypeControl: false,
        streetViewControl: false
    };
}
$(document).ready(function () {
    $("a#single_image").fancybox();
});

google.maps.event.addDomListener(window, 'load', initialize);
