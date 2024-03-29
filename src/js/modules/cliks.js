//////////
// CICKS
//////////
(function($, APP) {
  APP.Plugins.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        .on('click', '[js-link]', function(e) {
          var dataHref = $(this).data('href');
          if (dataHref && dataHref !== '#') {
            e.preventDefault();
            e.stopPropagation();
            Barba.Pjax.goTo(dataHref);
          }
        })
        // prevent going the same link (if barba is connected)
        .on('click', 'a, [js-link]', function(e) {
          var href = $(this).data('href') || $(this).attr('href');
          var path = window.location.pathname;

          if (href === path.slice(1, path.length)) {
            e.preventDefault();
            e.stopPropagation();
          }
        })
        // open more filter
        .on('click', '[js-open-filters]', function(e) {
          $(this)
            .parent()
            .toggleClass('is-open');
        })

        // tabs popups
        .on('click', '[js-open-popup-tab]', function(e) {
          e.preventDefault();
          var $self = $(this),
            tabIndex = $self.index();
          $self.siblings().removeClass('is-active');
          $self.addClass('is-active');
          // $(".top10__tab").removeClass("is-active");
          $self
            .closest('.popup__inner')
            .find('.popup__tab')
            .removeClass('is-active')
            .css('display', 'none')
            .eq(tabIndex)
            .fadeIn();
        })

        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          // $('body, html').animate({scrollTop: topTarget}, 1000);
          TweenLite.to(window, 1, {
            scrollTo: { y: topTarget, autoKill: false },
            ease: easingSwing,
          });

          return false;
        });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
