// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;

// function reverse(str) {
//   let reverse = []
//   let string = str.split('')
//
//   for(let i = string.length-1; i >= 0; i--) {
//     reverse.push(string[i])
//   }
//
//   return reverse.join('')
// }

// function reverse(str) {
//   let reverse = ''
//
//   for(let char of str) {
//     reverse = char + reverse
//   }
//
//   return reverse
// }
