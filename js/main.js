$(window).load(function () {
    // Animate loader off screen

    $(".loader").fadeOut("slow", function () {
        $(this).parent().hide();
        $('body').css("overflow", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });

});
$(document).ready(function () {
    $('.search-ico').click(function () {
        $('.sec-bar-sec').stop().slideToggle(500);
        $('.search-ico').toggleClass("after-none");
    });
    $(".mega-menu-btn").hover(function () {
        $('.overlay').fadeIn(500);

    }, function () {
        $('.overlay').fadeOut(500);
    });
    $('.menu-ico').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".main-xs-nav").click(function (e) {
        e.stopPropagation();
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");

        $(".cat-nav-links-header").addClass("mo-accordion");
        $(".cat-links").addClass("mo-panel");
    }
    var acc = document.getElementsByClassName("mo-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("mo-active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});