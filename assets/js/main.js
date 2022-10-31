$(document).ready(() => {
  // Navbar background color togglers
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 80);
  });
  $(".navbar-toggler").click(() => {
    $(".fixed-top").toggleClass("opened");
  });

  // NiceScroll plugin
  $("body").niceScroll({
    cursorcolor: "#424242",
    cursoropacitymin: 0.2,
    cursoropacitymax: 1, 
    cursorborder: "none"
  });

   // WOW Animation
  wow = new WOW(
    {
    boxClass:     'animate__animated',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
  });
  wow.init();
});