function getMapStyle() {
    return styleArray = [
        {
            featureType: 'all',
            stylers: [
                {
                    hue: "#8dbfd7"
                },
                {
                    saturation: -100
                },
                {
                    lightness: 55
                },
                {
                    gamma: 1
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    hue: '#8e8e8e'
                },
            ]
        },
        {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        }
    ];
}