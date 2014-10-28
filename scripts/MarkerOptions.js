define(['GalleryMetaData', 'ChartColors'], function (galleryMetaData, chartColors) {

    return {
        category: galleryMetaData.categories.media.value,
        typeFilter: [
            {
                type: galleryMetaData.types.media.PAINTING.value,
                color: chartColors.COLOR1
            },
            {
                type: galleryMetaData.types.media.DRAWING.value,
                color: chartColors.COLOR2
            },
            {
                type: galleryMetaData.types.media.PRINTMAKING.value,
                color: chartColors.COLOR3
            },
            {
                type: galleryMetaData.types.media.PHOTOGRAPHY.value,
                color: chartColors.COLOR4
            },
            {
                type: galleryMetaData.types.media.DIGITALMEDIA.value,
                color: chartColors.COLOR5
            },
            {
                type: galleryMetaData.types.media.VIDEO.value,
                color: chartColors.COLOR6
            },
            {
                type: galleryMetaData.types.media.INSTALLATION.value,
                color: chartColors.COLOR7
            },
            {
                type: galleryMetaData.types.media.MIXEDMEDIA.value,
                color: chartColors.COLOR8
            },
            {
                type: galleryMetaData.types.media.SCULPTURE.value,
                color: chartColors.COLOR9
            }
        ]
    };

});