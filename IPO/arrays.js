let selectedColors = ['Red', 'Blue'];

// Any item can be passed into an index of the array
// The items in the array that haven't been declared are undefined
selectedColors[2] = 'Green';

// Add item to array
selectedColors.push('Brown', 'Purple');

// Get length of array
console.log(selectedColors.length);

// Remove last item from array
selectedColors.pop();

console.log(selectedColors);

