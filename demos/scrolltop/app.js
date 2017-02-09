/*jshint esversion: 6 */

// ARTICLES:
//
// https://medium.freecodecamp.com/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb#.76wyogqpe
//
// TODOS:
//
// TODO 1: Make use of Debouncing here

(($) => {

  'use strict';

  // ----------------------------------------------------------------
  // CACHE THE DOM
  // ----------------------------------------------------------------

  let $scrollButton = $('.js-scroll-top-btn');
  let $document = $(document);





  // ----------------------------------------------------------------
  // ADD LISTENERS
  // ----------------------------------------------------------------

  $scrollButton.on('click', scrollTop);
  $document.on('scroll', toggleScrollButton); // [ TODO 1 ]





  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------

  // Scroll the page
  function scrollTop() {

    let duration = 1000;
    let scrollTop = 0;

    $('html, body').animate({
      scrollTop: scrollTop
    }, duration);

    console.log('LOG: SCROLLING TOP');

  }


  // Hide the scroll button when we are at the very top of the page
  function toggleScrollButton() {

    if ($document.scrollTop() > 80) {
      $scrollButton.fadeIn("slow");
    } else {
      $scrollButton.fadeOut("slow");
    }

    console.log('LOG: WATCHING SCROLL EVENT');

  }


})(jQuery);
