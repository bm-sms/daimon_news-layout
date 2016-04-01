jQuery(function($) {
  $('#mobile-ad').hide();
  var closeFlag = false;

  return false; // TODO モバイル広告の出し方を調整したら、適切な形で復活させる。それまでは広告を表示しない

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500 && !closeFlag) {
      $('#mobile-ad').fadeIn();
    } else {
      $('#mobile-ad').fadeOut();
    }
  });

  $('#mobile-ad-close-btn').click(function (e) {
    e.preventDefault();

    $('#mobile-ad').fadeOut();
    closeFlag = true;
  });
});
