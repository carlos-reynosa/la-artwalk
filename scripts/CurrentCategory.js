define(function () {

    var currentCategory = {
        value: null,
        title: null,
        setValue: function (newValue) {

            this.value = newValue;
        },
        getValue: function () {

            return this.value;
        },
        setTitle: function (newTitle) {

            this.title = newTitle;
        },
        getTitle: function () {

            return this.title;
        },
        setCategory: function (category) {

            this.setValue(category.value);
            this.setTitle(category.title);
        }
    };
    return currentCategory;
});