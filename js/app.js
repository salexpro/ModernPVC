$('.bxslider').bxSlider({
    auto: true,
    pause: 10000,
    mode: 'fade',
    pager: false,
    controls: false,
    adaptiveHeight: true
});

var bxservice = $('.bxservice').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 370,
    slideMargin: 30,
    hideControlOnEnd: true,
    infiniteLoop: false,
    pager: false
});

var bxportfolio = $('.bxportfolio').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 365,
    slideMargin: 35,
    pager: false,
    prevText: '',
    nextText: ''
});

$('.bxreviews').bxSlider({
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
})


var windows = {
    VEKAWHS60: {
        "price_2": "5 700",
        "price_3": "7 300",
        "price_b": "12 163",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1200x1200мм<br><b>Поворотная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1200мм<br><b>Повортная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый"
    },
    VEKAWHS72: {
        "price_2": "7 100",
        "price_3": "9 100",
        "price_b": "14 629",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1200x1200мм<br><b>Поворотная створка:</b> 600x1200мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1200мм<br><b>Повортно-откидная створка:</b>600x1200мм<br><b>Глухая створка:</b> 600x1200мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных<br>работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый"
    },
    VEKAEUROLINE: {
        "price_2": "8 786",
        "price_3": "10 740",
        "price_b": "17 198",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый"
    },
    VEKASOFTLINE: {
        "price_2": "9 598",
        "price_3": "11 735",
        "price_b": "19 385",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный ТЕПЛОПАКЕТ</span><br><b>Цвет:</b> белый"
    },
    KBEGUTWERK: {
        "price_2": "7 830",
        "price_3": "9 358",
        "price_b": "13 283",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Глухая створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Глухая створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Глухая и повортная створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый"
    },
    KBEENERGY: {
        "price_2": "8 676",
        "price_3": "10 310",
        "price_b": "14 937",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Поворотная створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Две повортные створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый"
    },
    KBE76: {
        "price_2": "10 028",
        "price_3": "11 928",
        "price_b": "17 556",
        "silent": "60",
        "warm"  : "75",
        "light" : "60",
        "desc_2": "<b>Размер:</b> 1400x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Поворотная створка:</b> 700x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_3": "<b>Размер:</b> 1800x1400мм<br><b>Повортно-откидная створка:</b>600x1400мм<br><b>Поворотная створка:</b> 600x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый",
        "desc_b": "<b>Размер:</b> 1830x2160мм<br><b>Поворотная створка:</b> 670x2160мм<br><b>Две повортные створки:</b> 1160x1400мм<br><b>Цена изделия:</b> без монтажа и отделочных работ, и дополнительных элементов.<br><span>Двухкамерный стеклопакет</span><br><b>Цвет:</b> белый"
    }
}

$(".service_list > li").click(function() {
    var wnd = $(this).attr("data-value");

    // Smena aktivnoy knopki
    $(".service_list li").removeClass("active");
    $(this).addClass("active");

    // Smena ceni
    $('.service_item:first .service_item_price').html('<span>'+windows[wnd].price_2+'</span> руб.');
    $('.service_item:eq(1) .service_item_price').html('<span>'+windows[wnd].price_3+'</span> руб.');
    $('.service_item:last .service_item_price').html('<span>'+windows[wnd].price_b+'</span> руб.');

    // Смена параметров
    $('.service_item:first .service_item_params div:first .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:first .service_item_params div:eq(1) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:first .service_item_params div:last .progress-meter').css('width',windows[wnd].light+'%');

    $('.service_item:eq(1) .service_item_params div:first .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:eq(1) .service_item_params div:eq(1) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:eq(1) .service_item_params div:last .progress-meter').css('width',windows[wnd].light+'%');

    $('.service_item:last .service_item_params div:first .progress-meter').css('width',windows[wnd].silent+'%');
    $('.service_item:last .service_item_params div:eq(1) .progress-meter').css('width',windows[wnd].warm+'%');
    $('.service_item:last .service_item_params div:last .progress-meter').css('width',windows[wnd].light+'%');

    // Smena soderjimogo
    $('.service_item:first .service_item_desc').html(windows[wnd].desc_2);
    $('.service_item:eq(1) .service_item_desc').html(windows[wnd].desc_3);
    $('.service_item:last .service_item_desc').html(windows[wnd].desc_b);
});

$('.footer_bottom a:last').attr('href','//salex.pro');

// Адаптивность
function rebuildsliders(size){
    bxservice.destroySlider();
    bxportfolio.destroySlider();

    if(size=='large'||size=='xlarge'||size=='xxlarge'){
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

function responsive(newsize, isfirst){
    if(newsize=='large'||newsize=='xlarge'||newsize=='xxlarge'){
        $('.nav_share_tooltip').text('');
    }

    if(newsize=='medium'){
        $('.nav_share>a').each(function(){
            $('.nav_share_tooltip').append(this.outerHTML);
        });
        $('.nav_share>div').hover(function(){
            $('.nav_share_tooltip').toggleClass('active');
        });
    }

    if(newsize=='small'){
        $('.nav_share_tooltip').text('');
    }

    if(!isfirst){
        rebuildsliders(newsize);
        console.info('newsize: '+newsize);
    } else if(newsize!='large'&&newsize!='xlarge'&&newsize!='xxlarge'){
        setTimeout(function(){
            rebuildsliders(newsize)
        },'2000');
        console.info('first time: '+newsize);
    }
}

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    responsive(newSize, 0);
});

responsive(Foundation.MediaQuery.current, 1);