/**
 * Initializes the application map, UI controls, and listeners.
 */
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

    //Color selection for pie charts should be hidden by default
    $("#colorboard").fadeOut(0);

    var zoomLevel = 16;

    //Default position on the map where the application should start
    var lat = 34.044646;
    var lng = -118.250612;

    this.baseMarkerSize = {
        width: 45,
        height: 45
    };

    //options for the pop up that comes up when a marker is selected
    this.infoBubble = new InfoBubble({
        backgroundColor: 'rgb(0,179,192)',
        maxWidth: 152
    });

    //information displayed on the pop up for each marke that is selected
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


    //information displayed on the pop up for each marke that is selected
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

    //Colors available for creating the marker pie charts
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

    //Filters for the type of art that each gallery represented by a marker holds
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

    //Quantity stats about the art within galleries
    var galleryArtTypeRawData = getGalleryRawData();

    //Location and name of galleries
    var galleries = getGalleries();

    //Merge data into one object for use within the rest of the application
    this.galleryData = getGalleryMarkerData(galleries, galleryArtTypeRawData);

    //Used to interact with google maps.
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

    //Create a list of Google Maps gallery markers and add them to the map
    this.galleryMarkers = initializeGalleryMarkers(galleryData, this.markerOptions, baseMarkerSize, map);

    //Create a list of Google Maps bar marker objects and them to the map
    this.barMarkers = getBarMarkers(this.barData);
    this.addMarkersToMap(this.barMarkers, this.map);

    //Create a list of Google Maps restaurant marker objects and add them to the map
    this.restaurantMarkers = getRestaurantMarkers(this.restaurantData);
    this.addMarkersToMap(this.restaurantMarkers, this.map);

    this.controlDiv = document.getElementById("tabs_wrapper");
    this.control2Div = document.getElementById("control2Container");
    this.mapControlsDiv = document.getElementById("mapControlsWrapper");

    //Initialize gallery list maker
    initializeController2Functions(control2Div);

    //App UI options
    controlDiv.index = 1;
    control2Div.index = 2;
    mapControlsDiv.index = 4;

    //Register UI controls with google Maps
    this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(control2Div);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapControlsDiv);
    this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv);

    initializeListiners();

    //Listeners for click and hover events on toggle and zoom icons
    initializeIconControls();

    var colorList = $(".colorBoardItem");

    //Initialize pop up windows for when markers are clicked
    initializeInfoWindow();

    this.directionsService = new google.maps.DirectionsService();

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);

    map.mapTypeAppState = "colors";

    $("button2").click();
}

$(document).ready(function () {
    $("a#single_image").fancybox();
});

google.maps.event.addDomListener(window, 'load', initialize);
