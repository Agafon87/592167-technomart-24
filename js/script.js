const formWriteUs = document.querySelector(`.modal-write-us`);
const openWriteUsPopup = document.querySelector(`.open-write-us-popup`);
const closeWriteUsPopup = document.querySelector(`.btn-close`);
const buttonServices = document.querySelectorAll(`.btn-services`);
const servicesDescription = document.querySelectorAll(`.services-description`);

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

openWriteUsPopup.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  formWriteUs.classList.add(`open-popup`);
  formWriteUs.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 200) + `px`;
  formWriteUs.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;
});

closeWriteUsPopup.addEventListener(`click`, () => {
  formWriteUs.classList.remove(`open-popup`);
});

for (const i of buttonServices) {
  i.addEventListener(`click`, (evt) => {
    changeServicesDescription(evt);
  });
}
