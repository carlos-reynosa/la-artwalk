define(['jquery', 'MultiSelectUncheckAll', 'GetFilterButtonTypeData', 'MultiSelect'],
    function ($, multiSelectUncheckAll, getFilterButtonTypeData) {

        return function () {
            var filterButtonData = getFilterButtonTypeData();

            multiSelectUncheckAll();

            $('select').multiselect('widget').find(':checkbox').each(function () {
                if (filterButtonData.indexOf(this.value) != -1) {
                    this.click();
                }
            });

            $('select').multiselect('refresh');
        };
    });

