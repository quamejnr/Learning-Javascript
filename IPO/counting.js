// Counting number of strings
const prompt = require("prompt-sync")({signit: true});

const input = prompt("Type a string: ");

if (input != '') {
    console.log(`${input} has ${input.length} letters`);
} else {
    console.log("Please enter a word: ")
}

// Implement in a GUI with a counter counting as
// letters are typed.