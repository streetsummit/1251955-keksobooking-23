import {TYPES} from './mocks/data.js';
import {declOfNum} from './global-util.js';

const DEFAULT_AVATAR = 'img/avatars/default.png';
const GUESTS_WORD_FORMS = ['гостя', 'гостей', 'гостей'];
const ROOMS_WORD_FORMS = ['комната', 'комнаты', 'комнат'];


const popupTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getType = (type) => TYPES[type];

const createPopupsMarkup = (array) => {
  const popupListFragment = document.createDocumentFragment();

  array.forEach(({author, offer}) => {
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
    descriptionElement.textContent = offer.description;

    featureListElement.textContent = '';
    offer.features.forEach((item) => {
      const feature = document.createElement('li');
      const featureClass = `popup__feature--${item}`;
      feature.classList.add('popup__feature', featureClass);
      featureListElement.appendChild(feature);
    });

    offer.photos.forEach((photo) => {
      const photoElement =  photoListElement.querySelector('.popup__photo').cloneNode(true);
      photoElement.src = photo;
      photoListElementFragment.appendChild(photoElement);
    });
    photoListElement.textContent = '';
    photoListElement.appendChild(photoListElementFragment);

    const checkDataAvailable = (content, element) => {
      if (!content.length) {
        element.classList.add('hidden');
      }
    };

    checkDataAvailable(offer.features, featureListElement);
    checkDataAvailable(offer.photos, photoListElement);
    checkDataAvailable(offer.description, descriptionElement);

    popupListFragment.appendChild(popupElement);
  });

  return popupListFragment;
};

export {createPopupsMarkup};
