const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const getRandomLengthArray = (array) => {
  const dataArray = array.slice();
  const randomLengthArray = [];
  const randomLength = getRandomPositiveInteger(0, dataArray.length);
  for (let i = 0; i < randomLength; i++)
  {
    const position = getRandomPositiveInteger(0, dataArray.length - 1);
    const element = dataArray.splice(position, 1)[0];
    randomLengthArray.push(element);
  }
  return randomLengthArray;
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  getRandomLengthArray
};
