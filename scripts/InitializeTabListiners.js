/**
 * Initializes tab listeners for UI elements that allow
 * the user to select art filters.
 */
require(['jquery',
        'domReady!',
        'ClearMarkers',
        'BarMarkers',
        'RestaurantMarkers',
        'GalleryMarkers',
        'AppMap',
        'SwitchMarkerType',
        'AddMarkersToMap',
        'GalleryMetaData',
        'MarkerInfoBubble',
        'ChartColors',
        'ClearCurrentFilterButton',
        'ReplaceSelectOptions',
        'CurrentCategory',
        'MarkerListControl',
        'CurrentSelectedFilter'],
    function ($,
              document,
              clearMarkers,
              barMarkers,
              restaurantMarkers,
              galleryMarkers,
              map,
              switchMarkerType,
              addMarkersToMap,
              galleryMetaData,
              infoBubble,
              chartColors,
              clearCurrentFilterButtons,
              replaceSelectOptions,
              currentCategory,
              markerListControl,
              currentSelectedFilter) {


        /**
         * When the controller slider is selected toggle the
         * gallery markers form pie chart to pink and blue icons.
         *
         */
        $("#control1Slider").click(function () {

            clearMarkers(barMarkers);
            clearMarkers(restaurantMarkers);
            clearMarkers(galleryMarkers);

            $("#tabs_container,#tabs_content_container").each(function () {
                $(this).animate({
                    width: 'toggle'
                }, "0");
            });

            //If the slider is closed when clicked, open it
            if ($("#control1Slider").css("marginLeft") == "0px") {
                map.mapTypeAppState = "pie";
                $("#control1Slider").css("marginLeft", "245px");
                $("#control1Slider").css("backgroundImage", "url(./images/slide_btn.jpg)");
            }
            else { //Revert to display the pink and blue gallery markers.

                map.mapTypeAppState = "colors"
                switchMarkerType("pink");
                addMarkersToMap(barMarkers, map);
                addMarkersToMap(restaurantMarkers, map);

                for (var i = 0; i < galleryMarkers.length; i++) {
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
        switchMarkerType("pink");
        addMarkersToMap(barMarkers, map);
        addMarkersToMap(restaurantMarkers, map);

        $("button2").click(function () {
            if (markerListControl.isOpen == true) {
                markerListControl.isOpen = false;
            } else if (tempThis.markerListControl.isOpen == false) {
                markerListControl.isOpen = true;
            }
            $('#slide_container').slideToggle("");
        });

        //Default art category to be displayed within the filter controller
        currentCategory.setCategory(galleryMetaData.categories.media);

        //What the tabs within the UI should do when clicked
        $("#tabs li").click(function () {

            //Reset the marker view by removing any bubbles and markers currently being displayed
            infoBubble.close();
            clearMarkers(galleryMarkers);

            $("#tabs li").removeClass('active');
            $(this).addClass("active");
            $(".tab_content").hide();

            var selected_tab = $(this).find("a").attr("href");

            //When switching tabs clear any filter currently being viewed
            clearCurrentFilterButtons();

            $("#filter-type-selector").children().each(function (index, element) {
                $(this).remove();
            });

            //Depending on the tab selected, replace the tab with the correct content
            if (selected_tab == "#tab1") {
                replaceSelectOptions(galleryMetaData.categories.media.value);
                currentCategory.setCategory(galleryMetaData.categories.media);
            } else if (selected_tab == "#tab2") {
                replaceSelectOptions(galleryMetaData.categories.style.value);
                currentCategory.setCategory(galleryMetaData.categories.style);
            } else if (selected_tab == "#tab3") {
                replaceSelectOptions(galleryMetaData.categories.price.value);
                currentCategory.setCategory(galleryMetaData.categories.price);
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
            var currentListColor = $("#" + currentSelectedFilter.getFilterID() + " div:first-child").children()[0];

            //Add the color to the button that represents the filter within the UI
            currentListColor.style.backgroundColor = "#" + chartColors[selectedColor];
            currentListColor.setAttribute("value", selectedColor);

            $("#colorboard").fadeOut(0);
        });

    });


