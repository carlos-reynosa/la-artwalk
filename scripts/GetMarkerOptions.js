define(['ChartColors', 'CurrentCategory'], function (chartColors, currentCategory) {

    return function (colorArray, typeArray) {
        var markerOptions = {
            category: '',
            typeFilter: []
        };
        if (colorArray.length == typeArray.length) {
            markerOptions['category'] = currentCategory.getValue();
            for (var i = 0; i < colorArray.length; i++) {
                markerOptions.typeFilter.push({
                    type: typeArray[i],
                    color: chartColors[colorArray[i]]
                });
            }
        }
        return markerOptions;
    };
});


