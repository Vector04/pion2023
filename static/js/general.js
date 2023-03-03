let navbarvisible = false;

function toggleNavBar() {
    console.log("togglenavbar");
    console.log(navbarvisible);
    console.log(document.querySelector(".main-menu"));
    if (navbarvisible) {
        document.querySelector(".main-menu").classList.remove("flex");
    }
    else {
        document.querySelector(".main-menu").classList.add("flex");
    }
    navbarvisible = !navbarvisible;

}