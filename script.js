var icon = document.getElementById("fab");
var bg = document.getElementById("top");
icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        bg.style.backgroundImage = "url('bg-2.jpg')";
    } else {
        bg.style.backgroundImage = "url('bg-1.jpg')";
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const message = function() {
    return document.getElementById("hello").innerHTML = "Welcome!!"
}

;(function () {
    setTimeout(message, 5000);
  })()