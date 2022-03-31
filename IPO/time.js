// Calculate retirement 
const prompt = require("prompt-sync")({sigint: true});

const currentAge = prompt("What is your current age? ");
const retirementAge = prompt("At what age would you like to retire? ");

const yearsLeftToRetire = Number(retirementAge) - Number(currentAge); 

const now = new Date();
const yearToRetire = now.getFullYear() + yearsLeftToRetire;

if (yearsLeftToRetire > 0) {
    console.log(`You have ${yearsLeftToRetire} years left to retire.
It\'s ${now.getFullYear()}, so you can retire in ${yearToRetire}`);    
}else {
    console.log(`You should have retired in ${yearToRetire}`)
}



