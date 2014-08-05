
function getFilterButtonTypeData() {
    var data = [];
    $("#filter-list > li").map(function () {
        data.push(this.getAttribute("value"));
    });
    return data;
}