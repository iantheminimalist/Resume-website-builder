//**********************************************/
//NavBar Scroll Color Change
//**********************************************/
$(document).ready(function(){       
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
        if (startchange.length){
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                        $(".bg-transpar").css('background-color', ' rgba(47,79,79, 0.9)');
                        $(".custom-nav").css('box-shadow', ' 0px 1px 1px rgba(0, 0, 0, 0.5)');
                    } else {
                        $('.bg-transpar').css('background-color', 'transparent');
                         $(".custom-nav").css('box-shadow', ' 0px 0px 0px rgba(0, 0, 0, 0.0)');
                    }
            
            });
        }
    });
//**********************************************/
//Scrollspy
//**********************************************/
$('body').scrollspy({ target: '#navbarNavDropdown' });
/*
var navName = $('#navbarNavDropdown');
var delay = 500;

$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});
*/

//**********************************************/
//Progress Bar effect
//**********************************************/ 
var target = $('.target').offset().top - 1;
var hasScrolled = false; // this is the indicator

$(document).scroll(function(){
  // also check if progress bar has been scrolled
  if($(this).scrollTop() > target && !hasScrolled){
    hasScrolled = true; // set indicator to true to avoid re-animating again
var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});
  }
});

//**********************************************/
//Minimize Navbar after Clicking
//**********************************************/  
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

//**********************************************/
//Animated Scrollspy
//**********************************************/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href')) ;
    if( target.length ){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: (target.offset().top)
        }, 800);
    }
});
//**********************************************/
//Bootstrap 4 animation (progress-bar and numbers)  
//A PEN BY CAPTAIN ANONYMOUS
//**********************************************/

