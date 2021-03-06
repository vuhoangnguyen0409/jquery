(function($) {
    $.fn.nMatchHeight = function(options) {
            var defaultValue = {
                matchChild: false,
            }
             var obj = $.extend({}, defaultValue, options);
            if (obj.matchChild){
                $target = $(this).children();
            }
            else {
                $target = $(this);
            }
            $target.removeAttr('style');
            var heightArray = new Array(); // creat height array
            $target.each(function() {
                var eachHeight = $(this).height();
                heightArray.push(eachHeight)
                console.log(heightArray);
            }); // end each
            var maxHeight = (Math.max.apply(Math, heightArray)); // find max
            //console.log(maxHeight);
            return this.each(function() {
                $target.height(maxHeight);
            });

        } // end function
})(jQuery);
$(window).bind('load resize', function() {
    $('.nMatchHeight').nMatchHeight();
    $('.nMatchHeight02').nMatchHeight();
    $('.matchChild').nMatchHeight({
         matchChild: true,
    });
    $('#nav_global .inner').nMatchHeight({
         matchChild: true,
    });
});