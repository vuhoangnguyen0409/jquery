$(document).ready(function() {
    animateDiv();
    pippiSpeed = 2000;
    //window height & width
    var windowW = parseInt(window.innerWidth || document.documentElement.clientWidth);
    var windowH = $(window).height();
    $('#content').css({
        'height': windowH,
        'width': windowW,
    });
    //score
    var score = 0;
    $('.score').text(score);
    // pippi & cake
    var pippi = $('.pippi');
    var cake = $('.cake');
    //playing
    function playing(event) {
        // cake random
        var cakeRandomX = Math.floor(Math.random() * 500);
        var cakeRandomY = Math.floor(Math.random() * 500);
        cake.css({
            'top': cakeRandomX,
            'left': cakeRandomY,
        });
        // cake coordinate
        var cakeCoordinateY = cake.offset().top;
        var cakeCoordinateX = cake.offset().left;
        //console.log(cakeCoordinateY + '\n' + cakeCoordinateX);
        cakeCoordinateY01 = cakeCoordinateY - 70;
        cakeCoordinateY02 = cakeCoordinateY + 70;
        cakeCoordinateX01 = cakeCoordinateX - 70;
        cakeCoordinateX02 = cakeCoordinateX + 70;
        //console.log(cakeCoordinateY01 + ' ' + cakeCoordinateY02 + '\n' + cakeCoordinateX01 + ' ' + cakeCoordinateX02);
        //keyup
        $(document).keyup(function(event) {
            pippi.clearQueue().stop();
        }); //end keyup
        //keydown
        $(document).keydown(function(event) {
            //pippi height & width
            //var pippiW = pippi.width();
            //var pippiH = pippi.height();
            //console.log(pippiH + ' ' + pippiW);
            //pippi coordinate
            var pippiCoordinateY = Math.floor(pippi.offset().top);
            var pippiCoordinateX = Math.floor(pippi.offset().left);
            console.log(pippiCoordinateY + ' ' + pippiCoordinateX);
            //move
            function move(pippiCoordinateY, pippiCoordinateX) {
                    // stop
                    if (pippiCoordinateX < 30) { // left
                        $('#content').addClass('stop');
                    } else if (pippiCoordinateY < 30) { //up
                        $('#content').addClass('stop');
                    } else if (pippiCoordinateX > (windowW - 130)) { //right
                        $('#content').addClass('stop');
                    } else if (pippiCoordinateY > (windowH - 130)) { //bottom
                        $('#content').addClass('stop');
                    } else {
                        $('#content').removeClass('stop');
                    }
                    // catch cake
                    if (pippiCoordinateY > cakeCoordinateY01 && pippiCoordinateY < cakeCoordinateY02 && pippiCoordinateX > cakeCoordinateX01 && pippiCoordinateX < cakeCoordinateX02) {
                        //console.log(pippiW);
                        $('.score').text(score += 1);
                        playing();
                    }
					// game over
					 ballScopeY01 = newq[0] + 200;
					 ballScopeX01 = newq[0] + 200; 
					 if ( pippiCoordinateY > newq[0] && pippiCoordinateY < ballScopeY01 &&  pippiCoordinateX > newq[1] && pippiCoordinateX < ballScopeX01 ) { 
                       	alert('game over');
                    }
                } // end function move()
            if (event.keyCode == 65 || event.keyCode == 37) { //left
                //alert('left');
                pippi.animate({
                    'left': '0px',
                }, pippiSpeed);
                move(pippiCoordinateY, pippiCoordinateX);

            } else if (event.keyCode == 87 || event.keyCode == 38) { //up
                pippi.animate({
                    'top': '0px',
                }, pippiSpeed);
                move(pippiCoordinateY, pippiCoordinateX);

            } else if (event.keyCode == 68 || event.keyCode == 39) { //right
                pippi.animate({
                    'left': $('#content').width(),
                }, pippiSpeed);
                move(pippiCoordinateY, pippiCoordinateX);
            } else if (event.keyCode == 83 || event.keyCode == 40) { //down
                pippi.animate({
                    'top': $('#content').height(),
                }, pippiSpeed);
                move(pippiCoordinateY, pippiCoordinateX);
            }
        }); // end keydown
    }; // end playing
    playing();
}); // ready
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    newq = makeNewPosition();
	console.log(newq);
    $('.ball').animate({ top: newq[0], left: newq[1] }, 3000, function(){
      animateDiv();        
    });
    
};