jQuery(function($) {
  var moreCategoriesFlag = 'closed';

  $('.menu__more').click(function(e) {
    e.preventDefault();

    if (moreCategoriesFlag == 'closed') {
      $('.menu__items--second').slideDown();
      $('.menu__more .arrow').removeClass('down');
      $('.menu__more .arrow').addClass('up');

      moreCategoriesFlag = 'opened';
    } else {
      $('.menu__items--second').slideUp();
      $('.menu__more .arrow').removeClass('up');
      $('.menu__more .arrow').addClass('down');

      moreCategoriesFlag = 'closed';
    }
  });
});
