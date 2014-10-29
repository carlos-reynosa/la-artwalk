define(['MarkerInfoBubble','AppMap','jquery','MarkerListControl'],function(infoBubble,map,$,markerListControl){
    return  function () {
        var marker = infoBubble.getCurrentMarker();
        if (marker.galleryID >= 0) {
            if (map.mapTypeAppState == 'pie') {
                if (!marker.isSelected) {
                    marker.fadeOut();
                }
            }
            else if (map.mapTypeAppState == 'colors') {
                if (!marker.isSelected) {
                    marker.switchMarkerColor('blue');
                }
            }
        }
        else if (marker.barID >= 0 || marker.restaurantID >= 0) {
            marker.switchMarkerColor('light-blue');
        }
        if (marker.galleryID >= 0) {
            markerListControl.addMarker(marker, 'gallery');
            marker.isSelected = true;
        }
        else if (marker.barID >= 0) {
            markerListControl.addMarker(marker, 'bar');
            marker.isSelected = true;
        }
        else if (marker.restaurantID >= 0) {
            markerListControl.addMarker(marker, 'restaurant');
            marker.isSelected = true;
        }
        $('.infobubble-button-add').fadeTo('slow', .5);
    };
});

