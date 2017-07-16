    $(document).ready(function(){       
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
        if (startchange.length){
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                        $(".bg-transpar").css('background-color', ' rgba(0,0,0, 0.7)');
                        } else {
                        $('.bg-transpar').css('background-color', 'transparent');
                    }
            });
        }
    });
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
