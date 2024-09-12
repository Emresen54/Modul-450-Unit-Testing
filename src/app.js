const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting');


// getLastElement
const array = [1, 2, 3, 4, 5];
console.log('Letztes Element des Arrays:', getLastElement(array));

// isPalindrome
const word = "Radar";
console.log(`${word} ist ein Palindrom:`, isPalindrome(word)); 

// capitalizeWords
const sentence = "hallo welt";
console.log('Capitalized:', capitalizeWords(sentence)); 

// lengthOfLongestWord
const longSentence = "Die Sonne scheint heute besonders hell";
console.log('Länge des längsten Wortes:', lengthOfLongestWord(longSentence)); 



// Import der Funktionen aus extended_formatting.js
const { uniqueValues, letterFrequency, sortByKey, deepClone, intersection } = require('./extended_formatting');

// Verwenden der Funktionen

// uniqueValues
console.log('Einzigartige Werte:', uniqueValues([1, 2, 3, 2, 4, 1]));  

// letterFrequency
console.log('Buchstabenhäufigkeit:', letterFrequency('Hello World'));  

// sortByKey
const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }];
console.log('Sortierte Nutzer:', sortByKey(users, 'age'));  

// deepClone
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log('Tief geklontes Objekt:', clonedObj);  

// intersection
console.log('Gemeinsame Werte:', intersection([1, 2, 3], [2, 3, 4]));  
