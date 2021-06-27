import './mocks/data.js';
import {createOfferList} from './mocks/data.js';
import {createPopupMarkup} from './card.js';
import {disableAdForm, activateAdForm, setFormValidity} from './form.js';
import {disableFilterForm, activateFilterForm} from './filter.js';

const OFFERS_COUNT = 10;

const offers = createOfferList(OFFERS_COUNT);

const map = document.querySelector('#map-canvas');

disableAdForm();
disableFilterForm();

map.append(createPopupMarkup(offers[0]));

activateAdForm();
activateFilterForm();

setFormValidity();
