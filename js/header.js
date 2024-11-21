var pop = document.getElementById("pop");
var menu = document.getElementById("menu");
var tools = document.getElementById("tool");
var services = document.getElementById("service");
var projects = document.getElementById("project");
var flag = "Leaved";
pop.onfocus = function(){
  menu.style.display = "flex";
}
pop.onblur = function(){
  if(flag == "Leaved"){
    menu.style.display = "none";
  }else{
    pop.focus();
  }
}
menu.onmouseenter = function(){
  flag = "Entered";
}
menu.onmouseleave = function(){
  flag = "Leaved";
}
tools.onclick = function(){
  window.location.hash = "tools";
  menu.style.display = "none";   
  pop.blur();
}
projects.onclick = function(){
  window.location.hash = "projects";
  menu.style.display = "none";
  pop.blur();
}
services.onclick = function(){
  window.location.hash = "services";
  menu.style.display = "none";
  pop.blur();
}