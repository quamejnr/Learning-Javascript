// Calculate area of a rectangle in both square feet and square metres

function calculateAreaOfARectangle() {
    const prompt = require('prompt-sync')({sigint: true});
    const k = 0.9290304;

    const length = prompt('What is the length of the room in feet? ');
    const width = prompt('What is the width of the room in feet? ');

    if (isNaN(length) || isNaN(width)) {
        throw 'Length and width must be numbers';

    }else if (length <= 0 || width <=0) {
        throw "Length and width must be more than zero";

    }else {
        let areaInSquareFeet = length * width;
        let areaInSquareMetres = areaInSquareFeet * k;
    
        console.log(`The area is ${areaInSquareFeet} square feet and ${areaInSquareMetres} square metres`);
    }

}


calculateAreaOfARectangle()
