function generateMap() {
    var wayPoints = getRouteWayPoints(getControl2Galleries());
    var wayPointsStartEnd = getStartEndWayPoints(wayPoints);
    var request = {
        origin: wayPointsStartEnd["start"].location,
        destination: wayPointsStartEnd["end"].location,
        waypoints: wayPoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}