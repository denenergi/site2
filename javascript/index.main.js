$(document).ready(function() {
    $('.header__burger') .click(function(event){
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu').toggleClass(' menu--active');
        $('.header').toggleClass('header--active'); 
        $('.header__content-title').toggleClass('header__content-title--active'); 
        $('.header__social').toggleClass('header__social--active');     
    });
    $('.slider').slick({
        arrows:false,
        dots:true,
    });
    $('.slider-second').slick({
        arrows:false,
        dots:true,
    });

    });

