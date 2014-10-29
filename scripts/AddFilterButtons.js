/**
 * Defines a function that adds marker filter representations into the left hand controller UI.
 */
define(['jquery', 'GetFilterButton', 'RefreshSelectBox', 'CurrentSelectedFilter'],
    function ($, getFilterButton, refreshSelectBox, currentSelectedFilter) {
        return function (categories) {
            //Get the button HTML representation for each filter and add it to the control
            for (var i = 0; i < categories.length; i++) {
                getFilterButton(categories[i]).appendTo('#filter-list');
            }

            //Handle when the color selection area within the filter button is selected
            $('.color > a').click(function () {
                currentSelectedFilter.setFilterID($(this).parent().parent().parent().attr('id'));

                var colorDivLinkID = $(this).attr('name');
                var linkOffSet = $(this).offset();
                var leftOffSet = linkOffSet.left;
                var topOffSet = linkOffSet.top;

                $('#colorboard').css({
                    'position': 'absolute',
                    'top': topOffSet + 8,
                    'left': leftOffSet,
                    'z-index': 100000
                });

                $('#colorboard').attr('name', colorDivLinkID);
                $('#colorboard').fadeIn('fast');
            });

            //Handle what happens when a filter is removed from the control
            $('.close-button').click(function () {
                $(this).parent().parent().remove();
                refreshSelectBox();
            });
        };
});

