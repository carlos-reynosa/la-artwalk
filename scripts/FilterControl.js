/**
 * Returns a reference to the object containing the controls for applying marker filters
 * and generating pie charts for each marker.
 */
define(['domReady!'], function (document) {

    var filterControl = document.getElementById('tabs_wrapper');
    filterControl.index = 1;

    return filterControl;

});