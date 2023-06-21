let navbarvisible = false;

function toggleNavBar() {
    if (navbarvisible) {
        document.querySelector(".site-nav").classList.remove("main-menu-visible");
    }
    else {
        document.querySelector(".site-nav").classList.add("main-menu-visible");
    }
    navbarvisible = !navbarvisible;

}