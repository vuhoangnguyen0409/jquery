//$(document).ready(function() {
// prvent inspect , vier-source
jQuery(document).ready(function($){
    $(window).on("contextmenu",function(){
       return false;
    });

    $(window).keydown(function(event){
        if(event.keyCode==123){
            return false;
        }
        else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
              return false;  //Prevent from ctrl+shift+i
           }
        else if(event.ctrlKey && event.keyCode==85){
              return false; //Prevent from ctrl + u
           }
        else if(event.altKey){
            return false;  //Prevent from Alt

        }
    });
});
$(window).load(function() {
  // jquery UI
  $("#date").datepicker();
  /////////////////////////////      page-top  ///////////////////
  $('.pageTop').click(function() {
    $('html, body').animate({
      scrollTop: '0',
    }, 800);
    return false;
  });

  /* fadeIn while scrolling ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });
  /* animation inview */
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop(); //window top
    var window_bottom_position = (window_top_position + window_height); //window bottom

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top; // element top
      var element_bottom_position = (element_top_position + element_height); // element bottom

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  //resize window
  $(window).on('load resize', function() {
    var win_w = $(window).width();
    if (468 < win_w && win_w < 768) {
      $('body').removeClass('sp');
      $('body').addClass('tbl');
    } else if (win_w < 468) {
      $('body').removeClass('tbl');
      $('body').addClass('sp');
    } else {
      $('body').removeClass('tbl sp');
      $('.box').removeAttr('style');
    }
  });

  /////////////////////////////     margin header fixed  ///////////////
  if ($('header').hasClass('fixed')) {
    setTimeout(function() {
      var headerHeight = $('header').height();
      //alert(headerHeight);
      $('#content').css({
        'margin-top': headerHeight
      });
    }, 500);
  };

  //////////////////////////////    dropdown menu   //////////////
  /**********menu dropdown*******************/
  $("#nav_global li ul").hide();
  $("#nav_global li").hover(function() {
    $(this).children("ul").stop().slideDown();
  }, function() {
    $(this).children("ul").stop().slideUp();
  });

  /////////////////////////////      add class active to menu of current page (text, no sub-menu)      //////////////
  $('#nav_global ul li').each(function() {
    if (window.location.href.indexOf($(this).find('a:first').attr('href')) > -1) // lay href cua element a dau tien trong moi element li roi kiem tra co trong window href khong
    {
      $(this).addClass('active').siblings().removeClass('active');
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      var li_is_text = $(this).children('a').text(); // check text in tag <a>
      //console.log(li_is_text);
      $('.active > a > img').each(function() {
        var src = $(this).attr('src');
        $(this).attr('src', src.replace('off', 'actived'));
      });

    }

  });

  //////////////////////////         scroll to id trong pagge (landing page) /////////////////
  $('a[href^="#"]').on('click', function(e) {
    //e.preventDefault();
    var target = this.hash;
    //alert(target);
    $target = $(target);
    $('html, body').stop().animate({
      //'scrollTop': $target.offset().top - headerHeight
      'scrollTop': $target.offset().top - 0
    }, 1200, 'swing');
    return false;

  });

  ///////////////////////////           sroll to id  ngoai page   /////////////////////////
  var getHash = window.location.hash;
  //console.log(getHash);
  if (getHash != '') {
    var pst = $(getHash).offset().top;
    //alert(pst);
    $('html,body').animate({
      scrollTop: pst
    }, 800);
  }

  ////// modal-box
  $("#modal-button").click(function() {
    // X�c d?nh l?i v? tr�Em?i cho login-box
    var modalWidth = $("#login-box").outerWidth();
    var modalHeight = $("#login-box").outerHeight();
    $("#login-box").css({
      "margin-top": "-" + (modalHeight / 2) + "px",
      "margin-left": "-" + (modalWidth / 2) + "px"
    });

    // Cho login-box v�Emodal-background xu?t hi?n
    $("#modal-background").fadeIn(300);
    $("#login-box").fadeIn(500);
    return false;
  });

  // S? ki?n nh?n n�t close ho?c nh?n l�n modal-background
  $("#login-box a.close, #modal-background").click(function() {
    $("#login-box").fadeOut(500);
    $("#modal-background").fadeOut(300);
    return false;
  });

  ////////  js_add_transition
  if ($('.trans').length > 0) {
    var trans = $('.trans').offset().top - 500;
    //console.log(trans);
    $(window).scroll(function() {
      var windowRoll = $(window).scrollTop();
      //console.log(windowRoll);
      if (windowRoll > trans) {
        if (!($('.trans').hasClass('addTrans'))) {
          $('.trans').addClass('addTrans');
        }
      } else {
        $('.trans').removeClass('addTrans');
      }
    });
  }


  ///////////////////////////          find objects follow for loop
  for (var i = 1; i < 4; i++) {
    //alert(i);
    var centerProduct = 2 * i + (i - 1);
    var obj = '.products ul li:nth-child(' + centerProduct + ')';
    //alert(obj);
    $(obj).css({
      "color": "red",
      "font-weight": "bold"
    })
  }
  //delay animation css
  for (var i = 1; i < 100; i++) {
    var classTarget = '.delay-' + i;
    $classTarget = $(classTarget);
    $classTarget.css({
      '-webkit-animation-delay': i * 1000 + 'ms',
      '-moz-animation-delay': 'none',
      'animation-delay': i * 1000 + 'ms',
    })
  }


  //////////////////////////       key event
  $(document).keydown(function(event) {
    if (event.keyCode == 65 || event.keyCode == 37) {
      alert('left');
    } else if (event.keyCode == 87 || event.keyCode == 38) {
      alert('up');
    } else if (event.keyCode == 68 || event.keyCode == 39) {
      alert('right');
    } else if (event.keyCode == 83 || event.keyCode == 40) {
      alert('down');
    }
  });




  //call functions
  rollover("#siteID a img", 0.6, 200); //exclusion / opacity / speed
  imgReplace(769, 'img'); // width, class
  spAutoTel('.tel', 0974487944);
}); // end document

