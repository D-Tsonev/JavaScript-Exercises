/* eslint-disable no-undef */
const fns = require('./problems')

describe('This is our demo test function, return an empty array to pass', () => {
  test('should return an empty array', () => {
    expect(fns.demo([])).toEqual([])
  })
})

describe('characterCount', () => {
  test('should sum the total number of characters per item in the array', () => {
    expect(fns.characterCount(['Stay', 'hungry', 'stay', 'foolish'])).toEqual([4, 6, 4, 7])
    expect(fns.characterCount(['Where', 'is', 'the', 'stone'])).toEqual([5, 2, 3, 5])
    expect(fns.characterCount(['Pack', 'it', 'up', 'pack', 'it', 'in', 'let', 'me', 'begin'])).toEqual([4, 2, 2, 4, 2, 2, 3 , 2, 5])
  })
})

describe('convertTemps', () => {
  test('should convert farenheit to celcius for all temperatures in the array', () => {
    expect(fns.convertTemps([23, 140, 212, 41])).toEqual([-5, 60, 100, 5])
    expect(fns.convertTemps([-58, -22, -4, 14])).toEqual([-50, -30, -20, -10])
    expect(fns.convertTemps([104, 122, 158, 176])).toEqual([40, 50, 70, 80])
  })
})

describe('stringsOnly', () => {
  test('should return only the strings of an array', () => {
    expect(fns.stringsOnly([10, 'Mike', '23', NaN, 'elephant'])).toEqual(['Mike', '23', 'elephant'])
    expect(fns.stringsOnly([{}, [], 99, false])).toEqual([])
    expect(fns.stringsOnly(['I', 'am', 'the', 'eggman'])).toEqual(['I', 'am', 'the', 'eggman'])
  })
})

describe('containsFalsey', () => {
  test('should return an array with only falsey values', () => {
    expect(fns.containsFalsey([100, {}, [], 'Mike'])).toEqual([])
    expect(fns.containsFalsey([100, {}, NaN, 'Mike', '', null])).toEqual([NaN, '', null])
    expect(fns.containsFalsey(['What\'s', 'up', 'doc'])).toEqual([])
  })
})

describe('divisibleBy5', () => {
  test('should check if ANY of the array values are divisible by 5', () => {
    expect(fns.divisibleBy5([4, -18, 25, 54])).toEqual(true)
    expect(fns.divisibleBy5([10, -10, 34, 150, 0])).toEqual(true)
  })
  test('should return false if none of the array values are divisible by 5', () => {
    expect(fns.divisibleBy5([42, 38, 21, 1])).toEqual(false)
  })
})

describe('divisibleBy10', () => {
  test('should check if ALL of the array values are divisible by 10', () => {
    expect(fns.divisibleBy10([10, 50, 200])).toEqual(true)
    expect(fns.divisibleBy10([10, -10, 0, 80])).toEqual(true)
  })
  test('should return false if one or more of the array values are not divisible by 10', () => {
    expect(fns.divisibleBy10([10, 130, 55, 7])).toEqual(false)
  })
})

describe('sumOfArray', () => {
  test('should return the sum of an array of numbers', () => {
    expect(fns.sumOfArray([12, 4, 4])).toEqual(20)
  })
  test('should return the sum of an array of stringified numbers and numbers', () => {
    expect(fns.sumOfArray(['32', 1, '10'])).toEqual(43)
  })
})

describe('numberOfVowels', () => {
  test('should find the total number of vowels in the string', () => {
    expect(fns.numberOfVowels('Stay classy San Diego')).toEqual(6)
    expect(fns.numberOfVowels('I love lamp')).toEqual(4)
    expect(fns.numberOfVowels('Whammy!')).toEqual(1)
  })
})

xdescribe('titleCase', () => {
  test('should capitalise the first letter of each word', () => {
    expect(fns.titleCase('The lord of the rings')).toEqual('The Lord Of The Rings')
    expect(fns.titleCase('The red hot chili peppers')).toEqual('The Red Hot Chili Peppers')
  })
})