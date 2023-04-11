
let toDo=[];
function getReply(command) {
// Name actions
{
    if (command.includes('Hello my name is')) {
        var lastWord = command.split(" ").slice(-1)[0];
        if (lastWord === "" || lastWord.length < 2) {
            return `Enter your name`;
        } else {
            return `Nice to meet you ${lastWord}`;
        }
    }
    if (command.includes('What is my name')) {
        return `My name is Upasana`;
        }
}
//toDo list

    const splitStr = command.split(" ");
    var str = splitStr.slice(1, -3)
    str=str.join(" ")
    
    if (command.includes("to my todo")) {
        toDo.push(str);
        return `${str} added to your todo`; 
    }
    if (command.includes("from my todo")) {
        toDo = toDo.filter(e => e!== str);
        return `${str} removed from your todo`;
    }
    if (command.includes("What is on my todo?")) {
        return `you have todo list: ${toDo}`;
    }

      //today date
    let date = new Date().toDateString().split(" ");
    if (command.includes("What day is it today")) {
        console.log(date);
    console.log(`${date[2]}. of ${date[1]} ${date[3]}`)
    }
}
    //calculations
function calculation(firstNumber, secondNumber, operator) {

    if (operator.includes("*" || "multiply" || "multiplication")) {
        return firstNumber * secondNumber;
    }
    if (operator.includes("/" || "divide" || "division")) {
        return firstNumber / secondNumber;
    }
    if (operator.includes("+" || "plus")) {
        return firstNumber + secondNumber;
    }
    if (operator.includes("-" || "minus")) {
        return firstNumber - secondNumber;
    }
}
function timer(command) {
    var timeInMinute = command.split(" ").slice(-8, -6)
    var timeInMilisecond = timeInMinute * 60000;
    setTimeout(setAlert, timeInMilisecond);
}

function setAlert() {
    alert("Timer done");
}



console.log(getReply("Hello my name is Upasana"));
console.log(getReply("Hello my name is "));
console.log(getReply("What is my name?"));
console.log(getReply("add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(calculation(2, 2, "*"));
console.log(timer("Timer set for 1 minute"));






