/**
 * Removes any buttons that represent art characteristic filters within the UI.
 */
function clearCurrentFilterButtons() {
    debugger;
    $(".filterButton").fadeOut(150, function () {
        $(this).remove();
    });
}