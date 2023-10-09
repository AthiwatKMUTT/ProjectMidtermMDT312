window.onload = pageload;

function pageload(){
    var home1 = document.getElementById("Home");
    var project1 = document.getElementById("Project");
    var Assignment1 = document.getElementById("Assignment");

    home1.onclick = linkhome;
    project1.onclick = linkproject;
    Assignment1.onclick = linkassignment;
   
}
function linkhome(){
    location.href = "index.html";
}
function linkproject(){
    location.href = "project.html";
}
function linkassignment(){
    location.href = "menu-assignment.html";
}



function show(){
    document.getElementById('sidebar').classList.toggle('active');
}

function openFacebookLink(){
    window.open("https://www.facebook.com/profile.php?id=100006465228951", "_blank");
}

function showImage() {
    var popup = document.getElementById("imagePopup");
    popup.style.display = "block";
  }
  
function closeImage() {
    var popup = document.getElementById("imagePopup");
    popup.style.display = "none";
}

