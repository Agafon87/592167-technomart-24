// Переменные
const formWriteUs = document.querySelector(`.modal-write-us`);
const modalMap = document.querySelector(`.modal-map`);
const openWriteUsPopup = document.querySelector(`.open-write-us-popup`);
const openMap = document.querySelector(`.contacts-map img`);
const closeWriteUsPopup = document.querySelector(`.btn-close`);
const buttonServices = document.querySelectorAll(`.btn-services`);
const servicesDescription = document.querySelectorAll(`.services-description`);
const advantagesSlider = [...document.querySelectorAll(`.slider`)];
const sliderButtonsPrev = document.querySelectorAll(`.slider-btn-prev-slide`);
const sliderButtonsNext = document.querySelectorAll(`.slider-btn-next-slide`);
const searchInput = document.querySelector(`#search`);
const searchParagraph = document.querySelector(`.top-menu-search`);

// Функции
const changeServicesDescription = (servicesButton) => {

  for (const i of servicesDescription) {
    i.classList.add(`invisible`);
  }

  for (const i of buttonServices) {
    i.classList.remove(`btn-service-current`);
  }

  [...servicesDescription].filter((it) => {
    return it.dataset.services === servicesButton.target.id
  })[0].classList.remove(`invisible`);

  [...buttonServices].filter((it) => {
    return it.id === servicesButton.target.id
  })[0].classList.add(`btn-service-current`);
}

const getIndexElementInArray = (arr) => {
  let numberSlide = 0;
  for (const i of arr) {
    if (!i.classList.contains(`invisible`)) {
      return arr.indexOf(i);
    }
  }

  return numberSlide;
}

const makeAllSlidesInvisible = () => {
  for (const slide of advantagesSlider) {
    slide.classList.add(`invisible`);
  }
}

// Обработчики событий
openWriteUsPopup.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  formWriteUs.classList.add(`open-popup`);
  formWriteUs.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 200) + `px`;
  formWriteUs.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;
});

openMap.addEventListener(`click`, () => {
  modalMap.classList.add(`open-popup`);
  modalMap.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 200) + `px`;
  modalMap.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;
});

closeWriteUsPopup.addEventListener(`click`, () => {
  formWriteUs.classList.remove(`open-popup`);
});

for (const i of buttonServices) {
  i.addEventListener(`click`, (evt) => {
    changeServicesDescription(evt);
  });
}

for (const sliderBtnNext of sliderButtonsNext) {
  sliderBtnNext.addEventListener(`click`, (evt) => {
    let numberSlide = getIndexElementInArray(advantagesSlider);
    makeAllSlidesInvisible();
    numberSlide++;
    if ((numberSlide) >= advantagesSlider.length) {
      advantagesSlider[0].classList.remove(`invisible`);
    }
    advantagesSlider[numberSlide].classList.remove(`invisible`);
  });
}

for (const sliderBtnPrev of sliderButtonsPrev) {
  sliderBtnPrev.addEventListener(`click`, (evt) => {
    let numberSlide = getIndexElementInArray(advantagesSlider);
    makeAllSlidesInvisible();
    numberSlide--;
    if ((numberSlide) < 0) {
      advantagesSlider[advantagesSlider.length - 1].classList.remove(`invisible`);
    }
    advantagesSlider[numberSlide].classList.remove(`invisible`);
  })
}

searchInput.addEventListener(`focus`, () => {
  searchParagraph.classList.add(`input-focus`);
});

searchInput.addEventListener(`blur`, () => {
  searchParagraph.classList.remove(`input-focus`);
});
