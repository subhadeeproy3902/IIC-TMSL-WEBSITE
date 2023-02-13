let scrollToTop = document.getElementById("up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}



$(window).on("load", function () {

  "use strict";

  setTimeout(function () {
      $(".preloader").fadeOut("fast");
  }, 2000);

});