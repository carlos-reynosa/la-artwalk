/**
 * Initializes listeners for the controller that allows you to filter galleries by art characteristics.
 */
require(['jquery',
        'domReady!',
        'InitializeTabListiners',
        'MarkerInfoBubble',
        'UpdateMarkers',
        'GalleryMarkers',
        'AppMap',
        'AddMarkersToMap',
        'ClearMarkers',
        'ClearCurrentFilterButton',
        'GetFilterButtonTypeData',
        'GetFilterButtonColorData',
        'GetMarkerOptions',
        'GetSelectedTypes',
        'AddFilterButtons',
        'RefreshSelectBox',
        'MultiSelect'],
    function ($,
              document,
              initializeTabListiners,
              infoBubble,
              updateMarkers,
              galleryMarkers,
              map,
              addMarkersToMap,
              clearMarkers,
              clearCurrentFilterButtons,
              getFilterButtonTypeData,
              getFilterButtonColorData,
              getMarkerOptions,
              getSelectedTypes,
              addFilterButtons,
              refreshSelectBox) {


        //initializeTabListiners();

        $("select").multiselect();

        //Grabs the filter information selected by the user and creates a pie chart for each gallery
        $("#finish-button").click(function (e) {
            infoBubble.close();
            var numberOfFilters = getFilterButtonTypeData().length;
            if (numberOfFilters > 0) {
                var markerOptions = getMarkerOptions(getFilterButtonColorData(), getFilterButtonTypeData());
                updateMarkers(markerOptions);
                for (var i = 0; i < galleryMarkers.length; i++) {
                    if (galleryMarkers[i].isSelected) {
                        galleryMarkers[i].fadeOut();
                    }
                }
                addMarkersToMap(galleryMarkers, map);
            } else {
                clearMarkers(galleryMarkers);
            }
        });

        //Clears out all filters and removes all markers from the map
        $("#revert-button").click(function () {

            $("select").multiselect("uncheckAll");
            $("#colorboard").fadeOut(0);

            clearCurrentFilterButtons();

            infoBubble.close();

            clearMarkers(galleryMarkers);
        });

        //Defines what the the multi select box filter selection should do when opened and closed
        $("select").multiselect({
            close: function (event, ui) {
                clearCurrentFilterButtons();
                window.currentCategoriesSelected = getSelectedTypes();
                addFilterButtons(window.currentCategoriesSelected);
            },
            open: function (event, ui) {
                refreshSelectBox();
            }
        });

    });