(function($){
    $.fn.functionName = function(options) {
		var defaultValue = {
		}
		var obj = $.extend({}, defaultValue, options);
		return this.each(function () {
          	 //console.log($(this));
			 //console.log(this);
			 var classTarget = $(this); // create object
		});
	 } // end function
})(jQuery);