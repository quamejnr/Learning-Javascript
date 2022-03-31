const prompt = require('prompt-sync')({sigint: true});

const noun = prompt("Enter a noun? ");
const verb = prompt('Enter a verb? ');
const adverb = prompt('Enter an adverb? ')
const adjective = prompt('Enter an adjective? ')

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That\'s hilarious`)

