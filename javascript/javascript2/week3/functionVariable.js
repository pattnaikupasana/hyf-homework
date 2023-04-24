//Create an array with 3 items. All items shoul the array and call all the functions.
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach((element) => {
  console.log(element(100, 2));
});

//Create a function as a const and try creating a function normally. Call both functions.
const createdfunction = function createFunction() {
  console.log("This is const function");
};
function creatingnormalFuntion() {
  console.log("this is normal function");
}
createdfunction();
creatingnormalFuntion();
//Create an object that has a key whose value is a function. Try calling this function.
const obj = {
  myName: (objectFunction = () => {
    console.log("This is object function");
  }),
};
obj.myName();
