/**
 * Removes any buttons that represent art characteristic filters within the UI.
 */

define(function(){

    return function () {
        $(".filterButton").fadeOut(150, function () {
            $(this).remove();
        });
    };
});

