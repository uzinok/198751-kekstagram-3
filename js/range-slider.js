const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 50,
  step: 1,
  connect: 'lower'
})
