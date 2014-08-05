
function getMarkerOptions(colorArray, typeArray) {
    console.log("In getMarkerOptions:");
    var markerOptions = {
        category: "",
        typeFilter: []
    };
    if (colorArray.length == typeArray.length) {
        markerOptions["category"] = this.currentCategory.value;
        for (var i = 0; i < colorArray.length; i++) {
            markerOptions.typeFilter.push({
                type: typeArray[i],
                color: this.chartColors[colorArray[i]]
            });
        }
    } else {
    }
    return markerOptions;
}