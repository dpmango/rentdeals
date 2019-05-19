///////////
// СALENDAR
///////////
(function($, APP) {
  APP.Plugins.Сalendar = {
    init: function() {
      $('[js-date]').datepicker({
        language: 'en',
      });
    },
  };
})(jQuery, window.APP);
