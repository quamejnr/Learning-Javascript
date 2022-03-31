const prompt = require('prompt-sync')({sigint: true});

const firstNumber = prompt('What is the first number? ');
const secondNumber = prompt('What is the second number? ');

sum = Number(firstNumber) + Number(secondNumber);

console.log(sum);