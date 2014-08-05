function getFilterButtonColorData() {
    var data = [];
    $(".menu #color").map(function (index, element) {
        data.push(this.getAttribute("value"));
    });
    return data;
}