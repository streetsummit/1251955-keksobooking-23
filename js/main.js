import './mocks/data.js';
import {createOfferList} from './mocks/data.js';
import {createPopupsMarkup} from './card.js';
import {disableAdForm, activateAdForm, setFormValidity} from './form.js';
import {disableFilterForm, activateFilterForm} from './filter.js';

const OFFERS_COUNT = 10;

const offers = createOfferList(OFFERS_COUNT);

const map = document.querySelector('#map-canvas');

disableAdForm();
disableFilterForm();

map.appendChild(createPopupsMarkup(offers.slice(0, 1)));

activateAdForm();
activateFilterForm();

setFormValidity();
