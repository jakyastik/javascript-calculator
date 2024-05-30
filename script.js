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
let stream = [];
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

		displayDiv.innerHTML = operator;
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



// ---------------------------------------------------------------------------------------

// let numberButton = document.querySelectorAll(".numberButton");
// let operatorButton = document.querySelectorAll(".opButton");
// let displayDiv = document.querySelector(".displayDiv");

// let numString = [];
// let fullString = []
// let stream = [];
// let result;
// let operator;


// numberButton.forEach((numberButton) => {
//     numberButton.addEventListener("click", (event) => {
//          let pressedValue = event.target.value;
//          numString.push(Number(pressedValue));
//          displayDiv.innerHTML = numString.join("");
//     });
// }, 0)

// operatorButton.forEach((operatorButton) => {
//     operatorButton.addEventListener("click", (event) => {
//         let pressedValue = event.target.value;
//         operator = pressedValue;
//         displayDiv.innerHTML = operator;

//         let fullString = numString.join("");
//         addtoStream(fullString);
//         addtoStream(operator);
//         numString = [];
//         console.log(stream);

//         displayResult();
        
//     })
// })

// function addtoStream(x) {
//     stream.push(x);
// }

// function displayResult () {
//     if (stream) {
//         let joinStream = stream.join("");
//     }
// }

//--------------------------------------------------------------------------------------------------------

// let firstNum = 0;
// let lastNum = 0;
// let operator;


// let numberButton = document.querySelectorAll(".numberButton");
// let operatorButton = document.querySelectorAll(".opButton");
// let displayDiv = document.querySelector(".displayDiv");
// let resultButton = document.querySelector(".resultButton");

// numberButton.forEach((numberButton) => {
//     numberButton.addEventListener("click", (event) =>{
//         let pressedValue = event.target.value;
//         let arrayfromPressed = [];
//         arrayfromPressed.push(pressedValue);
//         let joinedArray = arrayfromPressed.join("");
        
//         if (operator) {
//             lastNum = joinedArray;
//             firstNum = firstNum; 
//         } else {
//             firstNum = joinedArray;
//             lastNum =
//         }

//         console.log(firstNum, lastNum);
//     })
// })