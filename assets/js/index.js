$(document).ready(() => {


    let upBtn = $('.up-button');
    $(window).on('scroll', () => {
        if (parseInt($(window).scrollTop()) >= 1000) {
            upBtn.addClass('show');
        } else {
            upBtn.removeClass('show');
        }
    })

    upBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });



    $('.numbers__number').each(function (_, self) {
        jQuery({
            Counter: 5
        }).animate({
            Counter: $(self).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function () {
                $(self).text(Math.ceil(this.Counter));
            }
        });
    });

    // Popup

    let popupStatus = false;
    let popupOverlay = $('.popup-overlay');

    $('.request__btn').each(function (i) {
        $(this).on('click', () => {
            popupStatus = true;
            popupOverlay.fadeIn();
            $('.wrapper').css('filter', 'blur(5px)');
            console.log('Request click');
        })
    })

    $('.popup-close').on('click', function () {
        popupStatus = false;
        popupOverlay.fadeOut();
        $('.wrapper').css('filter', 'none');
        console.log('Close click');
    })

    $(document).mouseup(function (e) {
        let popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            popupOverlay.fadeOut();
            $('.wrapper').css('filter', 'none');
        } else {
            console.log('etarger', e.target);
            console.log('has', e.target);
            console.log('etarger', e.target);
        }
    })


    // Menu

    $('.burger-btn').on('click', () => {
        $('.header__navbar--mobile').toggleClass('active');
    });


    $('.navbar__close').on('click', () => {
        $('.header__navbar--mobile').toggleClass('active');
    });


    $('[class*=js-]').on('click', () => {
        $('.header__navbar--mobile').removeClass('active');
    });

    $('.js-projects').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.projects').offset().top - $('.projects').height() / 2
        }, 1000);
    });

    $('.js-services').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.services').offset().top - $('.services').height() / 2
        }, 1000);
    });

    $('.js-faq').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.question').offset().top - $('.question').height() / 2
        }, 1000);
    });

    $('.js-partners').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.partners').offset().top - $('.partners').height() / 2
        }, 1000);
    });

    $('.js-reviews').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.reviews').offset().top - $('.reviews').height() / 2
        }, 1000);
    });

    $('.js-contacts').on('click', () => {
        $('html,body').animate({
            scrollTop: $('.contacts').offset().top - $('.contacts').height() / 2
        }, 1000);
    });

    // Faq

    $('.question__text').slideToggle();

    $('.question__title').on('click', function(){
        $(this).siblings('.question__text').slideToggle();
        $(this).children('svg').toggleClass('rotated');
    })
    

});