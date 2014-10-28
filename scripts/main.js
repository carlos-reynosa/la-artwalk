/**
 * Initializes the application map, UI controls, and listeners.
 */

require(['domReady!',
        'GalleryMarkerData',
        'MarkerVisibility',
        'MarkerProfileHeightList',
        'BarMarkers',
        'RestaurantMarkers',
        'MapStyle',
        'AppMap',
        'BaseMarkerSize',
        'MarkerOptions',
        'Google',
        'GalleryMarkers',
        'GalleryMetaData',
        'ChartColors',
        'AddMarkersToMap',
        'jquery',
        'FilterControl',
        'MarkerListControl',
        'MapControl',
        'InfoBubble',
        'FancyBox',
        'InitializeListiners',
        'InitializeIconControls',
        'InitializeInfoWindow'

    ],
    function (document,
              galleryMarkerData,
              markerVisibility,
              markerProfileHeightList,
              barMarkers,
              restaurantMarkers,
              mapStyle,
              map,
              baseMarkerSize,
              markerOptions,
              google,
              galleryMarkers,
              galleryMetaData,
              chartColors,
              addMarkersToMap,
              jQuery,
              filterControl,
              markerListControl,
              mapControl,
              appInfoBubble,
              initializeListiners,
              initializeIconControls,
              initializeInfoWindow) {

        var global = window;

        //Color selection for pie charts should be hidden by default
        jQuery('#colorboard').fadeOut(0);

        jQuery('a#single_image').fancybox();

        addMarkersToMap(barMarkers, map);

        addMarkersToMap(restaurantMarkers, map);


        //Initialize gallery list maker
        //global.initializeController2Functions(markerListControl);

        //App UI options

        //Register UI controls with google Maps
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(markerListControl);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapControl);
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(filterControl);

        map.mapTypeAppState = 'colors';

        jQuery('button2').click();

    });


