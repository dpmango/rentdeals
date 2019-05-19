////////////
// property
////////////

(function ($, APP) {
  APP.Components.Property = {
    init: function () {
      $(document).on('click', '.property-tab-link li a', function() {
        var tab = $(this).attr('href');
        $(this)
          .parents('.property-tab-link')
          .find('a')
          .removeClass('property-tab-link_active');
        $(this)
          .addClass('property-tab-link_active');
        $('.property-tab')
          .removeClass('property-tab_active');
        $(tab)
          .addClass('property-tab_active');
        return false;
      });
    },
  };
})(jQuery, window.APP);
