const prompt = require('prompt-sync')({signint: true});
const firstName = prompt("What is your name? ");

console.log("Hello, " + firstName + " nice to meet you.");

// Challenge 1
const input = require("prompt-sync")({signint: true})
console.log("Hello, " + input("What is your name? ") + " nice to meet you.");

// Challenge 2
// const question = require('prompt-sync')({signint: true});
// const name = question("What is your name? ");

// try {
//     // if (name ='') throw 'Kindly provide name.';
//     if (isNaN(name) == NaN) throw "Name cannnot be an integer";
//     console.log("Hello, " + name + " nice to meet you.");
// }
// catch (err) {
//     console.log('Error! ' + err);
// }


