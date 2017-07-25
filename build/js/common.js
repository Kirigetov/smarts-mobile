$(document).ready(function() {

	$('.js-slider').slick({
		arrows: false,
		dots: false
	})

	var snapper = new Snap({
        element: document.getElementById('content'),
        disable: 'right'
    });

    // Get the button
    var myToggleButton = $('#menuBtn');

    myToggleButton.on('click', function(){
	    snapper.open('left');
    });

});