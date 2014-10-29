/**
 * Builds and object that contains the final form of the data that describes each marker and its characteristics.
 */
define(['GalleryLocationData', 'GalleryData'],
    function (galleries, galleryArtTypeRawData) {
        var temp = [];
        for (var i = 0; i < galleries.length; i++) {
            temp[i] = {
                galleryName: galleries[i][0],
                latitude: galleries[i][1],
                longitude: galleries[i][2],
                zIndex: galleries[i][3],
                galleryAddress: galleryArtTypeRawData[i].galleryAddress,
                artTypeData: {
                    totalPieces: galleryArtTypeRawData[i].totalPieces,
                    media: {
                        painting: galleryArtTypeRawData[i].media.painting,
                        drawing: galleryArtTypeRawData[i].media.drawing,
                        printmaking: galleryArtTypeRawData[i].media.printmaking,
                        photography: galleryArtTypeRawData[i].media.photography,
                        digitalMedia: galleryArtTypeRawData[i].media.digitalMedia,
                        video: galleryArtTypeRawData[i].media.video,
                        installation: galleryArtTypeRawData[i].media.installation,
                        mixedMedia: galleryArtTypeRawData[i].media.mixedMedia,
                        sculpture: galleryArtTypeRawData[i].media.sculpture
                    },
                    style: {
                        traditional: galleryArtTypeRawData[i].style.traditional,
                        modern: galleryArtTypeRawData[i].style.modern,
                        postModern: galleryArtTypeRawData[i].style.postModern,
                        contemporary: galleryArtTypeRawData[i].style.contemporary,
                        abstract: galleryArtTypeRawData[i].style.abstract,
                        figurative: galleryArtTypeRawData[i].style.figurative,
                        cartoonee: galleryArtTypeRawData[i].style.cartoonee,
                        symbolism: galleryArtTypeRawData[i].style.symbolism,
                        surrealism: galleryArtTypeRawData[i].style.surrealism,
                        representational: galleryArtTypeRawData[i].style.representational
                    },
                    price: {
                        beginner: galleryArtTypeRawData[i].price.beginner,
                        intermediate: galleryArtTypeRawData[i].price.intermediate,
                        serious: galleryArtTypeRawData[i].price.serious,
                        investor: galleryArtTypeRawData[i].price.investor
                    }
                }
            };
        }
        return temp;
    });