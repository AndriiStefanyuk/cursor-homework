const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 Создайте функцию getMyTaxes.call(country, salary) -> number; – которая считает сколько налогов вы заплатите как
//IT-специалист в какой-либо стране. Функция должна вызываться через call и работать с данными через this

function getMyTaxes(salary) {
  let taxesAmount = this.tax * salary;
  return taxesAmount;
}

console.log(`завдання перше: ${getMyTaxes.call(ukraine, 5000)}`); //--> number;
// console.log(getMyTaxes.call(latvia, 5000));
// console.log(getMyTaxes.call(litva, 5000));

// 2 Создайте функцию getMiddleTaxes.call(country) -> number; – которая считает сколько в среднем налогов платят
// IT-специалистсы в каждой стране. (tax * middleSalary). Функция должна вызываться через call и работать с данными
// через this

function getMiddleTaxes() {
  let middleTaxes = (this.tax * this.middleSalary).toFixed(2);
  return middleTaxes;
}

console.log(`завдання друге: ${getMiddleTaxes.call(ukraine)}`); //-> number;
// console.log(getMiddleTaxes.call(latvia));
// console.log(getMiddleTaxes.call(litva));

// 3 Создайте функцию getTotalTaxes.call(country) -> number; – которая считает сколько всего налогов платят
// IT-специалистсы в каждой стране. (tax * middleSalary * vacancies). Функция должна вызываться через call
// и работать с данными через this
function getTotalTaxes() {
  let totalTaxes = (this.tax * this.middleSalary * this.vacancies).toFixed(2);
  return totalTaxes;
}
console.log(`завдання третє: ${getTotalTaxes.call(ukraine)}`); // -> number;
// console.log(getTotalTaxes.call(latvia));
// console.log(getTotalTaxes.call(litva));

// 4 Создайте функцию getMySalary(country) – которая будет писать в консоль объект вида:
// { salary: number, taxes: number, profit: number } каждые 10 секунд. Значения salary – генерируйте случайным образом
// в диапазоне 1500-2000. taxes – расчитывается в зависимости от от выбранной страны и значения salary.
// profit = salary - taxes;
function getMySalary() {
  let maxSalary = 2000;
  let minSalary = 1500;
  function makeObj() {
    let salary =
      Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    let taxes = parseFloat((this.tax * salary).toFixed(2));
    let profit = parseFloat((salary - taxes).toFixed(2));
    let mySalary = { salary: salary, taxes: taxes, profit: profit };
    console.log(mySalary);
  }
  makeObj.call(ukraine);
}
let myInterval = setInterval(getMySalary, 2000);
