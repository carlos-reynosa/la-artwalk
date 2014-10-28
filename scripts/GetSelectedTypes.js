define(function () {

    return function () {
        return $("select").multiselect("getChecked").map(function () {
            return {
                value: this.value,
                text: this.title
            };
        }).get();
    };
});

