let navbarvisible = false;

function toggleNavBar() {
    if (navbarvisible) {
        document.querySelector(".main-menu").classList.remove("flex");
    }
    else {
        document.querySelector(".main-menu").classList.add("flex");
    }
    navbarvisible = !navbarvisible;

}