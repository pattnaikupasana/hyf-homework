
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function traveltime(speed, destinationDistance) {
  let time = destinationDistance / speed;
  return `${Math.floor(time)} hours and ${Math.floor((time - Math.floor(time)) * 60)} minutes`;
}
const travelTime = traveltime(travelInformation.speed,travelInformation.destinationDistance);
console.log(travelTime);