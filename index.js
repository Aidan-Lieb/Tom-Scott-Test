var fs = require('fs')
//defines the variable fs
try {
  var words = fs.readFileSync('words.txt', 'utf8')
} catch (err) {
  console.error(err)
}
//loads words.txt
words = words.split("\n")
//turns words.txt into an array
var badLetters = /[gkmqvwxzio]/
var longestAcceptableWord = ""
//defines the variables badLetters and longestAcceptableWord. the letters in between /[ and ]/ can be changed.
for(var testWord of words) {
//defines the variable testWord
  if(testWord.length <= longestAcceptableWord.length) {
    continue
  }
//tests if testWord is longer than longestAcceptableWord. if not, it goes to the next item in the array
  if(testWord.match(badLetters)) {
    continue
  }
//tests for badLetters. if any are found, it goes to the next item in the array
  longestAcceptableWord = testWord
//if a word has passed both tests, it is now the current longestAcceptableWord
}

console.log(longestAcceptableWord)
//tells console to display longestAcceptableWord