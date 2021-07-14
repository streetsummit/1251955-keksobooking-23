import { showAlert, debounce } from './global-util.js';
import { setFormValidity, disableAdForm } from './form.js';
import { setAdFormSubmit } from './send-data.js';
import { initMap } from './map.js';
import { getData } from './api.js';
import { renderPinList, setFilterChange, activateFilterForm, disableFilterForm } from './filter.js';
import { setResetButtonClick } from './reset.js';

const RERENDER_DELAY = 500;

disableFilterForm();
disableAdForm();
initMap();
setFormValidity();

getData(
  (offers) => {
    renderPinList(offers);
    setFilterChange(debounce(
      () => renderPinList(offers),
      RERENDER_DELAY,
    ));
    setResetButtonClick(() => renderPinList(offers));
    activateFilterForm();
    setAdFormSubmit(() => renderPinList(offers));
  },
  () => {
    showAlert('Не удалось получить данные');
    setAdFormSubmit();
  });
