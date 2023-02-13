const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


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