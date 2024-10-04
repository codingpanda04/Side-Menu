const textDiv = document.querySelectorAll(".text");
const textDiv1 = document.querySelectorAll(".text1");
const dashboard = document.getElementById("dashboard");
const settings = document.getElementById("settings");
const income = document.getElementById("income");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");
const menu = document.getElementById("menu");
const sideMenu = document.querySelector(".sidemenu");

function displayMenu(){
    sideMenu.style.width = "200px";
    dashboard.style.display = "block";
    income.style.display = "block";
    profile.style.display = "block";
    settings.style.display = "block";
    logout.style.display = "block";
    menu.setAttribute("src", "images/close.png");
    menu.setAttribute("onclick", "hideMenu()");
}

function hideMenu(){
    sideMenu.style.width = "100px";
    dashboard.style.display = "none";
    income.style.display = "none";
    profile.style.display = "none";
    settings.style.display = "none";
    logout.style.display = "none";
    menu.setAttribute("src", "images/menu.png");
    menu.setAttribute("onclick", "displayMenu()");
}