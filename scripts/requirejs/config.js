require.config({
    deps:['./main'],
    baseUrl:'scripts/',
    paths:{

        'domReady':'bower_components/domReady/domReady',
        'main':'main',
        'jquery': 'bower_components/jquery/jquery',
        'InfoBubble':'infobubble',
        'FancyBox':'../fancybox/jquery.fancybox-1.3.4',
        'MultiSelect':'jquery.multiselect',
        'jquery-ui':'bower_components/jquery-ui/jquery-ui'
    },
    shim:{
        'jquery-ui':{
           deps:['jquery']
        },
        'InfoBubble':{
            deps:['jquery'],
            exports:'InfoBubble'
        },

        'FancyBox':{
           deps:['jquery']
        },
        'MultiSelect':{
           deps:['jquery','jquery-ui']
        }


    },
    callback:function(){
    }
});