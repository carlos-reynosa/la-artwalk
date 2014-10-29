define(['MapDefaultLocation', 'MapStyle', 'DefaultZoomLevel', 'MapDomID', 'Google'],
    function (mapDefaultLocation, mapStyle, zoomLevel, mapDivID, google) {
        var myLatLng = new google.maps.LatLng(mapDefaultLocation.lat, mapDefaultLocation.lng);
        var mapOptions = {
            zoom: zoomLevel,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            scaleControl: false,
            zoomControl: false,
            styles: mapStyle,
            mapTypeControl: false,
            streetViewControl: false
        };

        var map = new google.maps.Map(document.getElementById(mapDivID), mapOptions);

        //Needed as global for other third party libraries not loaded through requirejs
        window.map = map;
        return map;
    });