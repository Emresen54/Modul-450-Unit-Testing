// Import der Funktionen aus formatting.js
const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting');

// Test für getLastElement
test('getLastElement gibt das letzte Element eines Arrays zurück', () => {
  expect(getLastElement([1, 2, 3, 4])).toBe(4);
  expect(getLastElement([])).toBe(null); 
});

// Test für isPalindrome
test('isPalindrome prüft, ob ein Wort ein Palindrom ist', () => {
  expect(isPalindrome('Radar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});

// Test für capitalizeWords
test('capitalizeWords wandelt den ersten Buchstaben jedes Wortes in Grossbuchstaben um', () => {
  expect(capitalizeWords('hallo welt')).toBe('Hallo Welt');
  expect(capitalizeWords('dies ist ein test')).toBe('Dies Ist Ein Test');
});

// Test für lengthOfLongestWord
test('lengthOfLongestWord gibt die Länge des längsten Wortes in einem Satz zurück', () => {
    expect(lengthOfLongestWord('Die Sonne scheint hell')).toBe(7); 
    expect(lengthOfLongestWord('Kurze Wörter')).toBe(6); 
  });
  
