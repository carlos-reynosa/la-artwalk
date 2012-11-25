define([
  'text!template/infoBubble.txt',
  'text!template/myMap.txt'
],function(infoBubbleTpl, myMapTpl){

  var MAP = {
    map: null,
    infoBubble : new InfoBubble({
      backgroundColor: 'rgb(0,179,192)',
      maxWidth: 135
    }),
    mapDeffered: $.Deferred(),
    myMap:{},
    create: function(){
        var me = this;

        var styleArray = [
          {
            featureType: 'all',
            stylers: [
                        //{ hue: "#d0d4d6" },
                        { saturation: -100 },
                        { lightness: 65 },
                        { gamma: 1 }
            ]
          },{
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              { hue: '#8e8e8e' },

            ]
          },{
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
              { visibility: 'off' }
            ]
          }
        ];
        var myOptions = {
          zoom: 16,
          center: new google.maps.LatLng(34.04747, -118.250612),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
                  styles: styleArray,
				  panControl: false,
         scaleControl: false,
         zoomControl: false,
         mapTypeControl: false,
         streetViewControl: false

        };
        var initialize = function(){
          me.map = new google.maps.Map(document.getElementById('map_canvas'),
            myOptions);
          me.mapDeffered.resolve();


        };
        //google.maps.event.addDomListener(window, 'load', initialize);
        initialize();
        var infoBubble = this.infoBubble;
        var myMap = this.myMap;
        $('#map_canvas').on('click', 'a.addMymap', function(event){
          var markerData = infoBubble.currentMarker._markerData;
          if(typeof myMap[markerData.type] === 'undefined'){
            myMap[markerData.type] = [];
          }
          myMap[markerData.type].push(markerData);

          me.refreshMyMap();
          event.preventDefault();
          return false;
        });
        $('#slide_container').on('click', '.close_btnbox a', function(event){
          var $section = $(this).closest('section');
          var mType = $section.data('mtype');
          var mIdx = $section.find('.text_container').index($(this).closest('.text_container'));
          var mkr = myMap[mType][mIdx];
          if ((myMap[mType] != null) && (myMap[mType][mIdx] != null)) {
            myMap[mType].splice(mIdx, 1);
            me.refreshMyMap();
          }
        });

    },
    refreshMyMap: function(){
      var myMap = this.myMap;
      var output = Mustache.render(myMapTpl, myMap);
      $('.myMapList').html(output);
    },
    getInfoBubbleContent: function(title, content){
      var output = Mustache.render(infoBubbleTpl, {title:title, content:content});
      return output;
    },
    _getMarkerAsset: function(){
        var randNumBase, _i, _results;
        randNumBase = (function() {
          _results = [];
          for (_i = 5; _i <= 55; _i++){ _results.push(_i); }
          return _results;
        }).apply(this, arguments);

        var randNum = randNumBase[Math.floor(Math.random(0, randNumBase.length)*randNumBase.length)];

    },

    getMarkerImage: function(number, marker_size){
      //var markerSrc = imageRoot + '88x88_p.png';
      var markerSrc = (function(number, marker_size){
        var imageRoot = 'images/markers/';

        return imageRoot + marker_size + '_p.png';
      })(number, marker_size);


      var size = {
        x:+marker_size.split('x')[0],
        y:+marker_size.split('x')[1]
      };
      var anchor = {
        x: size.x/2,
        y: size.y/2
      }
      var image = new google.maps.MarkerImage(markerSrc,
          // This marker is 20 pixels wide by 32 pixels tall.
          new google.maps.Size(size.x, size.y),
          // The origin for this image is 0,0.
          new google.maps.Point(0,0),
          // The anchor for this image is the base of the flagpole at 0,32.
          new google.maps.Point(size.x, size.y)
      );
      return markerSrc;
    },
    setMarkers: function(locations, opts){
      var me = this;
      var args = arguments;
      me.mapDeffered.done(function(){
        me._setMarkers.apply(me, args);
      })
    },
    _setMarkers: function(locations, opts){
      var me = this;
      var map = me.map;
      var type = opts.type;
      var markerImg = opts.markerImg;
      var shadowImg = opts.shadowImg;
      var size = opts.size;
      var anchor = {
        x: size.x/2,
        y: size.y/2
      }
      // Add markers to the map

      // Marker sizes are expressed as a Size of X,Y
      // where the origin of the image (0,0) is located
      // in the top left of the image.

      // Origins, anchor positions and coordinates of the marker
      // increase in the X direction to the right and in
      // the Y direction down.
      /*
      var shadow = new google.maps.MarkerImage(shadowImg,
          // The shadow image is larger in the horizontal dimension
          // while the position and offset are the same as for the main image.
          new google.maps.Size(30, 30),
          new google.maps.Point(0,0),
          new google.maps.Point(15, 15)
      );
      */
          // Shapes define the clickable region of the icon.
          // The type defines an HTML <area> element 'poly' which
          // traces out a polygon as a series of X,Y points. The final
          // coordinate closes the poly by connecting to the first
          // coordinate.
      var shape = {
          coord: [1, 1, 1, 20, 18, 20, 18 , 1],
          type: 'poly'
      };
      for (var i = 0; i < locations.length; i++) {
        var loc = locations[i];
        var image = null;
        if(type === 'gallery'){

          image = this.getMarkerImage(loc[4], loc[5]);
        }else{
          image = new google.maps.MarkerImage(markerImg,
              // This marker is 20 pixels wide by 32 pixels tall.
              new google.maps.Size(size.x, size.y),
              // The origin for this image is 0,0.
              new google.maps.Point(0,0),
              // The anchor for this image is the base of the flagpole at 0,32.
              new google.maps.Point(anchor.x, anchor.y)
          );
        }
        var myLatLng = new google.maps.LatLng(loc[1], loc[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
          //  shadow: shadow,
          icon: image,
          //shape: shape,
          title: loc[0],
          zIndex: loc[3]
        });

        var infoBubble = this.infoBubble;

        google.maps.event.addListener(marker, 'click', (function(_marker, type, title, content) {

          return function(){
            if(infoBubble.currentMarker){
              infoBubble.currentMarker.setIcon( infoBubble.currentMarker.icon.replace('_b', '_p'));
            }
            infoBubble.currentMarker = this;

            this.setIcon( this.icon.replace('_p', '_b'));



            this._markerData = {
              type: type,
              title:title,
              content: content
            };
            //if (!infoBubble.isOpen()) {
              var contentHTML = me.getInfoBubbleContent(title, content);

              infoBubble.setContent(contentHTML);
              infoBubble.open(map, _marker);
            //}
          }
        })(marker, type, loc[6], loc[7]));
      }

    }

  };
  return MAP
})
