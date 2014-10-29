define(function () {
    return function () {
        var data = [];
        $('.menu #color').map(function () {
            data.push(this.getAttribute('value'));
        });
        return data;
    };
});

