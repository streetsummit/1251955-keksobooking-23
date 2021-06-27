import { activateAdForm } from './form.js';
import { activateFilterForm } from './filter.js';

const INITIAL_POINT = {
  lat: 35.68950,
  lng: 139.69171,
};
const INITIAL_MAP_ZOOM = 10;

const map = L.map('map-canvas')
  .setView([INITIAL_POINT.lat, INITIAL_POINT.lng], INITIAL_MAP_ZOOM)
  .on('load', () => {
    activateAdForm();
    activateFilterForm();
  });

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
