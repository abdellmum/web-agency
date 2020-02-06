$(function () {

    $(" .navbar-nav").on("click touch", function () {

        $(".navbar-toggler").click();

    });



});
$('.client-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

