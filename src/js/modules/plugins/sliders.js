//////////
// SLIDERS
//////////
(function ($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        topCities: {
          instance: undefined,
          disableOn: 568,
        },
      },
    },
    init: function () {
      this.initSwipers();
      this.initResponsiveSwipers();
      this.listenResize();
    },
    listenResize: function () {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function () {
      // EXAMPLE SWIPER
      new Swiper('[js-slider]', {
        wrapperClass: 'swiper-wrapper',
        slideClass: 'example-slide',
        direction: 'horizontal',
        loop: false,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        // loop: true,
        normalizeSlideIndex: true,
        // centeredSlides: true,
        freeMode: true,
        // effect: 'fade',
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.example-next',
          prevEl: '.example-prev',
        },
        breakpoints: {
          // when window width is <= 992px
          992: {
            autoHeight: true,
          },
        },
      });

      new Swiper('[js-slider-results]', {
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        direction: 'horizontal',
        loop: false,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        normalizeSlideIndex: true,
        speed: 800,
        // freeMode: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-result-next',
          prevEl: '.swiper-result-prev',
        },
      });

      new Swiper('[js-slider-home]', {
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        direction: 'horizontal',
        loop: false,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        loop: false,
        normalizeSlideIndex: true,
        speed: 800,
        // freeMode: true,
        // autoplay: {
        //   delay: 5000,
        // },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },

    initResponsiveSwipers: function () {
      var topCities = '[js-slider-topcities-mobile]';
      if ($(topCities).length > 0) {
        this.initFeaturedProductsSwiper(topCities);
      }
    },
    initFeaturedProductsSwiper: function (selector) {
      var dataObj = this.data.responsiveSwipers.topCities;

      if ($(selector).length > 0) {
        if (window.innerWidth >= dataObj.disableOn) {
          if (dataObj.instance !== undefined) {
            dataObj.instance.destroy(true, true);
            dataObj.instance = undefined;
          }
        } else {
          if (dataObj.instance === undefined) {
            dataObj.instance = new Swiper(selector, {
              slidesPerView: 'auto',
              slideClass: 'top-cities__col',
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
              freeMode: true,
              freeModeSticky: true,
              spaceBetween: 12,
            });
          }
        }
      }
    },
    destroy: function () {
      // ... code ...
    },
  };
})(jQuery, window.APP);
