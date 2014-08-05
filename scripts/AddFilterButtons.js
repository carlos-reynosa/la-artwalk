function addFilterButtons(categories) {
    var tempThis = this;
    for (var i = 0; i < categories.length; i++) {
        getFilterButton(categories[i]).appendTo("#filter-list");
    }
    $(".color > a").click(function (e) {
        tempThis.currentListSelectedID = $(this).parent().parent().parent().attr("id");
        var colorDivLinkID = $(this).attr("name");
        var linkOffSet = $(this).offset();
        var colorboard = $("#colorboard").children();
        var leftOffSet = linkOffSet.left;
        var topOffSet = linkOffSet.top;
        console.log("Link offset: " + colorboard);
        $("#colorboard").css({
            "position": "absolute",
            "top": topOffSet + 8,
            "left": leftOffSet,
            "z-index": 100000
        });
        console.log(colorDivLinkID);
        $("#colorboard").attr("name", colorDivLinkID);
        $("#colorboard").fadeIn("fast");
    });
    $(".close-button").click(function () {
        $(this).parent().parent().remove();
        refreshSelectBox();
    });
}