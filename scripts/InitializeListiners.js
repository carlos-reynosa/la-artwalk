/**
 * Initializes listeners for the controller that allows you to filter galleries by art characteristics.
 */
function initializeListiners() {
    var tempThis = this;

    initializeTabListiners();

    //Initialize the multi select filter box
    $(function () {
        $("select").multiselect();
    });

    //Grabs the filter information selected by the user and creates a pie chart for each gallery
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

    //Clears out all filters and removes all markers from the map
    $("#revert-button").click(function () {
        console.log("Revert Button Clicked ");

        $("select").multiselect("uncheckAll");
        $("#colorboard").fadeOut(0);

        clearCurrentFilterButtons();

        tempThis.infoBubble.close();

        clearMarkers(tempThis.galleryMarkers);
    });

    //Defines what the the multi select box filter selection should do when opened and closed
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