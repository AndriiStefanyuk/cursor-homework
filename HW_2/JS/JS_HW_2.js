let firstNumber;
let secondNumber;
let filterEvenNumber;
let N;
let M;
function getSum() {
  getFirstNumber();
  if (N !== null) {
    do {
      getSecondNumber();
      if (secondNumber <= firstNumber) {
        alert("second number must be bigget than first number");
      }
    } while (secondNumber <= firstNumber);
  } else if (N === null) {
    return;
  }
  if (M !== null) {
    filterEvenNumber = confirm("Should we skip even numbers too?");
  } else if (M === null) {
    return;
  }

  let sumOfNumbers = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (filterEvenNumber && i % 2 === 1) {
      sumOfNumbers += i;
    } else if (filterEvenNumber === false) {
      sumOfNumbers += i;
    }
  }
  console.log(sumOfNumbers);
}
getSum();

function getFirstNumber() {
  do {
    N = prompt("please enter a First number", "4");
    firstNumber = parseInt(N);
  } while (N !== null && isNaN(firstNumber) !== false);
}
function getSecondNumber() {
  do {
    M = prompt("please enter a Second number", "6");
    secondNumber = parseInt(M);
  } while (M !== null && isNaN(secondNumber) !== false);
}
