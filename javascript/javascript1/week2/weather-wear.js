//weather wear

function weatherWearClothes() {
  let temperature = document.getElementById("temp").value
  switch (true) {
    case (temperature < 0):
      clothes = "wear heavy coat";
      break;
    case (temperature <= 15):
      clothes = "wear winter jacket";
      break;
    case (temperature <= 20):
      clothes = "wear light jacket";
      break;
    case (temperature <= 30):
      clothes = "wear shorts and a t-shirt";
      break;
    default:
      clothes = "stay at home";
      break;
  }
document.getElementById("tempOutput").innerHTML = clothes;
console.log(clothes);
}


//let clothesToWear = weatherWearClothes(12);








