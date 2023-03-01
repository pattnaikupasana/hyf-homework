let yearOfBirth = document.getElementById("birthYear").value;
let yearFuture = document.getElementById("futureYear").value;
let age = yearFuture - yearOfBirth;
document.getElementById("calculatedAge").innerHTML = `You will be ${age} years old in ${yearFuture}`;
//console.log(`You will be ${age} years old in ${yearFuture}.`);