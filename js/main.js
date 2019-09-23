window.onload = function () {
    // Animate loader off screen


    $(".loader").fadeOut(500, function () {
        $(this).parent().hide();
        $('body, html').css("overflow", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });

    function fix_slider_img_height() {
        var x = $(".main-slider").height()
        $("#map").height(x);
    }
    $('.main-slider').on("initialized.owl.carousel", fix_slider_img_height);
    $('.main-slider').on("resized.owl.carousel", fix_slider_img_height);
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });
}
$(document).ready(function () {
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });
    $('.megaxs-link').click(function () {
        $(this).children('.level2').toggleClass('enter1')
    });
    $('.back').click(function () {
        $('.level2').removeClass('enter1')
    });

    $('.seemore').click(function () {
        var x = $(this).attr('id');
        $("ul." + x).css("max-height", "none");
        $(this).hide();

    });
    $('.mega-menu-btn').click(function () {
        $(this).toggleClass('link-active')
        $(this).children('.megamenu-cont').toggleClass('megafade')
        $('.overlay').toggle();
    });
    $('.overlay').click(function () {
        $('.mega-menu-btn').removeClass('link-active')
        $('.megamenu-cont').removeClass('megafade')
        $('.overlay').toggle();
    });
    if ($(window).width() <= 767) {
        $('.search-ico').addClass("after-none");
    }
    $('.search-ico').click(function () {
        $('.sec-bar-sec').stop().slideToggle(500);
        $('.search-ico').toggleClass("after-none");
    });
    $('.add-report').click(function () {
        $('.report-form').stop().slideToggle(500);
        $('.add-report').toggleClass("report-open");
    });

    $('.menu-ico').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').toggleClass('overfolow')
        $('html').toggleClass('overfolow')
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').toggleClass('overfolow')
        $('html').toggleClass('overfolow')
        $('.level2').removeClass('enter1')
    });
    $(".main-xs-nav").click(function (e) {
        e.stopPropagation();
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').toggleClass('overfolow')
        $('html').toggleClass('overfolow')
    });

    $('.filters-btn').click(function () {
        $('.filters-cont').toggleClass('enter1')
        $(this).toggleClass('filter-btn-transform').css("z-index", "99999")
        $(".overlay").toggle().css("z-index", "9999")
        $('body').toggleClass('overfolow')
        $('html').toggleClass('overfolow')
    });
    $('.overlay').click(function () {
        $('.filters-cont').removeClass('enter1')
        $('.filters-btn').removeClass('filter-btn-transform')
        $('body').toggleClass('overfolow')
        $('html').toggleClass('overfolow')
    });
    if ($(window).width() <= 767) {


        $(".cat-nav-links-header").addClass("mo-accordion");
        $(".cat-links").addClass("mo-panel");
    }
    if ($(window).width() <= 991) {
        $(".table-title").addClass("mo-accordion");
        $(".table-cont").addClass("mo-panel");
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

    function fix_slider_img_height() {
        var x = $(".main-slider").height()
        $("#map").height(x);
    }
    $('.main-slider').on("initialized.owl.carousel", fix_slider_img_height);
    $('.main-slider').on("resized.owl.carousel", fix_slider_img_height);
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 10,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                dots: false,
                nav: false,
            },
            500: {
                dots: false,
                nav: false,

            },
            768: {
                dots: false,
                nav: true,
            },
        }
    });
    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logofooter.png'> <div style='display:inline-block;'>Blackstone<br>0540000000<br>info@blackstone.sa</div>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: ' ',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));

    ////////////////////////////////////////////
    $('.checkmark').click(function () {
        var x = $(this).attr('id');
        $('input[name=radio]').removeAttr('checked');
        $('input' + '#' + x).attr("checked", "checked");
    });



});