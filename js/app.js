if(ismain){
    $('.bxslider').bxSlider({
        auto: true,
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
}

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

var windows = {
    VEKAWHS60: {
        "price_2_old": "7 000",
        "price_2": "5 700",
        "price_3_old": "9 200",
        "price_3": "7 350",
        "price_b_old": "15 800",
        "price_b": "12 700",
        "silent": "50",
        "warm"  : "50",
        "light" : "50",
        "desc_2": "<b>Размер:</b> 1200x1200мм<br><b>Поворотная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-16-4</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1200мм<br><b>Повортная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-16-4</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ 4-16-4</span><br><b>Цвет:</b> белый"
    },
    VEKAWHS72: {
        "price_2_old": "8 900",
        "price_2": "7 100",
        "price_3_old": "11 380",
        "price_3": "9 100",
        "price_b_old": "18 300",
        "price_b": "14 629",
        "silent": "80",
        "warm"  : "80",
        "light" : "50",
        "desc_2": "<b>Размер:</b> 1200x1200мм<br><b>Поворотная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1200мм<br><b>Повортно-откидная створка:</b>600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    },
    VEKAEUROLINE: {
        "price_2_old": "",
        "price_2": "8 786",
        "price_3_old": "",
        "price_3": "10 740",
        "price_b_old": "",
        "price_b": "17 198",
        "silent": "60",
        "warm"  : "60",
        "light" : "40",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    },
    VEKASOFTLINE: {
        "price_2_old": "",
        "price_2": "9 598",
        "price_3_old": "",
        "price_3": "11 735",
        "price_b_old": "19 600",
        "price_b": "14 700",
        "silent": "80",
        "warm"  : "80",
        "light" : "20",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    },
    REHAU60: {
        "price_2_old": "9 700",
        "price_2": "7 300",
        "price_3_old": "11 900",
        "price_3": "8 900",
        "price_b_old": "19 600",
        "price_b": "14 700",
        "silent": "60",
        "warm"  : "65",
        "light" : "50",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    },
    REHAU4S: {
        "price_2_old": "11 200",
        "price_2": "8 400",
        "price_3_old": "13 800",
        "price_3": "10 300",
        "price_b_old": "20 100",
        "price_b": "14 900",
        "silent": "80",
        "warm"  : "80",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Поворотная створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Две повортные створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    },
    REHAU4I: {
        "price_2_old": "11 400",
        "price_2": "8 600",
        "price_3_old": "14 100",
        "price_3": "10 500",
        "price_b_old": "21 200",
        "price_b": "15 800",
        "silent": "80",
        "warm"  : "90",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Поворотная створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Две повортные створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>СТЕКЛОПАКЕТ: 4-10-4-10-4i (3 ст.)</span><br><b>Цвет:</b> белый"
    }
}

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

    if(ismain&&!isfirst){
        bxservice.destroySlider();
        bxportfolio.destroySlider();
    }

    if(size=='large'||size=='xlarge'||size=='xxlarge'){
        $('.nav_share_tooltip').html('');
        if(ismain){
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
    }

    if(size=='medium'){
        $('.nav_share_tooltip').append($('.ya-share2')[0].outerHTML);
        if(ismain){
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
    }

    if(size=='small'){
        $('.nav_share_tooltip').html('');
        if(ismain){
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
}

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    responsive(newSize, 0);
});

responsive(Foundation.MediaQuery.current, 1);