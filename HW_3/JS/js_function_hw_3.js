/*1 Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе. 
Примеры: 1236 -> 6, 987 -> 9, 385 -> 8 */

function getMaxDigit(number) {
  let arrOfDigits = [];
  let maxDigits = 0;
  arrOfDigits = number.toString().split("");
  for (let i = 0; i < arrOfDigits.length; i++) {
    if (maxDigits < arrOfDigits[i]) {
      maxDigits = arrOfDigits[i];
    }
  }
  return maxDigits;
}
console.log(getMaxDigit(146585));

//2 Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл

function getExp(num, exp) {
  let res = 1;
  for (let i = 0; i < exp; i++) {
    res *= num;
  }
  return res;
}
console.log(getExp(3, 1));

//3 Создать функцию, которая форматирует имя, делая первую букву заглавной.
//("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);
function makeFirstLetterCapitalized(name) {
  let changedName = "";
  let firstLetter = name.substr(0, 1).toUpperCase();

  changedName = firstLetter + name.toLowerCase().slice(1);
  return changedName;
}
console.log(makeFirstLetterCapitalized("hoDDor"));

//4 Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы.
//(Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805

function pureSalary(salary) {
  let taxes = (salary * 19.5) / 100;
  let pureSalary = salary - taxes;
  return pureSalary.toFixed(2);
}
console.log(pureSalary(12987));

//5 Создать функцию, которая возвращает случайное целое число в диапазоне от N до M.
//Пример: <сode>getRandomNumber(1, 10) -> 5
function getRandomNumber(N, M) {
  if (N >= M) {
    let max = N;
    let min = M;
  } else {
    max = M;
    min = N;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(13, 15));

//6 Создать функцию, которая считает сколько раз определенная буква повторяется в слове.
//Пример: countLetter("а", "Асталависта") -> 4

function countLetter(char, str) {
  let changedStr = str.toLowerCase();
  let strOfChars = "";
  for (let i = 0; i <= changedStr.length; i++) {
    if (changedStr.charAt(i) == char.toLowerCase()) {
      strOfChars += changedStr.charAt(i);
    }
  }
  return strOfChars.length;
}
console.log(countLetter("а", "Асталависта"));

/*7 Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке. 
Пример: convertCurrency("100$") -> 2500 грн. или convertCurrency("2500UAH") -> 100$
Учтите, другие валюты не конвертируются, нужно выводить ошибку, а так же регистр uah не имеет значения.*/

function convertCurrency(str) {
  let dollarToHryvnia = str.search(/\$/i);
  let hryvniaToDollar = str.search(/uah/i);
  if (dollarToHryvnia >= 0) {
    let amoundInHryvnia = (parseInt(str) * 25).toFixed(2);
    return amoundInHryvnia;
  } else if (hryvniaToDollar >= 0) {
    let amoundInDollar = (parseInt(str) / 25).toFixed(2);
    return amoundInDollar;
  } else {
    return "We can exchange only $ and UAH, make your choice";
  }
}

console.log(convertCurrency("1000uh"));

/*8 Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем 
или по умолчанию = 8 символам.
Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
*/

function makeRandomPassword(digitals = 8) {
  let randomPassword = "";
  if (digitals === 0) {
    return "Password should has at least one digit";
  }
  for (let i = 1; i <= digitals; i++) {
    randomPassword += Math.floor(Math.random() * 10);
  }
  return randomPassword;
}
console.log(makeRandomPassword(4));
//доробити видачу помилки у випадку вводу 0

//9 Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(char, str) {
  let changedStr = str.toLowerCase();
  let strOfChars = "";
  for (let i = 0; i <= changedStr.length; i++) {
    if (changedStr.charAt(i) !== char.toLowerCase()) {
      strOfChars += changedStr.charAt(i);
    }
  }
  return strOfChars;
}
console.log(deleteLetters("a", "blablabla"));

//10 Создайте функцию, которая проверяет является ли слово палиндромом.
//Пример: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false

function isPalyndrom(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return str === reversedStr
    ? `${str} є поліндромом`
    : `${str} НЕ є поліндромом`;
}
console.log(isPalyndrom("мадамa"));
