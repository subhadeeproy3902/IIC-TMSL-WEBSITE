let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.marginTop = value*0.5 + 'px';
    bird1.style.top = value* -1.5 + 'px';
    bird1.style.left = value* 2 + 'px';
    bird2.style.top = value* -1.5 + 'px';
    bird2.style.left = value* -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value* -0.12 + 'px';
    forest.style.top = value* 0.25 + 'px';
    header.style.top = value*0.5 +'px';
})

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
  }, 3000);

});