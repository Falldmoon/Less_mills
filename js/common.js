$(document).ready(function () {
  let modal_window = $('.modal-window')[0]
  let black_window = $('.black-window')[0]

  let modal_input = $('.modal-form__input')[1]
  $(modal_input).mask('+7 (999) 99-99-999')
  $('.modal__exit').on('click', function() {
  	$(modal_window).removeClass('modal-window_active');
  	$(black_window).removeClass('black-window_active');
  })
  $('.header-plus__add').on('click', function() {
    let parent = $(this).parent()
    $(parent).toggleClass('header-plus__active')
  })
  let timerId = setTimeout(function tick() {
    let arr__plus = $('.header-plus_abc');
    let rand = Math.floor(Math.random() * arr__plus.length);
    let plus__element = arr__plus[rand];
    for (let i = arr__plus.length - 1; i >= 0; i--) {
      $(arr__plus[i]).removeClass('header-plus__active')
    }
    $(plus__element).addClass('header-plus__active')
    timerId = setTimeout(tick, 4000); // (*)
  }, 4000);
  // Определяем массив
  let arr__plus = $('.header-plus_abc');
  let rand = Math.floor(Math.random() * arr__plus.length);
  let plus__element = arr__plus[rand];
  $(plus__element).addClass('header-plus__active')
  $('.feedback-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace)  {
        return;
      }
      var carousel = e.relatedTarget;
      let slider__all = carousel.items().length
      slider__all = '<span>'+ slider__all +'</span>'
      let slider__count = carousel.relative(carousel.current()) + 1
      if (parseInt(slider__count) < 10) {
      	slider__count = '0' + slider__count
      }
      $('.slider-counter').html(slider__count + ' /' + slider__all);
    }).owlCarousel({
		items: 5,
		nav: true,
		loop: true,
		dots: false,
		center: true,
		touchDrag  : false,
		mouseDrag  : false,
		navText: ['<span class="arrows-slider arrows-slider__left','<span class="arrows-slider arrows-slider__right'],
  });

});