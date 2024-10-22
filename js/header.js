var pop = document.getElementById("pop");
var menu = document.getElementById("menu");
var flag = true;
pop.onfocus = function(){
  menu.style.display = "flex";
}
menu.onmouseenter = function(){
  flag = false;
}
menu.onmouseup = function(){
  flag = true
}
menu.onmouseleave = function(){
  flag = true;
}
pop.onblur = function(){
  if(flag){
    menu.style.display = "none";
  }
}