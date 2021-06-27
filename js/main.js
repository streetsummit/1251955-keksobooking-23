import './mocks/data.js';
import {disableAdForm, activateAdForm, setFormValidity} from './form.js';
import {disableFilterForm, activateFilterForm} from './filter.js';

disableAdForm();
disableFilterForm();

activateAdForm();
activateFilterForm();

setFormValidity();
