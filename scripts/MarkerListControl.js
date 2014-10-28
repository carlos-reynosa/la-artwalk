define(['domReady!', 'jquery', 'MarkerInfoBubble', 'AppMap', 'GetMarkerByID'],
    function (document, $, infoBubble, map, getMarkerByID) {

        var markerListControl = document.getElementById('control2Container');
        markerListControl.index = 2;

        /**
         * Adds the marker to the gallery list UI on the top right corner.
         * The marker is added within the specified category within the list.
         * @param marker
         * @param category
         */
        markerListControl.addMarker = function (marker, category) {
            if (!this.isGalleryInController2List(marker)) {
                $("#control2-" + category + "-listitems").prepend(markerListControl._getListItemObject(marker));
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
                    var tempMarker = getMarkerByID($(this).parent().parent().attr("id"), type);
                    tempMarker.isSelected = false;
                    if (tempMarker.galleryID >= 0) {
                        if (map.mapTypeAppState == "pie") {
                            tempMarker.fadeIn();
                        } else if (map.mapTypeAppState == "colors") {
                            tempMarker.switchMarkerColor("pink");
                        }
                    }
                    else {
                        tempMarker.switchMarkerColor("dark-blue");
                    }
                    markerListControl._removeListItem($(this).parent().parent().attr("id"), marker.markerType);
                });
                $("#control2-gallery-listitems li").hover(function () {
                    $(this).css("cursor", "move");
                });
            }
        };

        /**
         *  Returns true if the provided marker is within the list of galleries in
         *  the top right UI, otherwise it returns false.
         * @param marker
         * @returns {boolean}
         */
        markerListControl.isGalleryInController2List = function (marker) {
            if (marker.galleryID >= 0) {
                if ($("#control2-gallery-listitems  #" + marker.galleryID).length > 0) {
                    return true;
                } else {
                    return false;
                }
            }
            else if (marker.barID >= 0 || marker.restaurantID >= 0) {
                if ($("#control2-" + marker.markerType + "-listwrapper  #" + (marker.barID >= 0 ? "bar-" + marker.barID : "restaurant-" + marker.restaurantID)).length > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        /**
         * Removes the gallery within the list UI with the given ID and category.
         * @param ID
         * @param category
         * @private
         */
        markerListControl._removeListItem = function (ID, category) {
            $("#control2-" + category + "-listitems li").each(function (index, element) {
                if (ID == element.getAttribute("id")) {
                    $(element).remove();
                }
            });
        };

        markerListControl.isOpen = true;

        markerListControl._getListItemObject = function (marker) {
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
        };


        return markerListControl;

    });