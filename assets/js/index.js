$(document).ready(() => {
    let upBtn = $('.up-button');
    $(window).on('scroll', () => {
        if(parseInt($(window).scrollTop()) >= 1000){
            upBtn.addClass('show');
        }else{
            upBtn.removeClass('show');
        }
    })

    upBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
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

    $('.request__btn').each(function(i){
        $(this).on('click', () => {
            popupStatus = true;
            popupOverlay.fadeIn();
            $('.wrapper').css('filter', 'blur(5px)');
            console.log('Request click');
        })
    })

    $('.popup-close').on('click', function(){
        popupStatus = false;
        popupOverlay.fadeOut();
        $('.wrapper').css('filter', 'none');
        console.log('Close click');
    })

    $(document).mouseup(function(e){
        let popup = $('.popup');
        if(e.target != popup[0] && popup.has(e.target).length === 0){
            popupOverlay.fadeOut();
            $('.wrapper').css('filter', 'none');
        }else{
            console.log('etarger', e.target);
            console.log('has', e.target);
            console.log('etarger', e.target);
        }
    })
    

});