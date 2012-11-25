define(function(){
  $(document).ready(function(){
    $('#myMapBtn').click(function(){
      console.log('cl');
      if($('#slide_container').is(':hidden')){
        $('#slide_container').slideDown();
      }else{
        $('#slide_container').slideUp();
      }
    });
  });
  var UI = {

    showOverlay:function(){
      $('#overlay').fadeIn();
    },
    hideOverlay: function(){
      $('#overlay').fadeOut();
    }
  };

  return UI;
});
