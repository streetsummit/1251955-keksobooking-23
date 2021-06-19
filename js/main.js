import './mocks/data.js';
import {offers, createPopupsMarkup} from './card.js';

const map = document.querySelector('#map-canvas');
map.appendChild(createPopupsMarkup(offers.slice(0, 1)));
