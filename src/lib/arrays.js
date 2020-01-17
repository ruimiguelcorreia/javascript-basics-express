const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let array2 = array.concat(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
      arr.push(numbers[i]);
    }
  }
  return arr;
};

const removeNthElement2 = (index, array) => {
  // let array2 = [...array];
  // array2.splice(index,1);
  return array.filter(element => element != array[index]);
  // return array2;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  const reversed = reverseWordsInArray(strings);
  reversed.sort();
  return reverseWordsInArray(reversed);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
