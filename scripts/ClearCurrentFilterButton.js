/**
 * Removes any buttons that represent art characteristic filters within the UI.
 */
function clearCurrentFilterButtons() {
    $(".filterButton").fadeOut(150, function () {
        $(this).remove();
    });
}