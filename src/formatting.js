// a. Gibt das letzte Element eines Arrays zurück.
function getLastElement(array) {
    if (array.length === 0) return null;
    return array[array.length - 1];
  }
  
  // b. Prüft, ob das gegebene Wort ein Palindrom ist.
  function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
  
  // c. Wandelt die ersten Buchstaben eines jeden Wortes in Grossbuchstaben um.
  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // d. Gibt die Länge des längsten Wortes in einem Satz zurück.
  function lengthOfLongestWord(sentence) {
    return sentence
      .split(' ')
      .reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
  }
  module.exports = {
    getLastElement,
    isPalindrome,
    capitalizeWords,
    lengthOfLongestWord
  };