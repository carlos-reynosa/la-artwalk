require.config({
    deps:['main'],
    baseUrl:'scripts/',
    paths:{

        'domReady':'/scripts/bower_components/domReady/domReady',
        'main':'/scripts/main',
        'jquery': '/scripts/bower_components/jquery/jquery',
        'InfoBubble':'/scripts/infobubble',
        'FancyBox':'/fancybox/jquery.fancybox-1.3.4',
        'MultiSelect':'/scripts/jquery.multiselect',
        'jquery-ui':'/scripts/bower_components/jquery-ui/jquery-ui'
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