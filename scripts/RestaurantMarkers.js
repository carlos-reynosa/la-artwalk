define(['RestaurantData', 'Google'], function (restaurantData, google) {
    var markerList = [];

    for (var i = 0; i < restaurantData.length; i++) {
        markerList.push(new google.maps.Marker({
            position: new google.maps.LatLng(restaurantData[i][3], restaurantData[i][4]),
            clickable: true,
            title: restaurantData[i][0],
            zIndex: restaurantData[i][5],
            icon: './images/restaurant.png',
            shape: {
                coord: [30, 15, 15],
                type: 'circle'
            }
        }));

        markerList[i].markerType = 'restaurant';
        markerList[i].restaurantID = i;
        markerList[i].address = restaurantData[i][1];
        markerList[i].phoneNumber = restaurantData[i][2];
    }
    return markerList;
});
