/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min',
@codekit-prepend quiet '../../node_modules/bxslider/dist/jquery.bxslider.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min';
*/

$(document).foundation();

$('.bxslider').bxSlider({
    // auto: true,
    pause: 10000,
    mode: 'fade',
    pager: false,
    adaptiveHeight: true
});

bxreviews = $('.bxreviews').bxSlider({
    auto: true,
    pause: 10000,
    controls: false,
    tickerHover: true,
    adaptiveHeight: true,
    slideMargin: 5
});

$('.head_hamb').click(function(){
    $('html, body').animate({scrollTop: 0}, 'fast');
    $('body').addClass('noscroll');
    $('.nav').fadeIn();
});

$('.nav .close-button').click(function(){
    $('body').removeClass('noscroll');
});

$('.slider_call_button').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.call').offset().top - 30
    }, 500);
});

$('.reviews_item_text button').click(function(){
    $(this).prev().toggleClass('opened');
    $(this).text($(this).text() == 'Читать весь отзыв' ? 'Скрыть отзыв' : 'Читать весь отзыв');
    bxreviews.redrawSlider();
})

var windows;

$.getJSON('/templates/modernpvc/js/data/prices.json', function (data) {
    windows = data;
});

$(".service_list > li").click(function() {
    var wnd = $(this).attr("data-value");

    // Smena aktivnoy knopki
    $(".service_list li").removeClass("active");
    $(this).addClass("active");

    // Smena ceni
    $('.service_item:first-child .service_item_price_old').html((windows[wnd].price_2_old) ? windows[wnd].price_2_old+' руб.' : '');
    $('.service_item:nth-child(2) .service_item_price_old').html((windows[wnd].price_3_old) ? windows[wnd].price_3_old+' руб.' : '');
    $('.service_item:last-child .service_item_price_old').html((windows[wnd].price_b_old) ? windows[wnd].price_b_old+' руб.' : '');

    $('.service_item:first-child .service_item_price').html('<span>'+windows[wnd].price_2+'</span> руб.');
    $('.service_item:nth-child(2) .service_item_price').html('<span>'+windows[wnd].price_3+'</span> руб.');
    $('.service_item:last-child .service_item_price').html('<span>'+windows[wnd].price_b+'</span> руб.');

    // Смена параметров
    $('.service_item:first-child .service_item_params div:first-child .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:first-child .service_item_params div:nth-child(2) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:first-child .service_item_params div:last-child .progress-meter').css('width',windows[wnd].light+'%');

    $('.service_item:nth-child(2) .service_item_params div:first-child .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:nth-child(2) .service_item_params div:nth-child(2) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:nth-child(2) .service_item_params div:last-child .progress-meter').css('width',windows[wnd].light+'%');

    $('.service_item:last-child .service_item_params div:first-child .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:last-child .service_item_params div:nth-child(2) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:last-child .service_item_params div:last-child .progress-meter').css('width',windows[wnd].light+'%');

    // Smena soderjimogo
    $('.service_item:first-child .service_item_desc').html(windows[wnd].desc_2);
    $('.service_item:nth-child(2) .service_item_desc').html(windows[wnd].desc_3);
    $('.service_item:last-child .service_item_desc').html(windows[wnd].desc_b);
});

// Адаптивность
function responsive(size, isfirst){

    if(!isfirst){
        bxservice.destroySlider();
        bxportfolio.destroySlider();
    }

    if(size=='large'||size=='xlarge'||size=='xxlarge'){
        $('.nav_share_tooltip').html('');
        bxservice = $('.bxservice').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 370,
            slideMargin: 30,
            hideControlOnEnd: true,
            infiniteLoop: false,
            pager: false
        });

        bxportfolio = $('.bxportfolio').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 365,
            slideMargin: 35,
            pager: false,
            prevText: '',
            nextText: ''
        });
    }

    if(size=='medium'){
        $('.nav_share_tooltip').append($('.ya-share2')[0].outerHTML);
        bxservice = $('.bxservice').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 370,
            slideMargin: 30,
            hideControlOnEnd: true,
            infiniteLoop: false,
            pager: false,
            prevText:'',
            nextText:''
        });
        
        bxportfolio = $('.bxportfolio').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 320,
            slideMargin: 15,
            pager: false,
            prevText: '',
            nextText: ''
        });
    }

    if(size=='small'){
        $('.nav_share_tooltip').html('');
        bxservice = $('.bxservice').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 370,
            slideMargin: 20,
            hideControlOnEnd: true,
            infiniteLoop: false,
            pager: false,
            prevText:'',
            nextText:''
        });

        bxportfolio = $('.bxportfolio').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 320,
            slideMargin: 15,
            pager: false,
            prevText: '',
            nextText: ''
        });
    }
}

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    responsive(newSize, 0);
});

responsive(Foundation.MediaQuery.current, 1);