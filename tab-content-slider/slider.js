'use strict';
/*
 Button(s) toggle
 */
$('button').click(function(e) {
  e.preventDefault();
  $('button.active').removeClass('active');
  $(this).addClass('active');
});

/*
 Sliding effect w/css x-axis translate
 */
$('#tab1-btn').click(function(e) {
  e.preventDefault();
  $('#slider').css('transform', 'translate(0%, 0px)');
});

$('#tab2-btn').click(function(e) {
  e.preventDefault();
  $('#slider').css('transform', 'translate(-100%, 0px)');
});

$('#tab3-btn').click(function(e) {
  e.preventDefault();
  $('#slider').css('transform', 'translate(-200%, 0px)');
});
