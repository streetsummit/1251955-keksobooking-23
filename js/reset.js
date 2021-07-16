import { resetForm } from './form.js';
import { resetMap } from './map.js';
import { resetFilter } from './filter.js';
import { resetAvatarPreview, resetPhotosPreview } from './photos.js';

const resetFormButton = document.querySelector('.ad-form__reset');

const resetActions = () => {
  resetForm();
  resetMap();
  resetFilter();
  resetAvatarPreview();
  resetPhotosPreview();
};

const setResetButtonClick = (cb) => {
  resetFormButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetActions();
    cb();
  });
};

export { resetActions, setResetButtonClick };
