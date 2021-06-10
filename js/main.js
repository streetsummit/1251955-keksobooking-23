const ADS_COUNT = 10;

const COORDINATES = {
  lat: {
    min: 35.65,
    max: 35.7,
  },
  lng: {
    min: 139.7,
    max:  139.8,
  },
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

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = function(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};


const getRandomLengthArray = (array) => {
  const RandomLengthArray = [];
  array.map((element) => {
    if (Math.round(Math.random())) {
      RandomLengthArray.push(element);
    }
  });
  return RandomLengthArray;
};


const getAvatar = (index) => `img/avatars/user${index < 9 ?  `0${index + 1}` : index + 1}.png`;

// Д20. Константы, используемые внутри функций, создаются вне функций и используются повторно через замыкания.
const similarAds = new Array(ADS_COUNT).fill(null).map((element, index) => {
  const lat = getRandomPositiveFloat(COORDINATES.lat.min, COORDINATES.lat.max, 5);
  const lng = getRandomPositiveFloat(COORDINATES.lng.min, COORDINATES.lng.max, 5);
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

similarAds;
