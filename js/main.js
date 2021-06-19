import './mocks/data.js';
import {createOfferList} from './mocks/data.js';
import {createPopupsMarkup} from './card.js';


const OFFERS_COUNT = 10;

const offers = createOfferList(OFFERS_COUNT);

const map = document.querySelector('#map-canvas');
map.appendChild(createPopupsMarkup(offers.slice(0, 1)));
