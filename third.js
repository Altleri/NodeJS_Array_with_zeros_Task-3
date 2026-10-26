//Task#3 Anastasiia Althsuler and Evgeny Altshuler

// Stores the numbers to check for zero values.
let numbers = [3, 0, -5, 0, 8, 0];
// Initializes the counter for zero values.
let count = 0;

// Iterates through every element in the numbers array.
for (let i = 0; i < numbers.length; i++) {
 // Increments the counter when the current value is zero; otherwise, does nothing.
 numbers[i] === 0 ? count++ : null;
}
// Prints the total number of zeros.
console.log(count);
