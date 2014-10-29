/**
 * Defines removes a filter from the set of filters within the left hand map control.
 */
define(['jquery'],function ($) {
    return function () {
        $('.filterButton').fadeOut(150, function () {
            $(this).remove();
        });
    };
});

