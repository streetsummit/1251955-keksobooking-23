import './map.js';
import { showAlert } from './global-util.js';
import {setFormValidity, setAdFormSubmit } from './form.js';
import { initMap, renderPinList } from './map.js';
import { getData } from './api.js';

const OFFERS_COUNT = 10;

initMap();
setFormValidity();

getData((offers) => renderPinList(offers.slice(0, OFFERS_COUNT)),
  () => showAlert('Не удалось получить данные'));

setAdFormSubmit();
