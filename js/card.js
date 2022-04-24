import {declOfNum} from './utils.js';

const GUESTS_WORD_FORMS = ['гостя', 'гостей', 'гостей'];
const ROOMS_WORD_FORMS = ['комната', 'комнаты', 'комнат'];

const typesDictionary = {
  bungalow: {
    typeName: 'Бунгало',
    price: 0,
  },
  flat: {
    typeName: 'Квартира',
    price: 1000,
  },
  hotel: {
    typeName: 'Отель',
    price: 3000,
  },
  house: {
    typeName: 'Дом',
    price: 5000,
  },
  palace: {
    typeName: 'Дворец',
    price: 10000,
  },
};

const popupTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getType = (type) => typesDictionary[type].typeName;

const createDescriptionMarkup = (container, description) => {
  if (description) {
    container.textContent = description;
  } else {
    container.classList.add('hidden');
  }
};

const createFeatureListMarkup = (container, features) => {
  container.textContent = '';

  const createFeatureItem = (item) => {
    const feature = document.createElement('li');
    const featureClass = `popup__feature--${item}`;
    feature.classList.add('popup__feature', featureClass);
    container.appendChild(feature);
  };

  if (features) {
    features.forEach(createFeatureItem);
  } else {
    container.classList.add('hidden');
  }
};

const createPhotoListMarkup = (container, photos) => {
  const photoListElementFragment = document.createDocumentFragment();

  const createPhotoItem = (photo) => {
    const photoElement =  container.querySelector('.popup__photo').cloneNode(true);
    photoElement.src = photo;
    photoListElementFragment.appendChild(photoElement);
  };

  if (photos) {
    photos.forEach(createPhotoItem);
    container.textContent = '';
    container.appendChild(photoListElementFragment);
  } else {
    container.classList.add('hidden');
  }
};

const createPopupMarkup = ({offer}) => {
  const popupElement = popupTemplateElement.cloneNode(true);
  const photoListElement = popupElement.querySelector('.popup__photos');
  const featureListElement = popupElement.querySelector('.popup__features');
  const descriptionElement = popupElement.querySelector('.popup__description');

  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = getType(offer.type);
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${declOfNum(offer.rooms, ROOMS_WORD_FORMS)} для ${offer.guests} ${declOfNum(offer.guests, GUESTS_WORD_FORMS)}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  createDescriptionMarkup(descriptionElement, offer.description);
  createFeatureListMarkup(featureListElement, offer.features);
  createPhotoListMarkup(photoListElement, offer.photos);

  return popupElement;
};

export {createPopupMarkup, typesDictionary};
