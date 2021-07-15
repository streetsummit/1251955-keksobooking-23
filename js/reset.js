import { resetForm } from './form.js';
import { resetMap } from './map.js';
import { resetFilter } from './filter.js';

const resetFormButton = document.querySelector('.ad-form__reset');

const resetActions = () => {
  resetForm();
  resetMap();
  resetFilter();
};

const setResetButtonClick = (cb) => {
  resetFormButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetActions();
    cb();
  });
};

export { resetActions, setResetButtonClick };
