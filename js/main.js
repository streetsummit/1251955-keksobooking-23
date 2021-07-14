import { showAlert } from './global-util.js';
import { setFormValidity, disableAdForm } from './form.js';
import { setAdFormSubmit } from './send-data.js';
import { initMap } from './map.js';
import { getData } from './api.js';
import { renderPinList, setFilterChange, activateFilterForm, disableFilterForm } from './filter.js';
import { setResetButtonClick } from './reset.js';

disableFilterForm();
disableAdForm();
initMap();
setFormValidity();

getData(
  (offers) => {
    renderPinList(offers);
    setFilterChange(() => renderPinList(offers));
    setResetButtonClick(() => renderPinList(offers));
    activateFilterForm();
  },
  () => showAlert('Не удалось получить данные'));

setAdFormSubmit();
