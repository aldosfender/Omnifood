$(document).ready(function() {
    
    /* Sticky Nav */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll on Buttons */
    $('.js--scroll-plan').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 2000); 
    });
    
    $('.js--scroll-feature').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /* Buttons on nav */
    $('.js--scroll-work').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-work').offset().top}, 2000); 
    });
    
    $('.js--scroll-town').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-town').offset().top}, 2000); 
    });
    
    
    
    /* Animations on Scroll */
    
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '40%'
    });
    
    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '30%'
    });
    
    
    /***** Nav Mobile Jquery *****/
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon =$('.js--nav-icon i'); 
        
       nav.slideToggle(200); /* it makes the menu effect in 0.2 seg */ 
       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
    });
    

});