import { isEscEvent } from './global-util.js';
import { resetActions } from './reset.js';
import { adFormElement } from './form.js';
import { sendData } from './api.js';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplateElement.querySelector('.error__button');

const createMessage = (template) => {
  const messageElement = template.cloneNode(true);
  document.body.append(messageElement);

  const onMessageEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMessage(messageElement);
    }
  };

  const onMessageClick =  (evt) => {
    evt.preventDefault();
    closeMessage(messageElement);
  };

  const onErrorButtonClick = (evt) => {
    evt.preventDefault();
    closeMessage(messageElement);
  };

  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onMessageClick);
  errorButton.addEventListener('click', onErrorButtonClick); // Обработчик не навешивается на кнопку

  //Функция объявлена декларативно для возможности применения всплытия
  function closeMessage (message) {
    message.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
    document.removeEventListener('click', onMessageClick);
  }
};

const handleSuccess = () => {
  createMessage(successTemplateElement);
  resetActions();
};

const handleError = () => createMessage(errorTemplateElement);

const setAdFormSubmit = () => {
  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(handleSuccess, handleError, formData);
  });
};


export { setAdFormSubmit };
