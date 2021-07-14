import { showAlert } from './global-util.js';
import { setFormValidity } from './form.js';
import { setAdFormSubmit } from './send-data.js';
import { initMap, renderPinList } from './map.js';
import { getData } from './api.js';
import { renderPinList, setFilterChange } from './filter.js';
import { setResetButtonClick } from './reset.js';

initMap();
setFormValidity();

getData(
  (offers) => {
    renderPinList(offers);
    setFilterChange(() => renderPinList(offers));
    setResetButtonClick(() => renderPinList(offers));
  },
  () => showAlert('Не удалось получить данные'));

setAdFormSubmit();
