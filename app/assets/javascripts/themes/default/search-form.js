jQuery(function($) {
  var searchFormFlag = 'closed';
  $('.search-form-icon').click(function() {
    if (searchFormFlag == 'closed') {
      $('.search-form').slideDown();
      $('.overlay').css('display', 'block');
      searchFormFlag = 'opened';
    } else {
      $('.search-form').slideUp();
      $('.overlay').css('display', 'none');
      searchFormFlag = 'closed';
    }
  });
});
