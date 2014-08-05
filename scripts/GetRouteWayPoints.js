function getRouteWayPoints(wayPointGalleries) {
    var wayPoints = [];
    for (var i = 0; i < wayPointGalleries.length; i++) {
        wayPoints.push({
            location: wayPointGalleries[i].getPosition(),
            stopover: true
        });
    }
    return wayPoints;
}