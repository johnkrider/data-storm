// Class
class Service {
  constructor(name,image, link, place) {
    this.name = name;
    this.image = image;
    this.link = link;
    this.place = place;
  }
}
// Code
var service = document.getElementById("services-holder");
var editor = document.getElementById("editor");
var montage = document.getElementById("montage");
var programmer = document.getElementById("programmer");
var writer = document.getElementById("writer");
var animated = document.getElementsByClassName("animated");

var programming_services = {
  service1:new Service("Make static website","imgs/projects/appo.png","https://johnkrider.github.io/Appo/","Khamast"),
}
var Video_services = {}
var Image_services = {}
var Transcription_services = {}

var content = ``;

function setProgramming(){
// Design
  programmer.style.color = "white";
  programmer.style.backgroundColor = "#00ccff";
  editor.style.color = "black";
  editor.style.backgroundColor = "white";
  montage.style.color = "black";
  montage.style.backgroundColor = "white";
  writer.style.color = "black";
  writer.style.backgroundColor = "white";
// Code
  content = ``;
  Object.values(programming_services).forEach(service => {    
    content += `
      <div class="service">
        <h3>${service.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img class="${service.state}" src="${service.image}">
        </div>
        <div class="spiltter">
        <p>${service.place} : </p>
        <a href="${service.link}">Show Me</a>
        </div>
      </div>
    `;
  });
  service.innerHTML = content;
}

function setImage(){
// Design
  programmer.style.color = "black";
  programmer.style.backgroundColor = "white";
  editor.style.color = "white";
  editor.style.backgroundColor = "#00ccff";
  montage.style.color = "black";
  montage.style.backgroundColor = "white";
  writer.style.color = "black";
  writer.style.backgroundColor = "white";
// Code
  content = ``;
  Object.values(Image_services).forEach(pro => {    
    content += `
      <div class="service">
        <h3>${service.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img class="${service.state}" src="${service.image.frame1}">
        </div>
        <div class="spiltter">
        <p>${service.place} : </p>
        <a href="${service.link}">Show Me</a>
        </div>
      </div>
    `;
  });
  service.innerHTML = content;
}

function setVideo(){
// Design
  programmer.style.color = "black";
  programmer.style.backgroundColor = "white";
  editor.style.color = "black";
  editor.style.backgroundColor = "white";
  montage.style.color = "white";
  montage.style.backgroundColor = "#00ccff";
  writer.style.color = "black";
  writer.style.backgroundColor = "white";
// Code
  content = ``;
  Object.values(Video_services).forEach(pro => {    
    content += `
      <div class="service">
        <h3>${service.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img class="${service.state}" src="${service.image.frame1}">
        </div>
        <div class="spiltter">
        <p>${service.place} : </p>
        <a href="${service.link}">Show Me</a>
        </div>
      </div>
    `;
  });
  service.innerHTML = content;
}
function setTranscription(){
  // Design
    programmer.style.color = "black";
    programmer.style.backgroundColor = "white";
    editor.style.color = "black";
    editor.style.backgroundColor = "white";
    montage.style.color = "black";
    montage.style.backgroundColor = "white";
    writer.style.color = "white";
    writer.style.backgroundColor = "#00ccff";
  // Code
    content = ``;
    Object.values(Transcription_services).forEach(pro => {    
      content += `
        <div class="service">
          <h3>${service.name}</h3>
          <div class="blur-container img-holder">
            <div class="blur-protect"></div>
            <img class="${service.state}" src="${service.image.frame1}">
          </div>
          <div class="spiltter">
          <p>${service.place} : </p>
          <a href="${service.link}">Show Me</a>
          </div>
        </div>
      `;
    });
    service.innerHTML = content;
  }
programmer.onclick = setProgramming;
montage.onclick = setVideo;
editor.onclick = setImage;
writer.onclick = setTranscription;
setProgramming();
