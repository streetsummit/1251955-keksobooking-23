import {typesDictionary} from './mocks/data.js';

const adFormElement = document.querySelector('.ad-form');
const priceInput = adFormElement.querySelector('#price');
const typeSelect = adFormElement.querySelector('#type');

const roomNumberSelect = adFormElement.querySelector('#room_number');

const guestNumberSelect = adFormElement.querySelector('#capacity');
const guestNumberOptions = guestNumberSelect.querySelectorAll('option');

const setMinPrice = () => {
  const minPriceValue = typesDictionary[typeSelect.value].price;
  priceInput.setAttribute('placeholder', minPriceValue);
  priceInput.setAttribute('min', minPriceValue);
};

const setFormValidity = () => {
  typeSelect.addEventListener('change', () => {
    setMinPrice();
  });

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

export {setFormValidity};


