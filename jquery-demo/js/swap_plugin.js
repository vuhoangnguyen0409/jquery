(function($) {
	$.fn.swapWidth = function(to) {
		return this.each(function () {
			var copy_to = $(to).clone(true);
        	var copy_from = $(this).clone(true);
        	$(to).replaceWith(copy_from);
        	$(this).replaceWith(copy_to);
		});
	}
})(jQuery);
$('#from').swapWidth('#to');