//----------------------------------------------------------------------------------------------------------
///////////////////////////            AJAX
$("#formAjax").submit(function(e) {
  var name = $('#name').val();
  var pw = $('#pw').val();
  $.ajax({
    url: "result.php",
    type: "post",
    dataType: "text",
    data: {
      name: name,
      pw: pw
    },
    success: function(result) {
      $('#result').html(result);
    }
  });
  e.preventDefault(); // avoid to execute the actual submit of the form.
});

///////////////////////////////           hover img_off - img_on
var rollover = function(exclusion, opacity, speed) {
  $("a img").not(exclusion).each(function() {
    var img = $(this);
    if ($(this).attr("src").match("_off")) {
      $(this).hover(function() {
        $(img).attr("src", $(img).attr("src").replace("_off", "_on"));
      }, function() {
        $(img).attr("src", $(img).attr("src").replace("_on", "_off"));
      });
    } else {
      $(this).hover(function() {
        $(img).stop().animate({
          "opacity": opacity
        }, speed);
      }, function() {
        $(img).stop().animate({
          "opacity": 1
        }, speed);
      });
    }
  });
};



////////////////////////////////// imgReplace pc_sp
var imgReplace = function(widthReplace, objectReplace) {
  var $setElem = $(objectReplace),
    replaceWidth = widthReplace;
  $setElem.each(function() {
    var $this = $(this);

    function imgSize() {
      var windowWidth = parseInt(window.innerWidth || document.documentElement.clientWidth);
      if (windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace('_sp', '_pc'));
      } else if (windowWidth < replaceWidth) {
        $this.attr('src', $this.attr('src').replace('_pc', '_sp'));
      }
    }
    $(window).resize(function() {
      imgSize();
    });
    imgSize();
  });
};


///////////////////////////////// !sp auto tel
var spAutoTel = function(elemClass, telNumber) {
  var device = navigator.userAgent;
  //console.log(device);
  if ((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0) {
    $(elemClass).wrapInner("<a href=tel:" + telNumber + "></a>");
  }
};




//------------------------------------------------------------------------------------------------------------
