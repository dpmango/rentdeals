// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import Swiper from 'swiper';
import magnificPopup from 'magnific-popup';
import scrollMonitor from 'scrollmonitor';
import validate from 'jquery-validation';
import mask from 'jquery-mask-plugin';
import selectric from 'jquery-selectric';
import Barba from 'barba.js';
import Lazy from 'jquery-lazy';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import air_datepicker from 'air-datepicker';
import datepicker_en from 'air-datepicker/src/js/i18n/datepicker.en.js';

// expose imports to window to use in app.js
// (jquery is exposed in expose-loader)
// window.jQuery = $;
// window.$ = $;
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.Swiper = Swiper;
window.magnificPopup = magnificPopup;
window.scrollMonitor = scrollMonitor;
window.validate = validate;
window.mask = mask;
window.selectric = selectric;
window.Barba = Barba;
window.Lazy = Lazy;
window.ScrollToPlugin = ScrollToPlugin;
window.TweenMax = TweenMax;
window.debounce = debounce;
window.throttle = throttle;
window.Сalendar = air_datepicker;
