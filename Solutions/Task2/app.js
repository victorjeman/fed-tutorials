(function() {

  'use strict';

  $(document).on('click', '.js-add-rectangle', addRectangle);
  $(document).on('click', '.js-remove-rectangle', removeLastRectangle);

  function addRectangle() {
    var number = $('.js-rectangle').length + 1;
    var rectangle = '<div class="rectangle js-rectangle">' + number + '</div>';
    $('.js-container').append(rectangle);
  }

  function removeLastRectangle(number) {
    $('.js-container .js-rectangle:last-child').remove();
  }

})();
