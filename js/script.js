// Переменные
const formWriteUs = document.querySelector(`.modal-write-us`);
const modalMap = document.querySelector(`.modal-map`);
const openWriteUsPopup = document.querySelector(`.open-write-us-popup`);
const openMap = document.querySelector(`.go-to-google-maps`);
const closeWriteUsPopup = document.querySelector(`.write-us-close`);
const closeMap = document.querySelector(`.map-close`);
const buttonServices = document.querySelectorAll(`.btn-services`);
const servicesDescription = document.querySelectorAll(`.services-description`);
const advantagesSlider = [...document.querySelectorAll(`.slider`)];
const sliderButtonsPrev = document.querySelectorAll(`.slider-btn-prev-slide`);
const sliderButtonsNext = document.querySelectorAll(`.slider-btn-next-slide`);
const searchInput = document.querySelector(`#search`);
const searchParagraph = document.querySelector(`.top-menu-search`);
const dirIcons = document.querySelectorAll(`.icon-dir`);
const sortTypes = document.querySelectorAll(`.sort-type`);
const banner = document.querySelector(`.banner`);
const buyButtons = document.querySelectorAll(`.buy`);
const btnBannerClose = document.querySelector(`.banner-close`);
let paginationButtons = [...document.querySelectorAll(`.pagination-item`)];
const basket = document.querySelector(`.top-menu-basket`);
const bookmark = document.querySelector(`.top-menu-bookmark`);
const bookmarkButtons = document.querySelectorAll(`.bookmark`);
const buttonContinueShopping = document.querySelector(`.btn-continue-shopping`);
const sendWriteUsForm =document.querySelector(`.btn-write-us-submit`);
const writeUsPersonName = document.querySelector(`#modal-person-name`);
const writeUsPersonEmail = document.querySelector(`#modal-person-email`);
const writeUsText = document.querySelector(`#modal-person-message`);
let basketEnumerator = 0;
let bookmarkEnumerator = 0;


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

const getIndexElementInArray = (arr, className, availability) => {
  if (availability) {
    for (const i of arr) {
      if (i.classList.contains(className)) {
        return arr.indexOf(i);
      }
    }
  } else {
    for (const i of arr) {
      if (!i.classList.contains(className)) {
        return arr.indexOf(i);
      }
    }
  }

  return 0;
}

const makeAllSlidesInvisible = () => {
  for (const slide of advantagesSlider) {
    slide.classList.add(`invisible`);
  }
}

const changeFillIconDir = () => {
  for (const i of dirIcons) {
    i.classList.remove(`current-icon-dir`);
  }
}

const changeFillCurrentDir = (iconDir) => {
  iconDir.classList.add(`current-icon-dir`);
}

const removeClassFromSortType = () => {
  for (const it of sortTypes) {
    it.classList.remove(`current-sort-type`);
  }
}

const setCurrentClassInSortType = (sortType) => {
  sortType.classList.add(`current-sort-type`);
}

const removeClassFromPagination = () => {
  for (const btnPagination of paginationButtons) {
    btnPagination.classList.remove(`pagination-current`);
  }
}

const setClassForPagination = (btnPagination) => {
  btnPagination.classList.add(`pagination-current`);
}

const getNextPagination = () => {
  paginationButtons = [...document.querySelectorAll(`.pagination-item`)];
  let elementNumber = getIndexElementInArray(paginationButtons, `pagination-current`, true);
  elementNumber++;
  if (elementNumber < paginationButtons.length - 1) {
    removeClassFromPagination();
    paginationButtons[elementNumber].classList.add(`pagination-current`);
  }
}

// Обработчики событий
if (openWriteUsPopup) {
  openWriteUsPopup.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    formWriteUs.classList.add(`open-popup`);
    formWriteUs.classList.add(`show-modal-write-us`);
    formWriteUs.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 215) + `px`;
    formWriteUs.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;

    setTimeout(() => {
      formWriteUs.classList.remove(`show-modal-write-us`);
    }, 1000);
  });
}

if(openMap) {
  openMap.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalMap.classList.add(`open-popup`);
    modalMap.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 225) + `px`;
    modalMap.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 470) + `px`;
  });
}

if (closeWriteUsPopup){
  closeWriteUsPopup.addEventListener(`click`, () => {
    formWriteUs.classList.remove(`form-error`);
    formWriteUs.classList.remove(`open-popup`);
  });
}

if (closeMap){
  closeMap.addEventListener(`click`, () => {
    modalMap.classList.remove(`open-popup`);
  });
}

for (const i of buttonServices) {
  i.addEventListener(`click`, (evt) => {
    changeServicesDescription(evt);
  });
}

for (const sliderBtnNext of sliderButtonsNext) {
  sliderBtnNext.addEventListener(`click`, (evt) => {
    let numberSlide = getIndexElementInArray(advantagesSlider, `invisible`, false);
    makeAllSlidesInvisible();
    numberSlide++;
    if ((numberSlide) >= advantagesSlider.length) {
      advantagesSlider[0].classList.remove(`invisible`);
    } else {
      advantagesSlider[numberSlide].classList.remove(`invisible`);
    }
  });
}

for (const sliderBtnPrev of sliderButtonsPrev) {
  sliderBtnPrev.addEventListener(`click`, (evt) => {
    let numberSlide = getIndexElementInArray(advantagesSlider, `invisible`, false);
    makeAllSlidesInvisible();
    numberSlide--;
    if ((numberSlide) < 0) {
      advantagesSlider[advantagesSlider.length - 1].classList.remove(`invisible`);
    } else {
      advantagesSlider[numberSlide].classList.remove(`invisible`);
    }
  })
}

for (const iconDir of dirIcons) {
  iconDir.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    changeFillIconDir();
    changeFillCurrentDir(iconDir);
  });
}

for (const sortType of sortTypes) {
  sortType.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    removeClassFromSortType();
    setCurrentClassInSortType(sortType);
  });
}

for (const buyBtn of buyButtons) {
  buyBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    basket.classList.add(`not-empty`);
    banner.classList.add(`open-popup`);
    banner.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 200) + `px`;
    banner.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;
    basket.children[0].textContent = `Корзина: ${++basketEnumerator}`;
  });
}

for (const bookmarkBtn of bookmarkButtons) {
  bookmarkBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    bookmark.classList.add(`not-empty`);
    bookmark.children[0].textContent = `Закладки: ${++bookmarkEnumerator}`;
  });
}

if (btnBannerClose) {
  btnBannerClose.addEventListener(`click`, () => {
    banner.classList.remove(`open-popup`);
  });
}

for (const btnPagination of paginationButtons) {
  btnPagination.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (btnPagination.classList.contains(`pagination-next`)) {
      getNextPagination();
    } else {
      removeClassFromPagination();
      setClassForPagination(btnPagination);
    }
  });
}

searchInput.addEventListener(`focus`, () => {
  searchParagraph.classList.add(`input-focus`);
});

searchInput.addEventListener(`blur`, () => {
  searchParagraph.classList.remove(`input-focus`);
});

buttonContinueShopping.addEventListener(`click`, () => {
  btnBannerClose.click();
});

if (sendWriteUsForm) {
  sendWriteUsForm.addEventListener(`click`, (evt) => {
    if (!writeUsPersonName.validity.valid || !writeUsPersonEmail.validity.valid || !writeUsText.validity.valid) {
      formWriteUs.classList.add(`form-error`);
      setTimeout(() => {
        formWriteUs.classList.remove(`form-error`);
      }, 500);
    }
  });
}
