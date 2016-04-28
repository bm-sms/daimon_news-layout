jQuery(function($) {
  var actions = {
    show: function($this) {
      if ($this.next('.backdrop').length == 0) {
        var $backdrop = $('<a href="javascript:void(0);" class="backdrop"></a>');

        $this.after($backdrop);
        $backdrop.on('click', function() {
          actions.hide($this);
        });
      }

      $this.attr('data-modal-state', 'visible');
      $('.root-container').attr('data-layer', 'under-dialog');
    },

    hide: function($this) {
      $this.attr('data-modal-state', 'hidden');
      $('.root-container').attr('data-layer', 'top');
    }
  };

  $.fn.modal = function(action) {
    actions[action](this);
  }
});
