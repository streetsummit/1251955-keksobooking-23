const GET_DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://25.javascript.pages.academy/keksobooking';


const getData = (onSuccess, onFail) => {
  fetch (GET_DATA_URL)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_DATA_URL,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      response.ok ? onSuccess() : onFail();
    })
    .catch(() => onFail());
};

export { getData, sendData };
