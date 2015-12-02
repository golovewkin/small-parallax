(function ($) {

    //============parallax================

    var parallaxBlock = $('.parallax');
    var backPosY = parallaxBlock.css('background-position').slice(4, 8);
    var eventScroll = 0;
    var prevEventScroll = 0;

    parallaxBlock.mousemove(function (e) {

        eventScroll = e.pageY;

        if (prevEventScroll == 0) {
            prevEventScroll = eventScroll;
        }

        else if (prevEventScroll > eventScroll) {
            backPosY++;
            prevEventScroll = eventScroll;
        }

        else if (prevEventScroll < eventScroll) {
            backPosY--;
            prevEventScroll = eventScroll;
        }

        else if (backPosY > 0 || backPosY < -237) {
            return false
        }

        parallaxBlock.css('background-position', '0 ' + backPosY + 'px')
    });
    //============parallax================


})(jQuery);

