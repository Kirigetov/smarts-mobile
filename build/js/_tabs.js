function deselect(e) {
  $('.js-popup').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

function openPop(id) {
	$('.js-popup')
		      .filter(`[data-modal="${id}"]`)
		      .slideFadeToggle()
		      .addClass('is-active');
}

$(function() {
  $('.js-popup-btn').on('click, touchend', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      e.preventDefault();
      let id = $(this).data('target');

      $(this).addClass('selected')
             .openPop(id);
    }
    return false;
  });

  $('.close').on('click touchend', function() {
    deselect($('.js-popup-btn'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};