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
    const $stickyMenu = $('.sticky-menu');
    const $accordionContent = $('.accordion-content');
    const $accordionButton = $('.accordion-button');
    const $switchButton = $('.switch-button');
    const $switcherTab = $('.switcher-tab');

    $('.hamburger-button').on('click', function () {
        $stickyMenu.addClass('active').attr('aria-expanded', 'true').find('a').first().focus();
    });

    $('.close-button').on('click', function () {
        $stickyMenu.removeClass('active').attr('aria-expanded', 'false');
        $('.hamburger-button').focus();
    });

    $accordionButton.on('click', function () {
        let $content = $(this).next('.accordion-content');
        $accordionContent.not($content).slideUp().removeClass('active').prev().attr('aria-expanded', 'false');
        $content.slideToggle().toggleClass('active');
        $(this).toggleClass('active').attr('aria-expanded', $(this).hasClass('active'));
    });

    $switchButton.on('click', function () {
        let tabId = $(this).data('tab');
        $switchButton.removeClass('active');
        $switcherTab.removeClass('active');

        $(this).addClass('active');
        $('.tab-' + tabId).addClass('active');
    });
});