(function(w) {
  //Staggered scroll
  http://codepen.io/mattsince87/pen/exByn
  $('a.scroll').click(function(e) {
    var hr = $(this).attr('href');
    e.preventDefault();
    //Animate
    $('body').animate(
      {scrollTop: $($(this).attr('href')).offset().top - 0},
      300,
      "swing",
      function(){window.location.hash = hr }
    );
  });

  // Detect move from top
  w.onscroll = function() {
    if(w.scrollY > 50) {
      console.log("You have moved!");
    } else {
      console.log("You are back at the top!");
    }
  };
})(window);
