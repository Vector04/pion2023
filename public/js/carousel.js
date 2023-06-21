var next = function (el) {
    if (el.next().length > 0) {
        return el.next();
    } else {
        return $(".carousel-seat").first();
    }
};

var progress = function (e) {
    var el = $(".is-ref").removeClass("is-ref");
    var new_seat = next(el);

    new_seat.addClass("is-ref").css("order", 1);
    for (var i = 2, ref = $(".carousel-seat").length; i <= ref; i++) {
        new_seat = next(new_seat).css("order", i);
    }

    var carousel = $(".carousel");
    carousel.removeClass("is-set");

    return setTimeout(function () {
        return carousel.addClass("is-set");
    }, 50);
};

window.setInterval(function () {
    progress();
}, 4000);
