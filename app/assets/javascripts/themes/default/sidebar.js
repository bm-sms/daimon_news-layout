jQuery(function($) {
  $(document)
    .on('click', '[data-sidebar]', function(e) {
      var target = $(e.target).data('sidebar');

      $('.sidebar--' + target).modal('show');
    })
    .on('click', '[data-modal-state=visible] + .backdrop', function(e) {
      $(e.target).prev().modal('hide');
    });
});
