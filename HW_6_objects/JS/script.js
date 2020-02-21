const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

// 1 Создайте функцию getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - которая выводит список предметов
//  для конкретного студента. Обратите внимание – название предмета необходимо выводить с большой буквы, а _ – заменить
//  на пробел

function getSubjects(student) {
  let arrOfSubjects = Object.keys(student.subjects);
  for (let i = 0; i < arrOfSubjects.length; i++) {
    arrOfSubjects[i] =
      arrOfSubjects[i][0].toUpperCase() +
      arrOfSubjects[i].slice(1).replace("_", " ");
  }
  return arrOfSubjects;
}
console.log(getSubjects(students[1])); // --> ["Math", "Algorithms", "Data science"]

// 2 Создайте функцию getAverageMark(students[0]) --> 3.79 – которая выведет среднюю оценку по всем предметам для
// переданного студента НЕ МАССИВА СТУДЕНТОВ. Оценку округлите до 2ого знака. Можно использовать функции написанные
// в предыдущих домашних заданиях :)

function getAverageMark(student) {
  let arrOfMarks = Object.values(student.subjects).flat(1);
  let average =
    arrOfMarks.reduce((total, value) => {
      return total + value;
    }, 0) / arrOfMarks.length;
  return average.toFixed(2);
}
console.log(getAverageMark(students[0])); //--> 3.79

// 3 Создайте функцию getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – которая
//  выводит информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания).
//  Должна быть выведена информация: курс, имя, средняя оценка.

function getStudentInfo(student) {
  let studentInfo = {};
  studentInfo.name = student.name;
  studentInfo.course = student.course;
  studentInfo.average = getAverageMark(student);
  return studentInfo;
}

console.log(getStudentInfo(students[1])); //--> { "course": 3, "name": "Tanya", "averageMark": 3.79}

// //4 Создайте функцию getStudentsNames(students) --> ["Anton", "Victor", "Tanya"] – которая выводит имена студентов
// //в алфавитном порядке.

function getStudentsNames(students) {
  let arrOfStudentsName = [];
  for (let i = 0; i < students.length; i++) {
    arrOfStudentsName.push(students[i].name);
  }
  return arrOfStudentsName.sort();
}

console.log(getStudentsNames(students)); //--> ["Anton", "Victor", "Tanya"]

// //5 Создайте функцию getBestStudent(students) --> "Anton" – которая выводит лучшего студента из списка по показателю
// // средней оценки.

function getBestStudent(students) {
  let bestAvarageMark = 0;
  bestStudent = "";
  for (let i = 0; i < students.length; i++) {
    if (bestAvarageMark < getAverageMark(students[i])) {
      bestAvarageMark = getAverageMark(students[i]);
      bestStudent = students[i].name;
    }
  }
  return bestStudent;
}

console.log(getBestStudent(students)); //-- > "Anton";

//6 Создайте функцию calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – которая считает какое количество
//раз буква повторяется в слове.
function calculateWordLetters(word) {
  word = word.toLowerCase();
  let amountLetter = {};
  for (let i = 0; i < word.length; i++) {
    amountLetter[word[i]] = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] == word[j]) {
        amountLetter[word[i]] += 1;
      }
    }
  }
  return amountLetter;
}
console.log(calculateWordLetters("тест")); //--> { "т": 2, "е": 1, "с": 1 }

