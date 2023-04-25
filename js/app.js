function indexSliderInit(){
    let vertical = false;
    if(screen.width > 1279){
        vertical = true;
    }
    let sliderIndex = $('.slider__wrap');
    sliderIndex.lightSlider({
        item: 1,
        loop: false,
        controls: false,
        speed: 800,
        vertical: vertical,
        verticalHeight:861,
        slideMargin: 0,
        responsive : [
            {
                breakpoint:1279,
                settings: {
                    vertical: vertical,
                    verticalHeight: 402,
                }
            },
        ],
    });
}

function seminarSliderInit(){
    let sliderSeminar = $('.seminar_slider');
    sliderSeminar.lightSlider({
        addClass: 'slider_seminar',
        item: 1,
        loop: false,
        controls: false,
        speed: 600,
        slideMargin: 0,
    });
}

function certSliderInit(){
    let sliderCert = $('.cert-slider');
    sliderCert.lightSlider({
        addClass: 'slider_cert',
        item: 1,
        loop: false,
        controls: true,
        prevHtml: '<',
        nextHtml: '>',
        pager: false,
        speed: 600,
        slideMargin: 0,
    });
}

function solutionSliderInit(){
    let sliderSolution = $('.solutions_slider');
    sliderSolution.lightSlider({
        addClass: 'slider_sol',
        item: 1,
        loop: false,
        controls: true,
        prevHtml: '<',
        nextHtml: '>',
        pager: false,
        speed: 600,
        slideMargin: 0,
    });
}


function carouselInit() {
    let owlCarousel = $('.right__slider_wrap');
    if (screen.width > 1279) {
        owlCarousel.owlCarousel({
            items:5,
            loop:true,
            margin:7,
            nav:true,
            dots:false,
            autoWidth: true,
            smartSpeed : 300
        }).on("translated.owl.carousel", setCls);
        function setCls() {
            $(".owl-item").removeClass("bigger").filter(".active").eq(0).addClass("bigger");
        }
        setCls();
    }
}

function clientsCarousel() {
    let owlCarouselClients = $('.index_our__clients .clients_list');
    owlCarouselClients.owlCarousel({
        items:1,
        loop:true,
        margin:7,
        nav:true,
        dots:true,
        autoWidth: true,
        smartSpeed: 400,
    });
}

function initYandexMap() {
    let event_status = false;
    ["mouseover", "click", "scroll"].forEach(function(event) {
        window.addEventListener(event, function() {
            if(!event_status) {
                let mapContainer = document.querySelector(".index_map");
                mapContainer.innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af906be902eeaf0f692377dda911a4dec404bf7715acc3070c84ad38bb3b704fc&amp;source=constructor" width="100%" height="494px" frameborder="0"></iframe>`;
                event_status = true;
            }
        }, {
            once: true
        });
    });
}


$(function() {

    indexSliderInit();
    carouselInit();
    clientsCarousel();
    initYandexMap();

    seminarSliderInit();
    certSliderInit();
    solutionSliderInit();

    let changeLang = '.change_lang';
    let langList = '.lang_list';
    let dropItem = '.dropdown_item';
    let headerMobileLink = '.header_mobile__button';
    let headerMenu = '.nav .header_menu';
    let mobileArr = '.nav .header_menu .mobile_arr';
    let dropMenu = '.dropdown_menu';
    let spoilerName = '.question_item .name';

    $(changeLang).on('click', function (){
        $(this).toggleClass('active');
        $(langList).stop(true).slideToggle();
    });

    if(screen.width > 1279){
        $(dropItem).hover(function (){
            $(this).children('.drop_link').toggleClass('active');
            $(this).children(dropMenu).stop(true).slideToggle();
        });
    }else{
        $(document).on('click',function (e) {
            if (!$(e.target).closest(mobileArr).length) {
                $(dropMenu).stop(true).slideUp();
                $(mobileArr).removeClass('active');
            }
        });
        $(headerMobileLink).on('click',function (){
            $(this).toggleClass('active');
            $(headerMenu).stop(true).slideToggle();
        });
        $(mobileArr).on('click',function (){
            $(mobileArr).removeClass('active');
            $(this).addClass('active');
            $(dropMenu).stop(true).slideUp();
            $(this).siblings(dropMenu).stop(true).slideDown();
        });
    }

    $(document).on('click',function (e) {
        if (!$(e.target).closest(changeLang).length) {
            $(langList).stop(true).slideUp();
            $(changeLang).removeClass('active');
        }
    });

    $(spoilerName).on('click', function (){
        //$(spoilerName).not($(this)).removeClass('active');
        //$('.question_item .answer').not($(this).next()).stop(true).slideUp();
        $(this).toggleClass('active').next().stop(true).slideToggle();
    });

});
