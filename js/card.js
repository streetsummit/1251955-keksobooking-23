import {declOfNum} from './utils.js';

const DEFAULT_AVATAR = 'img/avatars/default.png';
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

const createPopupMarkup = ({author, offer}) => {
  const popupElement = popupTemplateElement.cloneNode(true);
  const avatarElement = popupElement.querySelector('.popup__avatar');
  const photoListElement = popupElement.querySelector('.popup__photos');
  const featureListElement = popupElement.querySelector('.popup__features');
  const descriptionElement = popupElement.querySelector('.popup__description');
  const photoListElementFragment = document.createDocumentFragment();

  avatarElement.src = author.avatar.length ? author.avatar : DEFAULT_AVATAR;

  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = getType(offer.type);
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${declOfNum(offer.rooms, ROOMS_WORD_FORMS)} для ${offer.guests} ${declOfNum(offer.guests, GUESTS_WORD_FORMS)}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  offer.description
    ? descriptionElement.textContent = offer.description
    : descriptionElement.classList.add('hidden');

  featureListElement.textContent = '';

  if (offer.features) {
    offer.features.forEach((item) => {
      const feature = document.createElement('li');
      const featureClass = `popup__feature--${item}`;
      feature.classList.add('popup__feature', featureClass);
      featureListElement.appendChild(feature);
    });
  } else {
    featureListElement.classList.add('hidden');
  }

  if (offer.photos) {
    offer.photos.forEach((photo) => {
      const photoElement =  photoListElement.querySelector('.popup__photo').cloneNode(true);
      photoElement.src = photo;
      photoListElementFragment.appendChild(photoElement);
    });
    photoListElement.textContent = '';
    photoListElement.appendChild(photoListElementFragment);
  } else {
    photoListElement.classList.add('hidden');
  }
  return popupElement;
};

export {createPopupMarkup, typesDictionary};
