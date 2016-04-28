jQuery(function($) {
  $('.external-component').each(function(_, e) {
    var $el = $(e);

    $.ajax({
      type: 'GET',
      url: $el.data('external-src'),
      xhrFields: {
        withCredentials: true
      }
    }).then(function(html) {
      $el.replaceWith(html);
    });
  });
});
