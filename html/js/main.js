require([
  'module',
  'data/gallery.js',
  'data/restaurants.js',
  'data/bars.js',
  'scripts/map.js',
  'scripts/ui.js'
], function(module, galleries, restaurants, bars, Map, UI){


  var AppRouter = Backbone.Router.extend({
    initialize: function(){
    },
    routes: {
      "step1": "step1",
      "step2": ""
    },

    step1: function() {
      UI.showOverlay();
      var map = Map.create();
    },
   
  });
  var app_router= new AppRouter;
  Backbone.history.start();

  
  app_router.navigate('step1', true);

})
