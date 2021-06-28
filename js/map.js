import { activateAdForm, setAddress } from './form.js';
import { activateFilterForm } from './filter.js';
import { createOfferList } from './mocks/data.js';
import { createPopupMarkup } from './card.js';

const initialPoint = {
  lat: 35.68950,
  lng: 139.69171,
};
const INITIAL_MAP_ZOOM = 10;
const OFFERS_COUNT = 10;

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 0],
});

const mainPin = L.marker(
  initialPoint,
  {
    icon: mainPinIcon,
    draggable: true,
  }).addTo(map);

mainPin.on('drag', (evt) => {
  setAddress(evt.target.getLatLng());
});

const offers = createOfferList(OFFERS_COUNT);

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 0]},
);

const createPin = (data) => {
  const pin = L.marker(
    data.location,
    {
      icon: pinIcon,
    },
  );
  pin
    .addTo(map)
    .bindPopup(
      createPopupMarkup(data),
    );
};

offers.forEach((offer) => {
  createPin(offer);
});


const initMap = () => {
  map
    .on('load', () => {
      activateAdForm();
      activateFilterForm();
      setAddress(initialPoint);
    })
    .setView([initialPoint.lat, initialPoint.lng], INITIAL_MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

export {initMap};
