import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  getRandomLengthArray
} from './util.js';

const OFFERS_COUNT = 10;

const Coordinates = {
  LAT_MIN: 35.65,
  LAT_MAX: 35.7,
  LNG_MIN: 139.7,
  LNG_MAX:  139.8,
};

const PRICE = {
  min: 0,
  max: 1000000,
};

const ROOMS = {
  min: 0,
  max: 100,
};

const GUESTS = {
  min: 0,
  max: 100,
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHEKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getAvatar = (index) => `img/avatars/user${index < 9 ?  `0${index + 1}` : index + 1}.png`;

const createOfferList = () => new Array(OFFERS_COUNT).fill(null).map((element, index) => {
  const lat = getRandomPositiveFloat(Coordinates.LAT_MIN, Coordinates.LAT_MAX, 5);
  const lng = getRandomPositiveFloat(Coordinates.LNG_MIN, Coordinates.LNG_MAX, 5);
  return {
    author: {
      avatar: getAvatar(index),
    },
    offer: {
      title:  `Заголовок объекта № ${index + 1}`,
      address: `${lat}, ${lng}`,
      price: getRandomPositiveInteger(PRICE.min, PRICE.max),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(ROOMS.min, ROOMS.max),
      guests: getRandomPositiveInteger(GUESTS.min, GUESTS.max),
      checkin: getRandomArrayElement(CHEKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomLengthArray(FEATURES),
      description: `Описание объекта № ${index + 1}`,
      photos: getRandomLengthArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
});

export {createOfferList};
