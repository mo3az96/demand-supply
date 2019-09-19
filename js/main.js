window.onload = function () {
    // Animate loader off screen

    $(".loader").fadeOut(1000, function () {
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
}
$(document).ready(function () {
    $('#buildcall').click(function () {
        $('#buildlist').toggleClass('enter1')
    });
    $('#employcall').click(function () {
        $('#employlist').toggleClass('enter1')
    });
    $('.back').click(function () {
        $('.level2').removeClass('enter1')
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
    if ($(window).width() > 767) {
        $(".mega-menu-btn").hover(function () {
            $('.overlay').fadeIn(500);

        }, function () {
            $('.overlay').hide(0);
        });
    }

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