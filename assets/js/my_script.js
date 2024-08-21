
$(window).on('scroll', function() {
    var mainCircles = $('.main-circle');
    
    var viewportHeight = $(window).height();
    var threshold = viewportHeight * 0.9; // 40vh from bottom
    
    mainCircles.each(function() {
        var rect = $(this)[0].getBoundingClientRect();
        if (rect.bottom < threshold) {
        //   alert('.main-circle is above 40vh from the bottom');
        if(!$(this).hasClass("change-circle")){
            $(this).addClass("change-circle");
        } else {
            // $(this).removeClass("change-circle");
        }
        }
    });
});
