

let dogYearOfBirth = document.getElementById("birthYear").value;
let dogYearFuture =  document.getElementById("futureYear").value;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears == true) {
    dogYear *= 7;//dogYear=dogYear*7
    //console.log(`Your dog will be ${dogYear} dog years old in 2027`)
    document.getElementById("dogYearCalculation").innerHTML =`Your dog will be ${dogYear} dog years old in 2027`
} 
else {
    //console.log(`Your dog will be ${dogYear} human years old in 2027`)
    document.getElementById("dogYearCalculation").innerHTML = `Your dog will be ${dogYear} human years old in 2027`
}

