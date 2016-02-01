$(document).ready(function() {

    // set up click to section scrolling:

    var SCROLL_SPEED = 300;

    var scrollTos = {
        '.header': '#about'
    };


    for (var clickSel in scrollTos) {
        $(clickSel).click(function(targetSel, e) {
            e.preventDefault();

            $(window).scrollTo(targetSel, SCROLL_SPEED);
        }.bind(this, scrollTos[clickSel]));
    }


    // set up the middle section carousel


    // set up bag image cycle'ing


});
