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
//Grocery 
var groceryElement = document.querySelector(".action__img-grocery");
var groceryGroup = document.querySelector(".action__block--grocery--group") ;
groceryElement.onclick = function () {
  groceryElement.classList.toggle("rotate90deg");
  groceryGroup.classList.toggle("elementHeight");
};
// Beauty 
var beautyElement = document.querySelector(".action__img-beauty"); 
var beautyGroup = document.querySelector(".action__beauty--group") ;
beautyElement.onclick = function () {
  beautyElement.classList.toggle("rotate90deg");
  beautyGroup.classList.toggle("elementHeight");
}