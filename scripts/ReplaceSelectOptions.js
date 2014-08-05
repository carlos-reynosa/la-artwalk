function replaceSelectOptions(category) {
    var categoryTypes = galleryMetaData.types[category];
    for (type in categoryTypes) {
        $('<option value="' + categoryTypes[type].value + '">' + categoryTypes[type].title + '</option>').appendTo("#filter-type-selector");
    }
}