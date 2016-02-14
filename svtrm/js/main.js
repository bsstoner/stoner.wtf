$(document).ready(function() {

    // set up click to section scrolling:

    var SCROLL_SPEED = 300;

    var scrollTos = {
        '.home': '#about'
    };


    for (var clickSel in scrollTos) {
        $(clickSel).click(function(targetSel, e) {
            e.preventDefault();

            $(window).scrollTo(targetSel, SCROLL_SPEED);
        }.bind(this, scrollTos[clickSel]));
    }


    // header
    var $doc = $(document),
        $header = $('.header'),
        hasScrolledClass = 0,
        now = 0,
        lastUpdate = 0,
        updateHeaderTimeout;

    function updateHeader() {
        var now = new Date().getTime();

        if (now - lastUpdate < 350) {
            updateHeaderTimeout = setTimeout(updateHeader, 350);
            return;
        }

        clearTimeout(updateHeaderTimeout);

        if ($doc.scrollTop() > 200) {
            if (!hasScrolledClass) {
                $header.addClass('scrolled');
                hasScrolledClass = 1;
            }
        } else if (hasScrolledClass) {
            $header.removeClass('scrolled');
            hasScrolledClass = 0;
        }

        lastUpdate = now;
    };

    $(window).on('scroll', updateHeader);

    // read more section
    var $readmore = $('.read-more'),
        renderedVideo;

    $('.btn--read-more').click(function(e) {
      e.preventDefault();
      if ($readmore.hasClass('is-showing')) {
          $readmore.removeClass('is-showing');
      } else {
          $.scrollTo('.read-more', {
              duration: 600,
              offset: -56
          });

          setTimeout(function() {
            $readmore.addClass('is-showing');
          }, 300);

          setTimeout(function() {
            if (!renderedVideo) {
              $('.read-more__video').html(
                '<video autoplay muted loop src="img/making.mp4"></video>'
              );
            }
          }, 800);
      }
    });
});
