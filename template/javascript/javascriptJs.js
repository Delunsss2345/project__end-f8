var iconMoon = document.querySelector("#dark__mode");
iconMoon.onclick = function () {
  var html = document.querySelector("html");
  html.classList.toggle("dark");
};
var buttonListE = document.querySelector(".list__navigation"); 
var navBlock = document.querySelector(".action__list--navigation-block")
var actionArrowE = document.querySelector(".action__arrow");
buttonListE.onclick = function () {
  navBlock.classList.toggle("transFormStart");
 
};
actionArrowE.onclick = function () {
  navBlock.classList.toggle("transFormStart");
}
