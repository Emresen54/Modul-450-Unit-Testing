// Importiere die Funktionen aus extended_formatting.js
module.exports = { uniqueValues, letterFrequency, sortByKey, deepClone, intersection, divide };


// Test-Suite für extended_formatting.js
describe('Tests für extended_formatting Funktionen', () => {

  // Tests für uniqueValues
  test('uniqueValues: Einzigartige Werte', () => {
    expect(uniqueValues([1, 2, 3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
    expect(uniqueValues([])).toEqual([]);
    expect(uniqueValues([5])).toEqual([5]);
  });

  // Tests für letterFrequency
  test('letterFrequency: Buchstabenhäufigkeit', () => {
    expect(letterFrequency('Hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(letterFrequency('Radar')).toEqual({ r: 2, a: 2, d: 1 });
    expect(letterFrequency('Hello, World!')).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
  });

  // Tests für sortByKey
  const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }];
  test('sortByKey: Sortieren nach Schlüssel', () => {
    expect(sortByKey(users, 'age')).toEqual([{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]);
    expect(sortByKey(users, 'name')).toEqual([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }]);
  });

  // Tests für deepClone
  test('deepClone: Tiefes Klonen eines Objekts', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  // Tests für intersection
  test('intersection: Gemeinsame Werte zwischen Arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(intersection([1, 2], [3, 4])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  // Tests für divide
  describe('divide Funktion Tests', () => {
  
    // Positiver Test: Erfolgreiche Division
    test('divide: Erfolgreiche Division', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
    });

    // Negativer Test: Fehler werfen, wenn b 0 ist
    test('divide: Fehler bei Division durch 0', () => {
      expect(() => divide(10, 0)).toThrow('b must be a number and not 0');
    });

    // Negativer Test: Fehler werfen, wenn b keine Zahl ist
    test('divide: Fehler, wenn b keine Zahl ist', () => {
      expect(() => divide(10, 'a')).toThrow('b must be a number and not 0');
      expect(() => divide(10, null)).toThrow('b must be a number and not 0');
    });

  });

});
