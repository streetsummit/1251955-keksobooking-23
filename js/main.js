import { showAlert } from './global-util.js';
import { setFormValidity } from './form.js';
import { setAdFormSubmit } from './send-data.js';
import { initMap, renderPinList } from './map.js';
import { getData } from './api.js';

const OFFERS_COUNT = 10;

initMap();
setFormValidity();

getData((offers) => renderPinList(offers.slice(0, OFFERS_COUNT)),
  () => showAlert('Не удалось получить данные'));

setAdFormSubmit();
