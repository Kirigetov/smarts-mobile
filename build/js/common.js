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

});