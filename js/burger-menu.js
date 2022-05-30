const burger = document.querySelector(".header-nav__burger")
const headerNav = document.querySelector(".header_nav")
const headerNavLinks = document.querySelector(".header_nav-links")
const headerNavLinksA = document.querySelector(".header__top-navigation-links")
const body = document.querySelector("body")
burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    headerNav.classList.toggle("active");
    headerNavLinks.classList.toggle("active");
    headerNavLinksA.classList.toggle("active")
    body.classList.toggle("lock")
})