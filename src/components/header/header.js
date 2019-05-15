//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    data: {
      header: {
        container: undefined,
      },
    },
    init: function(fromPjax) {
      if (!fromPjax) {
        this.getHeaderParams();
        this.hamburgerClickListener();
        this.mobileNaviClickListener();
        this.listenScroll();
        this.listenResize();
      }

      this.controlHeaderClass();
    },
    getHeaderParams: function() {
      var $header = $('.header');

      this.data.header = {
        container: $header,
      };
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');

      APP.Plugins.ScrollBlock.blockScroll(isOnload);
    },
    hamburgerClickListener: function() {
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        APP.Plugins.ScrollBlock.blockScroll();
      });
    },
    mobileNaviClickListener: function() {
      var _this = this;
      _document.on('click', '.mobile-navi', function(e) {
        if ($(e.target).closest('.mobile-navi__wrapper').length === 0) {
          _this.closeMobileMenu();
        }
      });
    },
    listenScroll: function() {
      _window.on('scroll', this.scrollHeader.bind(this));
    },
    listenResize: function() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    scrollHeader: function() {
      if (this.data.header.container !== undefined) {
        var fixedClass = 'is-fixed';
        // get scroll params from blocker function
        var scroll = APP.Plugins.ScrollBlock.getData();

        if (scroll.blocked) return;

        if (scroll.y > 0) {
          this.data.header.container.addClass(fixedClass);
        } else {
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    controlHeaderClass: function() {
      this.data.header.container.attr('data-modifier', false);

      var $modifierElement = $('.page')
        .last()
        .find('[js-header-class]');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    },
  };
})(jQuery, window.APP);
