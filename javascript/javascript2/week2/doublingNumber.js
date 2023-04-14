

let numbers = [1, 2, 3, 4]
let newNumbersDouble = numbers.filter(a => a % 2 !== 0).map(a => a * 2);
console.log("The doubled numbers are", newNumbersDouble);

/*Given example in Homework
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}*/

//console.log("The doubled numbers are", newNumbers);

