function add(firstNum, lastNum) {
	return firstNum + lastNum;
}

function substract(firstNum, lastNum) {
	return firstNum - lastNum;
}

function multiply(firstNum, lastNum) {
	return firstNum * lastNum;
}

function divide(firstNum, lastNum) {
	return firstNum / lastNum;
}

let firstNumArray = [];
let lastNumArray = [];
let firstNum = 0;
let lastNum = 0;
let operator;
let result;
let inputBox;

let numberButton = document.querySelectorAll(".numberButton");
let displayDiv = document.querySelector(".displayDiv");
let referenceDiv = document.querySelector(".referenceDiv");

numberButton.forEach((numberButton) => {
	numberButton.addEventListener("click", (event) => {
		let pressedValue = event.target.value;

		if (operator) {
			lastNumArray.push(pressedValue);
			lastNum = lastNumArray.join("");
			displayDiv.innerHTML = lastNum;
		} else {
			firstNumArray.push(pressedValue);
			firstNum = firstNumArray.join("");
			displayDiv.innerHTML = firstNum;
		}
	});
});

let operatorButton = document.querySelectorAll(".opButton");

operatorButton.forEach((operatorButton) => {
	operatorButton.addEventListener("click", (event) => {
		let pressedValue = event.target.value;
		operator = pressedValue;
		console.log(operator);
		displayDiv.innerHTML = operator;

		let toFirstNum = Number(firstNum);
		let toLastNum = Number(lastNum);

		if (operator == "+") {
			result = add(toFirstNum, toLastNum);
		} else if (operator == "-") {
			result = substract(toFirstNum, toLastNum);
		} else if (operator == "*") {
			result = multiply(toFirstNum, toLastNum);
		} else if (operator == "/") {
			result = divide(toFirstNum, toLastNum);
		}

		displayDiv.innerHTML = result;
	});
});

let resultButton = document.querySelector(".resultButton");
resultButton.addEventListener("click", () => {
	let toFirstNum = Number(firstNum);
	let toLastNum = Number(lastNum);

	if (operator == "+") {
		result = add(toFirstNum, toLastNum);
	} else if (operator == "-") {
		result = substract(toFirstNum, toLastNum);
	} else if (operator == "*") {
		result = multiply(toFirstNum, toLastNum);
	} else if (operator == "/") {
		result = divide(toFirstNum, toLastNum);
	}

	displayDiv.innerHTML = result;
	firstNumArray = [];
	firstNumArray.push(result);
	firstNum = firstNumArray.join();
	lastNumArray = [];
	lastNum = firstNumArray;
	console.log(firstNum, firstNumArray, lastNum, lastNumArray);
});

function clearDiv() {
	firstNumArray = [];
	lastNumArray = [];
	lastNum = 0;
	firstNum = 0;
	displayDiv.innerHTML = "";
	operator = "";
	console.clear();
}
