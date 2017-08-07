$(document).ready(function() {

	// open/close nav-menu
	$(".js-menu-btn").on('click', function(e) {
		e.preventDefault();

		$('body').toggleClass('is-push');
	});

	// close nav-menu via swipe
	$(".page-nav").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
			if ( $('body').hasClass('is-push')) {
         		$('body').removeClass('is-push');
	        }
		}
    });

	$('.js-slider').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000
	})

	$('.js-prod-slider').slick({
		dots: false,
		slidesToScroll: 1,
		slidesToShow: 1,
		nextArrow: '.slide-arrow_right',
		prevArrow: '.slide-arrow_left'
	})


	// for tabs sliding
	var touchEvent = 'onclick' in window ? 'onclick' : 'ontouchstart' ;
	touchEvent = touchEvent.replace('on','');

	$('.js-tab-link').on(touchEvent, function(e) {
		e.preventDefault();

		var _this = $(this),
			p = _this.parent(),
			siblings = p.siblings().filter('.js-tab-item'),
			tabContent = '.js-tab-content';

		siblings.find('.js-tab-content').slideUp();
		p.find(tabContent).slideToggle();
		siblings.removeClass('is-active');
		p.toggleClass('is-active');
	});

	// js-counter
	$(function () {

	    $('.js-counter').each(function ( index, element ) {
	        var count = 1;
	        var $component = $(element);
	        var $output = $component.find('.counter-output');

	        var updateCount = function( increment ) {
	            count += increment;
	            count = count < 1 ? 1 : count;

	            $output.text(count);
	        };

	        $component.on('click', '[data-increment]', function ( event ) {
	            var increment = $(event.target).data('increment');
	            updateCount(+increment);
	        });

	        updateCount( count ); 
	    });
	});


	    // scroll button
    $(".js-scroll-top").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
            if (!$(".js-scroll-top").hasClass("is-visible")) {
                $(".js-scroll-top").addClass("is-visible");
            }

       } else {
        if ($(".js-scroll-top").hasClass("is-visible")) {
            $(".js-scroll-top").removeClass("is-visible");
        }
       }
       lastScrollTop = st;
    });
}); 

