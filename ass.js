window.onload = pageload;

function pageload(){
    var home1 = document.getElementById("Home");
    var project1 = document.getElementById("Project");
    var Assignment1 = document.getElementById("Assignment");

    var Ass4 = document.getElementById("Ass4");
    var Ass5 = document.getElementById("Ass5");
    var Ass6 = document.getElementById("Ass6");
    var Ass7 = document.getElementById("Ass7");

    home1.onclick = linkhome;
    project1.onclick = linkproject;
    Assignment1.onclick = linkassignment;
    
    Ass4.onclick = linkAss4;
    Ass5.onclick = linkAss5;
    Ass6.onclick = linkAss6;
    Ass7.onclick = linkAss7; 
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

function linkAss4(){
    location.href = "https://athiwatkmutt.github.io/Ass4/recipe.html";
}
function linkAss5(){
    location.href = "https://athiwatkmutt.github.io/Ass5/";
}
function linkAss6(){
    location.href = "https://athiwatkmutt.github.io/Ass6/register.html";
}
function linkAss7(){
    location.href = "https://athiwatkmutt.github.io/Ass7/";
}

