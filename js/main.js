const getRandomNumber = function(min, max, decimalPlaces = 0) {
  if (min < 0 || max < 0 || decimalPlaces < 0) {
    throw new Error('Передаваемые значения не могут быть отрицательными');
  }

  if (min >= max) {
    throw new Error('Минимальное значение не может быть больше максимального или равно ему');
  }

  max = Math.floor(max * 10 ** decimalPlaces) / 10 ** decimalPlaces;
  min = Math.ceil(min * 10 ** decimalPlaces) / 10 ** decimalPlaces;

  if ((max - min).toFixed(decimalPlaces) < Math.pow(10, -decimalPlaces) && (max !== min)) {
    throw new Error('Нет чисел, удовлетворяющих условиям');
  }
  return (min + Math.random() * (max - min)).toFixed(decimalPlaces);
};

getRandomNumber(10.5, 11.5);
getRandomNumber(5, 7.5);
