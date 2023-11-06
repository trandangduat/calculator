let numbers = document.getElementById("numbers");
let operators = document.getElementById("operators");
const operatorSign = ["+", "-", "x", "/"];

function buildInitLayout() {
    for (let i = 9; i >= 0; i--) {
        let numberButton = document.createElement("div");
        numberButton.setAttribute("id", "num-btn");
        numberButton.setAttribute("class", "btn");
        numberButton.innerHTML = i;
        numbers.appendChild(numberButton);
    }
    for (let i = 3; i >= 0; i--) {
        let operatorButton = document.createElement("div");
        operatorButton.setAttribute("id", "opr-btn");
        operatorButton.setAttribute("class", "btn");
        operatorButton.innerHTML = operatorSign[i];
        operators.appendChild(operatorButton);
    }
}

buildInitLayout();