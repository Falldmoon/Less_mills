$(document).ready(function () {
  let modal_window = $('.modal-window')[0]
  let black_window = $('.black-window')[0]
  $('.modal__exit').on('click', function() {
  	$(modal_window).removeClass('modal-window_active');
  	$(black_window).removeClass('black-window_active');
  })
});