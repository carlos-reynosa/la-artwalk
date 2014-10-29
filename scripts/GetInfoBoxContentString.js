define(['GetFilterButtonTitles', 'GetFilterButtonTypeData', 'AppMap', 'MarkerListControl', 'domReady!', 'CurrentCategory'],
    function (getFilterButtonTitles, getFilterButtonTypeData, map, markerListControl, document, currentCategory) {
        return function (marker) {
            var contentString = '';

            if (marker.markerType == "bar" || marker.markerType == "restaurant") {
                contentString += '<div id="infobubble"><div id="content"><h1>' + marker.title + '</h1>';
            }
            else {
                var galleryName = marker.galleryData.galleryName;
                var contentString = '<div id="infobubble"><div id="content"><h1>' + galleryName + '</h1>';
                var filterButtonTypes = getFilterButtonTypeData();

                var percent;
                var percentTotal = 0;

                var markerData = marker.galleryData.artTypeData[currentCategory.getValue()];
                var markerDataTotal = marker.galleryData.artTypeData.totalPieces;
                var filterButtonTitles = getFilterButtonTitles();
            }

            contentString += '<div id="infoBubbleDataBody">';

            if (marker.markerType == 'bar' || marker.markerType == 'restaurant') {
                contentString += marker.address + '<br>' + marker.phoneNumber + '</div><br/>';
            } else {
                if (map.mapTypeAppState == 'pie') {
                    for (var i = 0; i < filterButtonTypes.length; i++) {
                        percent = parseFloat((markerData[filterButtonTypes[i]] / markerDataTotal * 100).toFixed(2));
                        percentTotal += percent;
                        contentString += filterButtonTitles[i] + ' ' + Math.floor(percent) + '%<br/>';
                    }

                    if (percentTotal != 100) {
                        contentString += 'Other: ' + (100 - Math.floor(percentTotal) + '%<br/>');
                    }
                } else if (map.mapTypeAppState == "colors") {
                    contentString += '<br>' + marker.galleryData.galleryAddress;
                }
                contentString += '</div>';
                contentString += '<br/>';
            }

            if (!markerListControl.isGalleryInController2List(marker)) {
                contentString += '<a class="infobubble-button-link"  href="#"><img class="infobubble-button-add" src="images/btn_add.jpg" width="43" height="18" ></a>';
            } else {
                contentString += '<a  href="#"><img class="infobubble-button-add" style="opacity:.5" src="images/btn_add.jpg" width="43" height="18" onclick="addMarkerToMyMap()"></a>';
            }

            if (marker.markerType != 'bar' && marker.markerType != 'restaurant') {
                contentString += '<a class="profile-open-link" data-profile-id="' + marker.galleryID + '" href="#"><img src="images/btn_profile.jpg" width="43" height"18"></a>';
            }

            contentString += '</div></div>';

            return contentString;
        };
    });
