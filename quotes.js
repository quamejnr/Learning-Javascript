// Printing Quotes

const prompt = require('prompt-sync')({sigint: true});

const quote = prompt("What is the quote? ");
const person = prompt('Who said it? ');

console.log(`${person} says, "${quote}"`);
console.log(person + ' says, \"' + quote + '\"')
