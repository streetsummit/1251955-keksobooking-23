import {typesDictionary} from './mocks/data.js';

const adFormElement = document.querySelector('.ad-form');
const priceInput = adFormElement.querySelector('#price');
const typeSelect = adFormElement.querySelector('#type');

const setMinPrice = () => {
  const minPriceValue = typesDictionary[typeSelect.value].price;
  priceInput.setAttribute('placeholder', minPriceValue);
  priceInput.setAttribute('min', minPriceValue);
};

const setFormValidity = () => {
  typeSelect.addEventListener('change', () => {
    setMinPrice();
  });

};

export {setFormValidity};
