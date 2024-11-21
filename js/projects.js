// Class
class Project {
  constructor(name,image,description, link, olink) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.link = link;
    this.olink = olink;
  }
}
// Code
var project = document.getElementById("projects-holder");
var image = document.getElementById("image");
var video = document.getElementById("video");
var programming = document.getElementById("programming");

var programming_projects = {
  project1:new Project("Appo","imgs/projects/appo.png","I converted PSD file to website","https://johnkrider.github.io/Appo/","https://github.com/johnkrider/Appo"),
  project2:new Project("Portfolio","imgs/projects/portoflio.png","I made a website to introduce person","https://johnkrider.github.io/portfolio/","https://github.com/johnkrider/portfolio"),
  project3:new Project("Company","imgs/projects/company.png","I made a website to introduce company","https://johnkrider.github.io/company/","https://github.com/johnkrider/company"),
}
var Video_projects = {}
var Image_projects = {}

var content = ``;

function setProgramming(){
// Design
  programming.style.color = "white";
  programming.style.backgroundColor = "#00ccff";
  image.style.color = "black";
  image.style.backgroundColor = "white";
  video.style.color = "black";
  video.style.backgroundColor = "white";
// Code
  content = ``;
  Object.values(programming_projects).forEach(pro => {    
    content += `
      <div class="project">
        <h3>${pro.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img src="${pro.image}">
        </div>
        <p>${pro.description}</p>
        <div class="spiltter">
        <a href="${pro.olink}">Source Project</a>      
        <a href="${pro.link}">Show More</a>
        </div>
      </div>
    `;
  });
  project.innerHTML = content;
}

function setImage(){
// Design
  programming.style.color = "black";
  programming.style.backgroundColor = "white";
  image.style.color = "white";
  image.style.backgroundColor = "#00ccff";
  video.style.color = "black";
  video.style.backgroundColor = "white";
// Code
  content = ``;
  Object.values(Image_projects).forEach(pro => {    
    content += `
      <div class="project">
        <h3>${pro.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img src="${pro.image}">
        </div>
        <p>${pro.description}</p>
        <div class="spiltter">
        <a href="${pro.olink}">Source Project</a>      
        <a href="${pro.link}">Show More</a>
        </div>
      </div>
    `;
  });
  project.innerHTML = content;
}

function setVideo(){
// Design
  programming.style.color = "black";
  programming.style.backgroundColor = "white";
  image.style.color = "black";
  image.style.backgroundColor = "white";
  video.style.color = "white";
  video.style.backgroundColor = "#00ccff";
// Code
  content = ``;
  Object.values(Video_projects).forEach(pro => {    
    content += `
      <div class="project">
        <h3>${pro.name}</h3>
        <div class="blur-container img-holder">
          <div class="blur-protect"></div>
          <img src="${pro.image}">
        </div>
        <p>${pro.description}</p>
        <div class="spiltter">
        <a href="${pro.olink}">Source Project</a>      
        <a href="${pro.link}">Show More</a>
        </div>
      </div>
    `;
  });
  project.innerHTML = content;
}
programming.onclick = setProgramming;
video.onclick = setVideo;
image.onclick = setImage;

setProgramming();

