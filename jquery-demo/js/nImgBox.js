(function($) {

    $.fn.nImgBox = function(options) {
            //alert(nImgBox);
            var defaultValue = {}
            var obj = $.extend({}, defaultValue, options);

            // set variable
            return this.each(function() {

                var nImgBox = $(this);
                var link = $(this).children('a');
                link.click(function() {
                    //create html to show
                    nImgBox.append('<div class="showWrapper"><div class="showArea"><img class="showImg" src="" alt=""><a class="close" href="#" onclick="closeImgBox();"><img src="images/close.png" alt="close"></a><div class="control" style="display:none"><a class="prev" href="#"><img src="images/prev.png" alt="previous"></a><a class="next" href="#"><img src="images/next.png" alt="next"></a></div></div></div>');
                    //check single or group img then addClass
                    var getClass = nImgBox.children('a').attr('class');
                    var className = '.' + getClass;
                    console.log($(className).length);
                    if ($(className).length > 1) {
                        $('.control').show();
                    }
                    $(this).addClass('aShowed');
                    // css
                    nImgBox.find('.showWrapper').css({
                        'background-color': 'rgba(0, 0, 0, 0.6)',
                        'position': 'fixed',
                        'top': '0px',
                        'left': '0px',
                        'width': '100%',
                        'height': '100%',
                        'z-index': '999',
                    });
                    nImgBox.find('.showArea', '.control').css({
						'position': 'absolute',
                        'top': '0px',
                        'left': '0px',
                        'width': '100%',
                        'height': '100%'
                    });
                    nImgBox.find('.showImg').css({
                        'position': 'absolute',
                        'top': '0px',
                        'right': '0px',
                        'bottom': '0px',
                        'left': '0px',
                        'margin': 'auto',
                    });
                    nImgBox.find('.close').css({
                        'position': 'absolute',
                        'top': '0px',
                        'right': '0px',
                    });

                    //get href and show
                    nImgBox.find('.showWrapper').fadeIn();
                    var imgShow = nImgBox.find('.showImg');
                    var imgWillShow = $(this).attr('href');
                    imgShow.attr('src', imgWillShow);
                    // control click
                    $('.control .next').on('click', function() {
                        if (link.last().hasClass('aShowed')) {
                            return false;
                        } else {
                            imgNext = $('.aShowed').next('a');
                            imgSrcNext = imgNext.attr('href');
                            console.log(imgSrcNext);
                            imgShow.attr('src', imgSrcNext);
                            $('.nImgBox a').removeClass('aShowed');
                            imgNext.addClass('aShowed');
                        }

                    });
                    $('.control .prev').on('click', function() {
                        if (link.first().hasClass('aShowed')) {
                            return false;
                        } else {
                            imgPrev = $('.aShowed').prev('a');
                            imgSrcPrev = imgPrev.attr('href');
                            console.log(imgSrcPrev);
                            imgShow.attr('src', imgSrcPrev);
                            $('.nImgBox a').removeClass('aShowed');
                            imgPrev.addClass('aShowed');
                        }

                    });
                    return false; // do nothing elsess

                });
            }); // end link click

        } // end each function

})(jQuery); // JavaScript Document
//close function
var closeImgBox = function() {
    $('.showWrapper').fadeOut().remove(); // remover showWrapper
    $('.nImgBox a').removeClass('aShowed');
    //alert(2);
    return false;
}
$('.nImgBox').nImgBox();