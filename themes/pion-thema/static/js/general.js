// Navbar visiblity toggle
let navbarvisible = false;

function toggleNavBar() {
    if (navbarvisible) {
        document
            .querySelector(".site-nav")
            .classList.remove("main-menu-visible");
    } else {
        document.querySelector(".site-nav").classList.add("main-menu-visible");
        // fadeIn nav items after 100ms
        setTimeout(() => {sequentialFadeIn(document.querySelectorAll(".main-menu a"), 100)}, 100);
    }
    navbarvisible = !navbarvisible;
}

// Sequential fadeIn
addEventListener("load", () => {
    sequentialFadeIn(document.querySelectorAll(".sequential-fadein > *"));
});

function sequentialFadeIn(items, delay = 150) {
    let i = 0;
    Array.prototype.forEach.call(items, function (item) {
        setTimeout(function () {
            item.classList.add("visible");
        }, delay * i);
        i++;
    });
}
