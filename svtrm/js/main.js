$(document).ready(function() {

    var renderedVideo;

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
        updateHeaderTimeout,
        sentScrollEvent,
        sentBottomScrollEvent;

    function updateHeader() {
        var now = new Date().getTime();

        if (now - lastUpdate < 350) {
            updateHeaderTimeout = setTimeout(updateHeader, 350);
            return;
        }

        clearTimeout(updateHeaderTimeout);

        var scrollTop = $doc.scrollTop();

        if (scrollTop > 200) {
            if (!hasScrolledClass) {
                $header.addClass('scrolled');
                hasScrolledClass = 1;
                loadVideo();
            }

            if (!sentBottomScrollEvent && scrollTop > 4200) {
                ga && ga('send', 'event', 'Page', 'scroll', 'bottom');
                sentBottomScrollEvent = true;
            }
        } else if (hasScrolledClass) {
            $header.removeClass('scrolled');
            hasScrolledClass = 0;
        }

        lastUpdate = now;

        if (!sentScrollEvent && ga) {
            ga('send', 'event', 'Page', 'scroll', 'start');
            sentScrollEvent = true;
        }
    };

    $(window).on('scroll', updateHeader);

    // read more section
    var $readmore = $('.read-more');

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
            loadVideo();
          }, 800);
      }

      ga && ga('send', 'event', 'Page', 'click', 'what-is-upcycled-leather');
    });

    function loadVideo() {
      if (renderedVideo) { return; }

      $('.read-more__video').html(
        '<video autoplay muted loop src="img/making.mp4"></video>'
      );

      renderedVideo = 1;
    };

    function twitterConv() {
        twttr && twttr.conversion.trackPid('nuh43', { 
            tw_sale_amount: 1,
            tw_order_quantity: 1
        });
    };

    // link clicks
    $('.home__img').click(function() {
        ga && ga('send', 'event', 'Page', 'click', 'top-image');
    });
    $('#about5 a').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'backpack');
        twitterConv();
    });
    $('#about3 a').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'weekender');
        twitterConv();
    });
    $('#about2 a').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'doppkit');
        twitterConv();
    });
    $('#about1 a').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'tote');
        twitterConv();
    });
    $('.logo__trmtab').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'trmtab-logo');
    });
    $('.logo__sv').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'sv-logo');
    });
    $('.btn--header').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'shop-collection-header');
        twitterConv();
    });
    $('.btn--footer-shop').click(function(e) {
        ga && ga('send', 'event', 'Page', 'click', 'shop-collection-footer');
        twitterConv();
    });
    $('.social-instagram').click(function() {
        ga && ga('send', 'event', 'Page', 'click', 'instagram');
    });
    $('.social-twitter').click(function() {
        ga && ga('send', 'event', 'Page', 'click', 'twitter');
    });
    $('.social-facebook').click(function() {
        ga && ga('send', 'event', 'Page', 'click', 'facebook');
    });
});
