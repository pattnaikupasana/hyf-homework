//defining html input to variable
const input = document.getElementById("input");
const startButton = document.getElementById("startbtn");
const reset = document.getElementById("resetbtn");
const sKey = document.getElementById("keys");
const lKey = document.getElementById("keyl");
const getResult = document.getElementById("result");
const getAlert = document.getElementById("alert");
let sCount = 0;
let lCount = 0;

//begin game & set timer

startButton.addEventListener("click", gameBegin);

function gameBegin() {
  let getTime = input.value;
  if (getTime === "") {
    getAlert.innerHTML = "You have not set time!!";
    document.removeEventListener("keydown", keyFunction);
  } else
    setTimeout(() => {
      document.removeEventListener("keydown", keyFunction);
      getAlert.innerHTML = "Game Over!!";
      gameResult();
    }, getTime * 1000);

  document.addEventListener("keydown", keyFunction);

  //key to be ued
  function keyFunction(e) {
    if (e.key === "s") {
      sCount++;
      sKey.innerHTML = sCount;
    }
    if (e.key === "l") {
      lCount++;
      lKey.innerHTML = lCount;
    }
  }
  //showing who is the winner
  const gameResult = () => {
    if (sCount === lCount) {
      getResult.innerHTML = "Game Draw!!!";
    }
    if (sCount > lCount) {
      getResult.innerHTML = "S is the Winner !!!";
    }
    if (lCount > sCount) {
      getResult.innerHTML = "L is the Winner";
    }
  };
}

//reset game/timer
reset.addEventListener("click", function () {
  input.value = "";
  getAlert.innerHTML = "";
  sKey.innerHTML = "";
  lKey.innerHTML = "";
  getResult.innerHTML = "";
  sCount = 0;
  lCount = 0;
});
