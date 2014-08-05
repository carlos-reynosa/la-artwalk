/**
 * Returns a list of Google Maps bar marker objects.
 * @param barData
 * @returns {Array}
 */
function getBarMarkers(barData) {
    var markerList = [];

    for (var i = 0; i < barData.length; i++) {
        markerList.push(new google.maps.Marker({
            position: new google.maps.LatLng(barData[i][3], barData[i][4]),
            clickable: true,
            title: barData[i][0],
            zIndex: barData[i][5],
            icon: "./images/bar.png",
            shape: {
                coord: [30, 15, 15],
                type: "circle"
            }
        }));

        markerList[i].markerType = "bar";
        markerList[i].barID = i;
        markerList[i].address = barData[i][1];
        markerList[i].phoneNumber = barData[i][2];
    }

    return markerList;
}