let theCalculator = document.getElementById("calculator");
let numbers = document.getElementById("numbers");
let operators = document.getElementById("operators");
let preAnswer = document.getElementById("pre-ans");
let current = document.getElementById("current");
let equalButton = document.getElementById("equal-btn");
let allClearButton = document.getElementById("allclear");
let clearButton = document.getElementById("clear");

const operatorSign = ["+", "-", "x", "/"];
let previousNumber = 0;
let preOperator = '+';
let currentNumber = 0;

function buildInitLayout() {
    for (let i = 9; i >= 0; i--) {
        let numberButton = document.createElement("div");
        numberButton.setAttribute("id", "num-btn");
        numberButton.setAttribute("class", "btn");
        numberButton.innerHTML = i;
        numbers.appendChild(numberButton);
        numberButton.addEventListener("click", updateCurrent);
    }
    for (let i = 3; i >= 0; i--) {
        let operatorButton = document.createElement("div");
        operatorButton.setAttribute("id", "opr-btn");
        operatorButton.setAttribute("class", "btn");
        operatorButton.innerHTML = operatorSign[i];
        operators.appendChild(operatorButton);
        operators.addEventListener("click", updatePreAnswer);
    }
    equalButton.addEventListener("click", updatePreAnswer);
    allClearButton.addEventListener("click", resetCalculator);
    clearButton.addEventListener("click", removeLastDigit);
}

function calculate() {
    if (currentNumber == 0 && preOperator == '/') {
        let catExplode = document.createElement("img");
        catExplode.setAttribute("src", "catexplode.webp");
        theCalculator.innerHTML = "";
        theCalculator.appendChild(catExplode);
        console.log("cat explode");
        return;
    } 
    if (preOperator == '+') return previousNumber + currentNumber;
    if (preOperator == '-') return previousNumber - currentNumber;
    if (preOperator == 'x') return previousNumber * currentNumber;
    if (preOperator == '/') return previousNumber / currentNumber;   
}

function updateCurrent(e) {
    let num = e.target.innerHTML;
    if (current.innerHTML == "0") current.innerHTML = num;
    else current.innerHTML += num;
}

function updatePreAnswer(e) {
    currentNumber = Number(current.innerHTML);
    previousNumber = calculate();
    currentNumber = 0;
    if (e.target.innerHTML == "=") {
        currentNumber = previousNumber;
        previousNumber = 0;
        preOperator = '+';
        preAnswer.innerHTML = "0 +";
        current.innerHTML = currentNumber;
        return;
    }
    preOperator = e.target.innerHTML;
    preAnswer.innerHTML = previousNumber + ` ` + preOperator;
    current.innerHTML = "0";
}

function resetCalculator() {
    currentNumber = 0;
    previousNumber = 0;
    preOperator = '+';
    preAnswer.innerHTML = "No previous number you silly creature!";
    current.innerHTML = "0";
}

function removeLastDigit(e) {
    let temp = current.innerHTML;
    temp = temp.slice(0, -1);
    current.innerHTML = (temp == "" ? "0" : temp);
}

buildInitLayout();