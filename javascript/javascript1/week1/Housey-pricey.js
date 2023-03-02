//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let width, height, deep, gardenSize, volumeInMeters;

//for PeterHouse Price
width = 8, height = 10, deep = 10, gardenSize = 100;
volumeInMeters = width * height * deep;
let peterActualHousePrice = 2500000
let peterExpectedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300;
if (peterActualHousePrice > peterExpectedHousePrice) {
console.log(`Peter Paid too much`);

} else {
console.log(`Peter Paid too little`);

}

//forJuliaHousePrice
width = 5, height = 8, deep = 11, gardenSize = 70;
volumeInMeters = width * height * deep;
let juliaActualHousePrice = 1000000
let juliaExpectedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300
if (juliaActualHousePrice > juliaExpectedHousePrice) {
console.log(`Julia Paid too much`);


} else {
console.log(`Julia Paid too little`);

}