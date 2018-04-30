// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverse = []
  let string = str.split('')

  for(let i = string.length-1; i >= 0; i--) {
    reverse.push(string[i])
  }

  return reverse.join('')
}

module.exports = reverse;
