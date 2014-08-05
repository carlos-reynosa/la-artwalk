
function getFilterButtonTitles() {
    var data = [];
    $("#filter-list #text").map(function () {
        data.push(this.innerHTML);
    });
    return data;
}