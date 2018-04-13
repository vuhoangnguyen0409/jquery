(function($){
    $.fn.animation = function(mode) {
		return this.each(function () {
			$(this).addClass('animated '+ mode);
		});
	 } // end function
})(jQuery);
(function($) {
    $.fn.nSlider = function(options) {
        var defaultValue = {
            auto: true,
            pager: true,
            control: true,
            autoSpeed: 5000,
			fadeInSpeed : 'slow',
            full: false,
            mode : 'fadeIn', //https://github.com/daneden/animate.css
        }
        var obj = $.extend({}, defaultValue, options);
        //console.log(obj.mode);
        return this.each(function() {
            //console.log($(this));
            //console.log(this);
            $(this).wrapInner('<div class="sliderImgs"></div>'); // wrap tat ca tag chua img vao 1 div
            var sliderWrapper = $(this);
            var slider = $(this).children('.sliderImgs');
            var numberOfSlide = slider.children().length;
            var maxWidthImg = 0;
            var maxHeightImg = 0;
             // full slider
            if (obj.full) {
                sliderWrapper.css({
                    'width': '100%'
                });
                sliderWrapper.find('img').css({
                    'width': '100%',
                });
            }
            // find max-width, max-height
            for (var i = 0; i < numberOfSlide; i++) {
                if (maxWidthImg < slider.children().eq(i).find('img').width()) { //find max width
                    maxWidthImg = slider.children().eq(i).find('img').width();
                }
                if (maxHeightImg < slider.children().eq(i).find('img').height()) { //find max height
                    maxHeightImg = slider.children().eq(i).find('img').height();
                    slider.children().eq(i).addClass('maxHeightImg').siblings().removeClass('maxHeightImg');
                }
                if (obj.pager) {
                    sliderWrapper.append('<a href="' + (i + 1) + '" class="nSliderNumber">' + (i + 1) + '</a>'); // create pager
                }
            }
            //console.log(maxHeightImg + '\n' + maxWidthImg);
            // css pager
            sliderWrapper.find('.nSliderNumber').wrapAll('<div class="pager" style="text-align: center"></div>');
            $('.pager').css({
                'position': 'absolute',
                'bottom': '-20px',
                'width': '100%',
                'text-align': 'center',
                'z-index': '9999999999999999',
            });
            ////*** pager click
            sliderWrapper.find('a.nSliderNumber').click(function() {
                var href = $(this).attr('href');
                //alert(href);
                $(this).parent().siblings('.sliderImgs').children().fadeOut();
                $(this).parent().siblings('.sliderImgs').children().eq(href - 1).fadeIn(obj.fadeInSpeed).animation(obj.mode).addClass('showed').siblings().removeClass('showed');
                return false;
            });
            // css control button
            if (obj.control) {
                sliderWrapper.append('<a href="" class="prev">PREV</a><a href="" class="next">NEXT</a>'); // create prev - next button
                sliderWrapper.find('.prev, .next').wrapAll('<div class="nControl"></div>');
                $('.nControl').css({

                });
                $('.prev').css({
                    'position': 'absolute',
                    'left': '-40px',
                    'top': '50%',
                });
                $('.next').css({
                    'position': 'absolute',
                    'right': '-40px',
                    'top': '50%',
                });
            }
            ////*** control click
            sliderWrapper.find('a.next').click(function() {
                if ($(this).parent().siblings('.sliderImgs').children().last().hasClass('showed')) { // last slide
                    $(this).parent().siblings('.sliderImgs').children().first().fadeIn(obj.fadeInSpeed).animation(obj.mode).addClass('showed').siblings().fadeOut().removeClass('showed');
                } else {
                    $showed = $(this).parent().siblings('.sliderImgs').find('.showed');
                    $showed.removeClass('showed').next().addClass('showed').fadeIn(obj.fadeInSpeed).animation(obj.mode).siblings().fadeOut();
                }
                return false;
            });
            sliderWrapper.find('a.prev').click(function() {
                if ($(this).parent().siblings('.sliderImgs').children().first().hasClass('showed')) { // first slide
                    $(this).parent().siblings('.sliderImgs').children().last().fadeIn(obj.fadeInSpeed).animation(obj.mode).addClass('showed').siblings().fadeOut().removeClass('showed');
                } else {
                    $showed = $(this).parent().siblings('.sliderImgs').find('.showed');
                    $showed.removeClass('showed').prev().addClass('showed').fadeIn(obj.fadeInSpeed).animation(obj.mode).siblings().fadeOut();
                }
                return false;
            });
            //auto mode
            if (obj.auto) {
                setInterval(function() {
                    if (slider.children().eq(numberOfSlide - 1).hasClass('showed')) { // last slide
                        slider.children().eq(0).fadeIn(obj.fadeInSpeed).animation(obj.mode).addClass('showed').siblings().fadeOut().removeClass('showed');
                    } else {
                        $showed = slider.find('.showed');
                        $showed.removeClass('showed').next().addClass('showed').fadeIn(obj.fadeInSpeed).animation(obj.mode).siblings().fadeOut();
                    }
                }, obj.autoSpeed);
            }
            // clone maxHeightImg
            sliderWrapper.find('.maxHeightImg img').clone().appendTo(sliderWrapper).wrap('<div class="clone"></div>').css({
                'visibility': 'hidden'
            });
            // initial
            //slider.children().css('display', 'none');
            slider.children().first().addClass('showed').siblings().hide();
            // css height - width responsive
            sliderWrapper.css({
                'position': 'relative',
                'width': maxWidthImg,
                'height': maxHeightImg,
                'margin': '0px auto',
            });
            slider.children().css({
                'width': '100%',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'text-align': 'center',
            });
            sliderWrapper.find('img').css({
                'max-width': '100%',
            });
            //responsive
            $(window).bind('load resize', function() {
                //set width for slider again
                windowWidth = $(window).width();
                if (windowWidth <= maxWidthImg) {
                    sliderWrapper.css({
                        'width': windowWidth + 'px'
                    });
                }
                //set height for slider again
                var sliderHeight = sliderWrapper.find('.clone img').height();
                //alert(sliderHeight);
                sliderWrapper.height(sliderHeight);
                //console.log(windowWidth);
            });
        }); // end each
    }
})(jQuery);
$('.nSlider').nSlider({
    auto: true,
    pager: true,
    control: true,
    autoSpeed: 5000,
	fadeInSpeed : 'slow',
    full: false,
    //mode : 'fadeIn', //default
});
$('.slider').nSlider({
    auto: true,
    autoSpeed: 5000,
    full: true,
    mode:'zoomIn',
    pager: true,
    control: true,
});
