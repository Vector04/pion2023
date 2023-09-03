const next = (el) => el.next().length ? el.next() : $(".carousel-seat").first();

function progress (e) {
    let el = $(".is-ref").removeClass("is-ref");
    let new_seat = next(el);

    new_seat.addClass("is-ref").css("order", 1);
    const ref = $(".carousel-seat").length;
    for (var i = 2; i <= ref; i++) {
        new_seat = next(new_seat).css("order", i);
    }

    let carousel = $(".carousel");
    carousel.removeClass("is-set");

    return setTimeout(
        () => carousel.addClass("is-set"),
    50);
};

window.setInterval(progress, 3000);
window.addEventListener("DOMContentLoaded", progress)