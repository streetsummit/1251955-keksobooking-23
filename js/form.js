import {typesDictionary} from './mocks/data.js';

const COORD_PRECISION = 5;
const adFormElement = document.querySelector('.ad-form');
const adFieldsetElements = adFormElement.querySelectorAll('fieldset');
const priceElement = adFormElement.querySelector('#price');
const typeElement = adFormElement.querySelector('#type');

const roomNumberSelect = adFormElement.querySelector('#room_number');

const guestNumberSelect = adFormElement.querySelector('#capacity');
const guestNumberOptions = guestNumberSelect.querySelectorAll('option');
const addressElement = adFormElement.querySelector('#address');

addressElement.setAttribute('readonly', '');

const disableAdForm = () => {
  adFormElement.classList.add('ad-form--disabled');
  adFieldsetElements.forEach((element) => element.setAttribute('disabled', ''));
};

const activateAdForm = () => {
  adFormElement.classList.remove('ad-form--disabled');
  adFieldsetElements.forEach((element) => element.removeAttribute('disabled'));
};

const onTypeElementChange = () => {
  const minPriceValue = typesDictionary[typeElement.value].price;
  priceElement.setAttribute('placeholder', minPriceValue);
  priceElement.setAttribute('min', minPriceValue);
};

const setFormValidity = () => {
  typeElement.addEventListener('change', onTypeElementChange);

  roomNumberSelect.addEventListener('change', (evt) => {
    const roomNumber = +evt.target.value;

    guestNumberOptions.forEach((element, index) => {
      if (roomNumber === 100 && +element.value === 0) {
        element.disabled = false;
        guestNumberSelect.selectedIndex = index;
      } else if (roomNumber === 100 && +element.value !== 0 || +element.value === 0 || +element.value > roomNumber) {
        element.disabled = true;
      } else {
        element.disabled = false;
        guestNumberSelect.selectedIndex = index;
      }
    });
  });
};

const setAddress = ({lat, lng}) => {
  addressElement.value = `${lat.toFixed(COORD_PRECISION)}, ${lng.toFixed(COORD_PRECISION)}`;
};

export {disableAdForm, activateAdForm, setFormValidity, setAddress};


