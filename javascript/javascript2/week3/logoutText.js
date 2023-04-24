//1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.//
const delayTime = setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

/*2.Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds. 
Call the function you have created with some different arguments.*/

function myfunction(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
myfunction(3, "first string can be load after 3 seconds");
myfunction(5, "second string can be load after 5 seconds");

/*3.Create a button in html. 
When clicking this button, 
use the function you created in the previous task to log out the text: Called after 5 seconds after the button is clicked.*/

const clickbutton = document.getElementById("clicked_btn");
clickbutton.addEventListener("click", () => {
  myfunction(5, "the button is clicked after 5 second");
});

/*4.Create two functions and assign them to two different variables. 
One function logs out Earth, the other function logs out Saturn. 
Now create a new third function that has one parameter: planetLogFunction. 
The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.*/

const function1 = () => {
  console.log("earth");
};
const function2 = () => {
  console.log("saturn");
};

function function3(planetLogFunction) {
  planetLogFunction();
}
function3(function1);
function3(function2);

/*5.Create a button with the text called "Log location". 
When this button is clicked the location(latitude, longitude) of the user should be logged out using this browser api*/
const loggedbutton = document.getElementById("logged_btn");
loggedbutton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat, long);
  });
});

/*6.Optional Now show that location on a map using fx the Google maps api*/

function getMapCoordinates() {
  navigator.geolocation.getCurrentPosition((position) => {
    const latlongvalue = `${position.coords.latitude},${position.coords.longitude}`;
    const map_url = `https://maps.google.com/maps?q=${latlongvalue}&hl=es&z=14&amp;output=embed`;
    document.getElementById(
      "mapholder"
    ).innerHTML = `<iframe src="${map_url}"></iframe>`;
  });
}

/*Create a function called runAfterDelay. 
It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions*/
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, () => {
  console.log("Run after delay of 4 seconds");
});
runAfterDelay(6, () => {
  console.log("Run after delay of 6 seconds");
});
/*8. Check if we have double clicked on the page.
 A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"*/

const doubleClicked = document.addEventListener("dblclick", () => {
  console.log("double click!");
});

/*Create a function called jokeCreator that has three parameters: 
shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. 
And vice versa.*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}
const logFunnyJoke = () => {
  console.log("LOL,This is so funny.");
};
const logBadJoke = () => {
  console.log("Arrrr... you are not funnny.");
};

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
