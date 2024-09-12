// a. Gibt ein neues Array zurück, das nur die einzigartigen Werte des ursprünglichen Arrays enthält.
const uniqueValues = array => [...new Set(array)];

// b. Gibt ein Objekt zurück, das die Häufigkeit jedes Buchstabens im Wort zählt.
const letterFrequency = word => 
  [...word.toLowerCase()].reduce((acc, letter) => {
    if (/[a-z]/.test(letter)) acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

// c. Gibt ein Array von Objekten zurück, die nach einem bestimmten Schlüssel sortiert sind.
const sortByKey = (array, key) => 
  array.slice().sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));

// d. Gibt ein tief geklontes Objekt zurück.
const deepClone = obj => JSON.parse(JSON.stringify(obj));

// e. Gibt ein Array zurück, das die Werte enthält, die in beiden Eingabe-Arrays vorkommen.
const intersection = (array1, array2) => array1.filter(value => array2.includes(value));

module.exports = { uniqueValues, letterFrequency, sortByKey, deepClone, intersection };
