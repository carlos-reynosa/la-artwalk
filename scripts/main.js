/**
 * Initializes the application map, UI controls, and listeners.
 */

require(['domReady!',
        'BarMarkers',
        'RestaurantMarkers',
        'AppMap',
        'Google',
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
              barMarkers,
              restaurantMarkers,
              map,
              google,
              addMarkersToMap,
              $,
              filterControl,
              markerListControl,
              mapControl,
              appInfoBubble,
              initializeListiners,
              initializeIconControls,
              initializeInfoWindow) {

        //Color selection for pie charts should be hidden by default
        $('#colorboard').fadeOut(0);

        //Initialize profile pop up
        $('a#single_image').fancybox();

        addMarkersToMap(barMarkers, map);

        addMarkersToMap(restaurantMarkers, map);

        //Register UI controls with google Maps
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(markerListControl);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapControl);
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(filterControl);

        map.mapTypeAppState = 'colors';

        $('button2').click();

    });


