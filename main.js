$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("nav").css({ "background": "#fff", "box-shadow": "0px 2px 8px 0px rgba(50, 50, 50, 0.08)" });
        }
        else {
            $("nav").css({ "background": "transparent", "box-shadow": "none" });
        }
    });
});

$('#burger').on('click', function () {
    $('.menu').slideToggle('300');
    $('.menu').css('display', 'flex');
});

$(window).resize(function () {
    if ($(window).outerWidth() <= 790) {
        $(".menu").css("display", "none")
    } else {
        $(".menu").css("display", "flex")
    }
});

$('.menu a').on('click', function () {
    $('.menu a').removeClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
    if ($('.menu').css('display') == 'flex') $('.menu').slideUp('slow');
});