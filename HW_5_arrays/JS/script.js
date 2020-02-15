// 1 Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел.
// В функции есть параметры: length - длина массива, min – минимальное значение целого числа, max – максимальное
//  значение целого числа. Пример: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

getRandomArray = (length, min, max) => {
  let resArr = [];
  for (let i = 0; i < length; i++) {
    resArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return resArr;
};
console.log(getRandomArray(7, 1, 100));

// 2 Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов.
// НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
  let moda;
  let maxLength = 0;
  //фільтр масиву на цілі числа
  let numbersInt = [];
  numbers.forEach(number => {
    if (Number.isInteger(number)) {
      numbersInt.push(number);
    }
  });
  // знаходження числа, яке найчастіше зустрічається
  numbersInt.forEach(numberInt => {
    let counter = 0;
    for (j = 0; j < numbersInt.length; j++) {
      if (numberInt === numbersInt[j]) {
        counter++;
      }
    }
    if (maxLength <= counter) {
      moda = numberInt;
      maxLength = counter;
    }
  });
  return moda;
}
console.log(
  getModa(6, 2.1, 55, 11, 78, 4, 55, 77.3, 55, 87, 23, 22.1, 56, 4, 2.1)
);

// 3 Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех переданных в неё аргументов.
//  НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
  //фільтр масиву на цілі числа
  let numbersInt = numbers.filter(number => {
    return Number.isInteger(number);
  });

  let average =
    numbersInt.reduce((total, value) => {
      return total + value;
    }, 0) / numbersInt.length;
  return average;
}
console.log(
  getAverage(6, 2, 55.5, 11, 78, 2.8, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

// 4 Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов.
// НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Пример: getMedian(1, 2, 3, 4) –> 2.5
//Пример: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
  //фільтр масиву на цілі числа
  let numbersInt = numbers.filter(number => {
    return Number.isInteger(number);
  });
  //пошук медіани
  let sortedArr = numbersInt.sort(function(a, b) {
    return a - b;
  });

  if (sortedArr.length % 2 === 1) {
    return sortedArr[Math.floor(sortedArr.length / 2)];
  } else {
    return (
      (sortedArr[Math.floor(sortedArr.length / 2)] +
        sortedArr[Math.floor(sortedArr.length / 2) - 1]) /
      2
    );
  }
}
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); //–> 23
console.log(getMedian(1, 2, 3, 4)); //–> 2.5
console.log(getMedian(1, 2, 3, 4, 5)); //–> 3
console.log(getMedian(4, 2, 5, 3, 8.2, 5));

// 5 Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа переданные как аргументы функции
// Пример: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
  let arrOfOddNumbers = numbers.filter(number => {
    return number % 2 === 1;
  });
  return arrOfOddNumbers;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6)); //-> [1, 3, 5]

// 6 Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел больших 0
// Пример: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
  let arrOfPositiveNumbers = numbers.filter(number => {
    return number > 0;
  });
  return arrOfPositiveNumbers.length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6)); // -> 3

// 7 Создайте функцию getDividedByFive(...numbers) – которая отфильтрует все элементы в массиве и оставит только те,
// которые делятся нацело на 5
// Пример: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
  let arrOfDividedByFive = numbers.filter(number => {
    return number % 5 === 0;
  });
  return arrOfDividedByFive;
}
console.log(
  getDividedByFive(6, 2, 55, 25, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
); //-> [55, 25, 55]

// 8 Создайте функцию replaceBadWords(string) – которая 1) разобьет фразу на слова, 2) заменит плохие
// слова на звездочки (*). При решении этого задания необходимо разбить массив на слова с помощью функции .split(" "),
//  после чего массив необходимо будет склеить .join(" ") Плохие слова: shit и fuck.
//  Предусмотрите возможность расширять список этих слов в будущем.
// Пример: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// Пример: replaceBadWords("Holy shit!") -> "Holy ****!"
// Пример: replaceBadWords("It's bullshit!") -> "It's bull****!"

let arrOfBadWords = ["shit", "fuck"];
function replaceBadWords(string) {
  let dividedString = string.split(" ");
  console.log(dividedString);
  for (let i = 0; i < dividedString.length; i++) {
    for (let j = 0; j < arrOfBadWords.length; j++) {
      let reg = new RegExp(arrOfBadWords[j], "g");
      dividedString[i] = dividedString[i].replace(
        reg,
        "*".repeat(arrOfBadWords[j].length)
      );
    }
  }
  //   arrayWords = arrayWords.map((value) => {
  //     return value.replace(badWords[i], '*'.repeat(badWords[i].length));
  // });
  let resString = dividedString.join(" ");
  return resString;
}

console.log(replaceBadWords("Are you fucking kidding?")); //-> "Are you ****ing kidding?"
console.log(replaceBadWords("Holy shit!")); // -> "Holy ****!"
console.log(replaceBadWords("It's bullshit!")); //"It's bull****!"

// let arrOfBadWords = ["shit", "fuck"];
// function replaceBadWords(string) {
//   let dividedString = string.split(" ");
//   console.log(dividedString);
//   for (let i = 0; i < arrOfBadWords.length; i++) {
//     dividedString = dividedString.map(arg => {
//       return arg.replace(arrOfBadWords[i], "*".repeat(arrOfBadWords[i].length));
//     });
//   }
//   return dividedString.join(" ");
// }

// console.log(replaceBadWords("Are you fucking kidding?")); //-> "Are you ****ing kidding?"
// console.log(replaceBadWords("Holy shit !")); // -> "Holy ****!"
// console.log(replaceBadWords("It's bullshit!")); //"It's bull****!"

// 9 Создайте функцию divideByThree(word), которая разбивает каждое слово на условные слоги по 3 буквы.
// Если букв меньше трёх – не разбиваем. Пробелы всегда удаляются. Строка приводится к нижнему регистру.
// Пример: divideByThree("Commander) -> ["com", "man", "der"] Пример: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
  let dividedStr = word.split(" ");
  for (let i = 0; i < dividedStr.length; i++) {
    if (dividedStr[i].length < 3) {
      continue;
    } else {
    }
  }

  return dividedStr;
}
console.log(divideByThree("Commander")); //-> ["com", "man", "der"]
console.log(divideByThree("live")); //-> ["liv", "e"]
console.log(divideByThree("live forever"));

// 10 Создайте функцию generateCombinations(word), которая выдаст все возможные перестановки(уникальные, без повторений)
//  букв в слове. Для тестов не передавайте слова в которых больше 10 букв.
//  Лучше вообще ограничить работу функции 10 буквами.
//  Пример: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
//  Пример: generateCombinations("ol") -> ["ol", "lo"]

function generateCombinations(word) {
  let dividedWord = word.split("");
  return dividedWord;
}
console.log(generateCombinations("man")); // -> ["man", "mna", "amn", "anm", "nam", "nma"]
console.log(generateCombinations("ol")); // -> ["ol", "lo"]
