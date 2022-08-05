const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

const hideAllSlides = () => {
  ;[...slides].forEach((slide) => {
    slide.classList.remove('carousel-item-visible')
  })
}

const moveToNextSlide = () => {
  hideAllSlides()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }

  slides[slidePosition].classList.add('carousel-item-visible')
}

const moveToPrevSlide = () => {
  hideAllSlides()

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }

  slides[slidePosition].classList.add('carousel-item-visible')
}

document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide)
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide)
