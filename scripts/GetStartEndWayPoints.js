function getStartEndWayPoints(wayPoints) {
    if (wayPoints.length == 1) {
        return{
            start: wayPoints[0],
            end: wayPoints[0]
        };
    } else if (wayPoints.length > 1) {
        return{
            start: wayPoints[0],
            end: wayPoints[wayPoints.length - 1]
        };
    } else {
        return null;
    }
}