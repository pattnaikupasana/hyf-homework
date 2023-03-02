let firstWords = ["Easy", "Awesome", "Corporate", "smile", "lego,", "party", "Acron", "Hackyour", "Pizza", "sparkle"];
let secondWords = ["Optima", "Thrive", "Zenith", "future", "factor", "crafts", "plex", "land", "telecom", "travel"];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log(`The start up is ${startupName} and it contains ${startupName.length} characters`);