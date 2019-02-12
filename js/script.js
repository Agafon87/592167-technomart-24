const formWriteUs = document.querySelector(`.modal-write-us`);
const openWriteUsPopup = document.querySelector(`.open-write-us-popup`);
const closeWriteUsPopup = document.querySelector(`.btn-close`);

openWriteUsPopup.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  formWriteUs.classList.add(`open-popup`);
  // alert(`текущая прокрутка ${document.documentElement.clientWidth} px`);
  formWriteUs.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 200) + `px`;
  formWriteUs.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 310) + `px`;
});

closeWriteUsPopup.addEventListener(`click`, () => {
  formWriteUs.classList.remove(`open-popup`);
});
