(function ($) {
    var plugindata = {
            iconWidth: 0,
            iconHeight: 0,
            basePath: $('script').last().attr('src').split('?')[0].split('/').slice(0, -1).join('/') + '/',
            themePath: ''
        };

    var settings = {
            maxrating: 5,
            selectmode: 'whole',
            theme: 'stars',
            fillcolor: '#ffff00',
            emptycolor: '#ccc',
            oninitialized: null,
            onratingset: null
        };

    var methods = {
        init: function (options) {
            $.extend(settings, options);
            plugindata.themePath = plugindata.basePath + 'theme/' + settings.theme.replace(' ', '_') + '/';
            $('head').append($('<link />').attr('href', plugindata.themePath + 'jqRater.css').attr('rel', 'stylesheet').attr('type', 'text/css'));
            $('<img />').load(function () {
                plugindata.iconWidth = this.width;
                plugindata.iconHeight = this.height;
                InitializeRaters();

                if (typeof settings.oninitialized == 'function')
                    settings.oninitialized.call(jQuery);
            }).attr('src', plugindata.themePath + 'icon.png');
        },
        register: function () {
            var maxRating = this.attr('data-maxrating') || settings.maxrating;
            var fillColor = this.attr('data-fillcolor') || settings.fillcolor;
            var emptyColor = this.attr('data-emptycolor') || settings.emptycolor;
            var initRating = this.attr('data-rating') || 0;
            this.attr('data-rating', nearestHalf(initRating * 1));

            this.empty().css({
                                'width': (plugindata.iconWidth * maxRating) + 'px',
                                'background-color': emptyColor
            });
            
            var filler = $('<div />').css({
                                            'height': plugindata.iconHeight + 'px',
                                            'background-color': fillColor,
                                            'width': (initRating * plugindata.iconWidth) + 'px',
                                            'overflow': 'hidden'
                                        });
            
            var icons = $('<div />').css({
                                            'height': plugindata.iconHeight + 'px',
                                            'margin-top': '-' + plugindata.iconHeight + 'px',
                                            'overflow': 'hidden',
                                            'background-image': 'url(' + plugindata.themePath + 'icon.png)',
                                            'background-repeat': 'repeat-x'
                                        });

            icons.mousemove(methods.preview);
            icons.click(methods.set);
            icons.mouseout(methods.reset);

            this.append(filler);
            this.append(icons);
        },
        set: function (e) {
            var rater = $(this).parent();

            var data = {
                rating: 0,
                previousrating: (rater.attr('data-rating') * 1)
            };

            var rating = nearestHalf((e.pageX - $(this).offset().left) / plugindata.iconWidth);
            rater.attr('data-rating', rating.toFixed(1));

            data.rating = rating;

            if (typeof settings.onratingset == 'function') {
                settings.onratingset.call(rater, data);
            }
        },
        preview: function (e) {
            var rating = nearestHalf((e.pageX - $(this).offset().left) / plugindata.iconWidth);
            $(this).prev().css({ 'width': Math.round(rating * plugindata.iconWidth) + 'px' });
        },
        reset: function (e) {
            var elm = $(this);
            var barwidth = elm.parent().attr('data-rating') * plugindata.iconWidth;
            elm.prev().css({ 'width': barwidth + 'px' });
        }
    };

    var InitializeRaters = function () {
        var raters = $('.jqRater');
        $.each(raters, function (idx, elm) {
            $(elm).jqRater('register');
        });
    }

    $.fn.jqRater = function (method) {

        if (methods[method])
            methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        return this;       
    };

    var nearestHalf = function (value) {
        if (settings.selectmode == 'whole') {
            return Math.round(value + 0.2);
        }

        var valToRound = value * 10;
        var result = (valToRound % 5) >= 2.5
            ? parseInt(valToRound / 5) * 5 + 5
            : parseInt(valToRound / 5) * 5;

        result /= 10;

        return result;
    }
})(jQuery);