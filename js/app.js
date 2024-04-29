const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});


$(document).ready(function () {
    $('.hamburger-button').on('click', function () {
        $('.sticky-menu').addClass('active');
    });

    $('.close-button').on('click', function () {
        $('.sticky-menu').removeClass('active');
    });
});


$(document).ready(function () {
    $('.accordion-button').on('click', function () {
        var content = $(this).next('.accordion-content');

        $('.accordion-content').not(content).removeClass('active');
        $('.accordion-button').not(this).removeClass('active');

        $(this).toggleClass('active');
        content.toggleClass('active');
    });
});



$(document).ready(function () {
    $('.switch-button').on('click', function () {
        $('.switch-button, .switcher-tab').removeClass('active');

        $(this).addClass('active');

        var tabId = $(this).data('tab');

        $('.tab-' + tabId).addClass('active');
    });
});