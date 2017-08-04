$(document).ready(function() {

	// open/close nav-menu
	$(".js-menu-btn").on('click', function(e) {
		console.log('click');
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

	$('.js-tab-link').on('click touchstart', function(e) {
		e.preventDefault();

		var _this = $(this),
			p = _this.parent(),
			siblings = p.siblings(),
			tabContent = '.js-tab-content';

		siblings.find('.js-tab-content').slideUp();
		// siblings.find(tabContent).removeClass('is-active');
		p.find(tabContent).slideToggle();
		siblings.removeClass('is-active');
		p.toggleClass('is-active');
	});

});