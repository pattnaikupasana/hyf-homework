function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (Number.isFinite(numbers[i])) {
      sum += numbers[i];
      count++;
    }
  }
  const average = sum / count;
  return average;
}
const arg = process.argv[2];
const numbers = arg.split(",").map(Number);
const result = calculateAverage(numbers);
console.log(result);
