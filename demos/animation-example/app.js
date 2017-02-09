/*jshint esversion: 6 */

// ARTICLES:
//

(($) => {

  'use strict';

  // ----------------------------------------------------------------
  // CACHE THE DOM
  // ----------------------------------------------------------------

  let $toggleButtonDiagonal = $('.js-toggle-diagonal');
  let $toggleButtonVertical = $('.js-toggle-vertical');
  let $resetButton = $('.js-reset-animation');
  let $objectToAnimate = $('.js-rectangle');





  // ----------------------------------------------------------------
  // ADD LISTENERS
  // ----------------------------------------------------------------

  $toggleButtonDiagonal.on('click', startAnimationDiagonal);
  $toggleButtonVertical.on('click', startAnimationVertical);
  $resetButton.on('click', resetAnimation);





  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------

  // Start animating the object on diagonal axis

  function startAnimationDiagonal() {

    $objectToAnimate.addClass('animation-start-diagonal');

    console.log('LOG: START ANIMATION ON DIAGONAL');

  }


  // Start animating the object on vertical axis

  function startAnimationVertical() {

    $objectToAnimate.addClass('animation-start-vertical');

    console.log('LOG: START ANIMATION ON VERTICAL');

  }


  function resetAnimation() {
    $objectToAnimate.removeClass('animation-start-vertical animation-start-diagonal');
  }



})(jQuery);
