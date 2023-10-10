var iconMoon = document.querySelector("#dark__mode");
iconMoon.onclick = function () {
  var html = document.querySelector("html");
  html.classList.toggle("dark");
};
var buttonListE = document.querySelector(".list__navigation");
var navBlock = document.querySelector(".action__list--navigation-block");
var actionArrowE = document.querySelector(".action__arrow");
buttonListE.onclick = function () {
  navBlock.classList.toggle("transFormStart");
};
actionArrowE.onclick = function () {
  navBlock.classList.toggle("transFormStart");
};
var departmentsElement = document.querySelector(".action__img-departments");
var departmentsName = document.querySelector(".action__departments--group");
departmentsElement.onclick = function () {
  departmentsName.classList.toggle("elementHeight");
  departmentsElement.classList.toggle("rotate90deg");
};
// Electronic
var electronicAction = document.querySelector(".action__img-electronic");
var electronicElementAll = document.querySelector(".action__electronic--block");
electronicAction.onclick = function () {
  electronicAction.classList.toggle("rotate90deg");
  electronicElementAll.classList.toggle("elementHeight");
};
