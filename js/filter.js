const formFilterElement = document.querySelector('.map__filters');
const fieldFilterElements = formFilterElement.children;

const disableFilterForm = () => {
  formFilterElement.classList.add('ad-form--disabled');
  [...fieldFilterElements].forEach((element) => element.setAttribute('disabled', ''));
};

export {disableFilterForm};
