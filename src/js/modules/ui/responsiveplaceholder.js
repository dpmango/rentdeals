//////////
// Responsive placeholder
//////////
(function($, APP) {
  APP.Plugins.ResponsivePlaceholder = {
    init: function() {
      this.setPlaceholders();
      _window.on('resize', debounce(this.setPlaceholders.bind(this), 100));
    },
    setPlaceholders: function() {
      var $elements = $('[js-responsive-placeholder]');
      if ($elements.length === 0) return;

      $elements.each(function(i, input) {
        var $input = $(input);
        var wWidth = window.innerWidth;
        var dataMobilePlaceholder = $(input).data('placeholder-mobile');
        var dataDesktopPlaceholder = $(input).data('placeholder-desktop');

        if (wWidth >= 769) {
          $input.attr('placeholder', dataDesktopPlaceholder);
        } else {
          $input.attr('placeholder', dataMobilePlaceholder);
        }
      });
    },
  };
})(jQuery, window.APP);
