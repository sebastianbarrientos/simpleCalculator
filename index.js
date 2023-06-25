function add (a, b)  {
    return a + b;
}
function subtract (a, b)  {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0) {
        return "Impossible to divide by zero";
    } else {
        return a / b;
    }
}

function calculator(a, op, b) {
    switch (op) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b)
            break;
        default:
            return "Insert a valid operation";
            break;
    }
};

const selectOp = document.querySelector("select");
const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const enterButton = document.getElementById("send");
const resultPlace = document.getElementById("result");

enterButton.addEventListener("click", (e) => {
    let result;
    let a = Number(numberOneInput.value);
    let b = Number(numberTwoInput.value);
    let op = selectOp.value;
    result = calculator(a, op, b);
    console.log(`Result: ${result}`);
    resultPlace.innerText = `Result: ${result}`;
})