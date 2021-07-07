import { typesDictionary } from './card.js';
import { sendData } from './api.js';
import { createSuccessMessage, createErrorMessage } from './global-util.js';
import { resetMap } from './map.js';


const COORD_PRECISION = 5;
const Capacity = { // roomNumber : validGuestNumbers
  100: [0],
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
};

const adFormElement = document.querySelector('.ad-form');
const adFieldsetElements = adFormElement.querySelectorAll('fieldset');
const priceElement = adFormElement.querySelector('#price');
const typeElement = adFormElement.querySelector('#type');
const roomNumberSelect = adFormElement.querySelector('#room_number');
const guestNumberSelect = adFormElement.querySelector('#capacity');
const guestNumberOptions = guestNumberSelect.querySelectorAll('option');
const addressElement = adFormElement.querySelector('#address');
const timeInElement = adFormElement.querySelector('#timein');
const timeOutElement = adFormElement.querySelector('#timeout');
const resetFormButton = adFormElement.querySelector('.ad-form__reset');

addressElement.setAttribute('readonly', '');

const disableAdForm = () => {
  adFormElement.classList.add('ad-form--disabled');
  adFieldsetElements.forEach((element) => element.setAttribute('disabled', ''));
};

const activateAdForm = () => {
  adFormElement.classList.remove('ad-form--disabled');
  adFieldsetElements.forEach((element) => element.removeAttribute('disabled'));
};

const setMinPrice = () => {
  const minPriceValue = typesDictionary[typeElement.value].price;
  priceElement.setAttribute('placeholder', minPriceValue);
  priceElement.setAttribute('min', minPriceValue);
};

const checkCapacity = () => {
  const roomNumber = +roomNumberSelect[roomNumberSelect.selectedIndex].value;
  const validGuestNumbers = Capacity[roomNumber];
  guestNumberOptions.forEach((element) => {
    const guestNumber = +element.value;
    element.disabled = !validGuestNumbers.includes(guestNumber);
    element.selected = (guestNumber === validGuestNumbers[0]);
  });
};

const onTimeInElementChange = () => {
  timeOutElement.value = timeInElement.value;
};

const onTimeOutElementChange = () => {
  timeInElement.value = timeOutElement.value;
};

const onTypeElementChange = () => {
  setMinPrice();
};

const onRoomNumberSelectChange = () => {
  checkCapacity();
};

const setFormValidity = () => {
  typeElement.addEventListener('change', onTypeElementChange);
  roomNumberSelect.addEventListener('change', onRoomNumberSelectChange);
  timeInElement.addEventListener('change', onTimeInElementChange);
  timeOutElement.addEventListener('change', onTimeOutElementChange);
};

const setAddress = ({lat, lng}) => {
  addressElement.value = `${lat.toFixed(COORD_PRECISION)}, ${lng.toFixed(COORD_PRECISION)}`;
};

const resetActions = () => {
  adFormElement.reset();
  setMinPrice();
  resetMap();
};

const onResetFormButtonClick = (evt) => {
  evt.preventDefault();
  resetActions();
};

resetFormButton.addEventListener('click', onResetFormButtonClick);

checkCapacity();
setMinPrice();

const setAdFormSubmit = () => {
  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(createSuccessMessage, createErrorMessage, formData);
  });
};


export { disableAdForm, activateAdForm, setFormValidity, setAddress, setAdFormSubmit, resetActions };


