//nav_menu
const navBtn = document.getElementById("nav-btn");
const navToggle = function () {
    document.getElementById("nav-menu").classList.toggle("menu-open");
}
navBtn.addEventListener("click",navToggle);

//Remove mobile menu on click
const navLink = document.querySelectorAll(".list__items")

const linkAction = () =>{
    document.getElementById("nav-menu").classList.remove("menu-open");
}
navLink.forEach(n => n.addEventListener("click",linkAction));