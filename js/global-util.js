import { resetActions } from './form.js';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplateElement.querySelector('.error__button');

const declOfNum = (number, words)  => words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createMessage = (template) => {
  const messageElement = template.cloneNode(true);
  document.body.append(messageElement);

  const closeElement = (element) => {
    element.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
    document.removeEventListener('click', onMessageClick);
  };

  //Функции объявлены декларативно для возможности применения всплытия
  function onMessageEscKeydown (evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeElement(messageElement);
    }
  }

  function onMessageClick (evt) {
    evt.preventDefault();
    closeElement(messageElement);
  }

  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onMessageClick);
  errorButton.addEventListener('click', closeElement); // не нравится навешивание обработчика именно здесь, в функции createMessage - при вызове для success он не нужен
};

const createSuccessMessage = () => {
  createMessage(successTemplateElement);
  resetActions();
};

const createErrorMessage = () => createMessage(errorTemplateElement);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export { declOfNum, showAlert, createSuccessMessage, createErrorMessage };
