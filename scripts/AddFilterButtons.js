define(['jquery', 'GetFilterButton', 'RefreshSelectBox', 'CurrentSelectedFilter'], function ($, getFilterButton, refreshSelectBox, currentSelectedFilter) {

    return function (categories) {
        for (var i = 0; i < categories.length; i++) {
            getFilterButton(categories[i]).appendTo('#filter-list');
        }
        $('.color > a').click(function (e) {
            currentSelectedFilter.setFilterID($(this).parent().parent().parent().attr('id'));
            var colorDivLinkID = $(this).attr('name');
            var linkOffSet = $(this).offset();
            var colorboard = $('#colorboard').children();
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

        $('.close-button').click(function () {
            $(this).parent().parent().remove();
            refreshSelectBox();
        });
    };
});

