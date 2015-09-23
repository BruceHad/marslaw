// http://codepen.io/mattsince87/pen/exByn

function scrollNav() {
  $('a.scroll').click(function(){
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
