function checkout (item1, item2, item3){

    const items = [item1, item2, item3];

    for (let item in items) {
        if (isNaN(item)) {
            throw 'Price should be an integer'
        }else {
            return item
        }
    }
}

// x = checkout(3, 2, 1)
// console.log(x)


function testFunction(a, b) {
    console.log(a + b);
}

console.log(testFunction(1, 4));