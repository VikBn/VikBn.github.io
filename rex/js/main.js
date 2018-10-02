$(document).ready(function() {
  $(".scrollToTop").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1200
    );
    return false;
  });

  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $("#welcome").offset().top
      },
      1000
    );
  });
});

$(".welcome__round").on("click", function() {
  $(this.parentNode)
    .find(".welcome__layer")
    .toggleClass("welcome__layer-active");
  $(this)
    .find(".welcome__fa")
    .toggleClass("welcome__fa-active");
  console.log(this.parentNode);
});

$(".menu__round").on("click", function() {
  $(this.parentNode)
    .find(".menu__layer")
    .toggleClass("menu__layer-active");
  $(this)
    .find(".menu__fa")
    .toggleClass("menu__fa-active");
  console.log(this.parentNode);
});
