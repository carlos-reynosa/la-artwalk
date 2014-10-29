/**
 * Stores the current filter the user is interacting with. This is a helper function for when a user is selecting colors within the colors board.
 */
define(function () {
    return {
        id: null,
        setFilterID: function (newId) {
            this.id = newId;
        },
        getFilterID: function () {
            return this.id;
        }
    };
});