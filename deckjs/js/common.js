$(function() {
  //control the menu function
  $("#toggle_menu").toggle(function() {
      $.deck('showMenu');
      $(this).text('Hide Menu');
    }, 
    function() {
      $.deck('hideMenu');
      $(this).text('Show Menu');
    }
  );
  
  $("#toggle_goto").toggle(function() {
      $.deck('showGoTo');
      $(this).text('Hide Goto');
    }, 
    function() {
      $.deck('hideGoTo');
      $(this).text('Show Goto');
    }
  );
  
  $('#first_page').click(function() {
    $.deck('go', 0);
  });
  
  $('#last_page').click(function() {
    var lastIndex = $.deck('getSlides').length - 1;
    $.deck('go', lastIndex);
  });
  
  refineSize();
});

function refineSize() {
  var headerHeight = $('header').height();
  var bodyHeight = $('body').height();
  console.log('bodyHeight', bodyHeight);
  console.log('headerHeight', headerHeight);
  var a = bodyHeight - headerHeight;
  $('.deck-container').height(bodyHeight - headerHeight - 40);
}