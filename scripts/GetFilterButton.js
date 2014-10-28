define(function () {

    return function (categoryName) {
        return $("<li class='filterButton' id=" + categoryName.value + " value='" + categoryName.value + "'><div class='menu'><div id='color' class='color'><A href='#' id='anchor-" + categoryName.value + "' name='" + categoryName.value + "'>&nbsp;</A> </div><div id='text'>" + categoryName.text + "</div><div class='close-button'><a href='#'><img src='images/close_buttom.jpg' width='20' height='20' border='0' /></a></div></div></li>");
    };
});

