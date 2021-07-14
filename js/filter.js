const formFilterElement = document.querySelector('.map__filters');
const fieldFilterElements = formFilterElement.children;

const disableFilterForm = () => {
  formFilterElement.classList.add('ad-form--disabled');
  [...fieldFilterElements].forEach((element) => element.setAttribute('disabled', ''));
};

const activateFilterForm = () => {
  formFilterElement.classList.remove('ad-form--disabled');
  [...fieldFilterElements].forEach((element) => element.removeAttribute('disabled'));
};

const resetFilter = () => {
  formFilterElement.reset();
};

export {disableFilterForm, activateFilterForm, resetFilter };

