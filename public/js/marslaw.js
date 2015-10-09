(function(w) {
  //Staggered scroll
  // http://codepen.io/mattsince87/pen/exByn
  // $('a.scroll').click(function(e) {
  //   var hr = $(this).attr('href');
  //   e.preventDefault();
  //   //Animate
  //   $('body').animate(
  //     {scrollTop: $($(this).attr('href')).offset().top - 0},
  //     300,
  //     "swing",
  //     function(){window.location.hash = hr }
  //   );
  // });

  // Detect move from top
  w.onscroll = function() {
    if(w.scrollY > 50) {
      $("#my-navbar").attr("class", "affixed");
    } else {
      $("#my-navbar").attr("class", "not-affixed");
    }
  };

  $(".expandable-container").click(function(){
    console.log($(this).hasClass("small"));
    if($(this).hasClass("small")){
      $(this).attr("class", "expandable-container large");
    } else {
      $(this).attr("class", "expandable-container small");
    }
  });
})(window);
