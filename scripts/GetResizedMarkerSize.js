define(function () {
    return function (baseMarkerSize, gallery) {
        return {
            width: baseMarkerSize.width + gallery.artTypeData.totalPieces,
            height: baseMarkerSize.height + gallery.artTypeData.totalPieces
        };
    };
});
