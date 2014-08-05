/**
 * Initializes tab listeners for UI elements that allow
 * the user to select art filters.
 */
function initializeTabListiners() {
    var tempThis = this;

    $("#control2-gallery-listitems").sortable();

    /**
     * When the controller slider is selected toggle the
     * gallery markers form pie chart to pink and blue icons.
     *
     */
    $("#control1Slider").click(function () {

        tempThis.clearMarkers(tempThis.barMarkers);
        tempThis.clearMarkers(tempThis.restaurantMarkers);
        tempThis.clearMarkers(tempThis.galleryMarkers);

        $("#tabs_container,#tabs_content_container").each(function () {
            $(this).animate({
                width: 'toggle'
            }, "0");
        });

        //If the slider is closed when clicked, open it
        if ($("#control1Slider").css("marginLeft") == "0px") {
            tempThis.map.mapTypeAppState = "pie";
            $("#control1Slider").css("marginLeft", "245px");
            $("#control1Slider").css("backgroundImage", "url(./images/slide_btn.jpg)");
        }
        else { //Revert to display the pink and blue gallery markers.

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

    //The slider is closed by default
    $("#control1Slider").click();

    //The pink and blue markers are displayed by default
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

    //Default art category to be displayed within the filter controller
    currentCategory = galleryMetaData.categories.media;

    //What the tabs within the UI should do when clicked
    $("#tabs li").click(function () {

        //Reset the marker view by removing any bubbles and markers currently being displayed
        tempThis.infoBubble.close();
        tempThis.clearMarkers(tempThis.galleryMarkers);

        $("#tabs li").removeClass('active');
        $(this).addClass("active");
        $(".tab_content").hide();

        var selected_tab = $(this).find("a").attr("href");

        //When switching tabs clear any filter currently being viewed
        clearCurrentFilterButtons();

        $("#filter-type-selector").children().each(function (index, element) {
            $(this).remove();
        });

        console.log("Tabed clicked:slected_tab:" + selected_tab);

        //Depending on the tab selected, replace the tab with the correct content
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

    /**
     * Defines the click listener on the color board that is used to
     * choose colors for the pie chart that is generated for each marker.
     * The listener adds the color selected within the color board to the
     * buttons on the UI representing each filter.
     */
    $(".colorBoardItem").click(function (e) {

        //Get the color that was selected within the color board
        var selectedColor = this.getAttribute("value");
        var currentListColor = $("#" + tempThis.currentListSelectedID + " div:first-child").children()[0];

        //Add the color to the button that represents the filter within the UI
        currentListColor.style.backgroundColor = "#" + tempThis.chartColors[selectedColor];
        currentListColor.setAttribute("value", selectedColor);

        $("#colorboard").fadeOut(0);
    });
}