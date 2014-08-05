function getArtTypeDataObjectArray(artTypeData) {
    temp = [];
    for (var i = 0; i < artTypeData.length; i++) {
        temp[i] = {
            value: artTypeData[i][0],
            color: artTypeData[i][1],
            artType: artTypeData[i][2]
        };
    }
    return temp;
}