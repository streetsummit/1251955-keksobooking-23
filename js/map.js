import { activateAdForm, setAddress } from './form.js';
import { activateFilterForm } from './filter.js';

const INITIAL_POINT = {
  lat: 35.68950,
  lng: 139.69171,
};
const INITIAL_MAP_ZOOM = 10;


const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 0],
});

const mainPin = L.marker(
  INITIAL_POINT,
  {
    icon: mainPinIcon,
    draggable: true,
  }).addTo(map);

mainPin.on('drag', (evt) => {
  setAddress(evt.target.getLatLng());
});

const initMap = () => {
  map
    .on('load', () => {
      activateAdForm();
      activateFilterForm();
      setAddress(INITIAL_POINT);
    })
    .setView([INITIAL_POINT.lat, INITIAL_POINT.lng], INITIAL_MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

export {initMap};
