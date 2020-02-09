/*Каждое задание выполняется в виде чистой функции. Функция возвращает массив или другое значение, но не меняет его!
В косноль/html выводите результат вызова функции:
const pairs = getPairs(students);
console.log(pairs);

Перед выполнением этого домашнего задания необходимо создать 3 массива:
const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

    */
const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных"
];
const marks = [4, 5, 5, 3, 4, 5];

//1 Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с
//парами студентов: [["Саша", "Лена"], [..], [...]];

function getPairs(students) {
  return [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]]
  ];
}
const pairs = getPairs(students);
console.log(pairs);

// 2 Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. Должен получиться
// вложенный массив вида: [["Саша и Лена", "Теория автоматов"], [...], [...]]
let pairsWithThems = [];
function chooseThems(pairs, themes) {
  for (let i = 0; i < pairs.length; i++) {
    pairsWithThems[i] = [pairs[i].join(" и "), themes[i]];
  }
  return pairsWithThems;
}
console.log(chooseThems(pairs, themes));

//3 Сопоставьте оценки(marks) со студентом(students): [["Саша", 4], [...], [...]]

function getMarks(students, marks) {
  let studensMarks = [];
  for (let i = 0; i < students.length; i++) {
    studensMarks[i] = [students[i], marks[i]];
  }
  return studensMarks;
}
console.log(getMarks(students, marks));

//4 Поставьте каждой паре случайную оценку(от 1 до 5) за проект(тут функция будет нечистой, но не должна мутировать
//  массив): [["Саша и Лена", "Теория автоматов", 5], [...], [...]]
function getMarksForProject(pairsWithThems) {
  let pairsMarks = [];
  let rangomMarks;

  for (i = 0; i < pairsWithThems.length; i++) {
    rangomMarks = Math.floor(Math.random() * 5 + 1);
    pairsMarks[i] = [pairsWithThems[i].concat(rangomMarks)];
  }
  return pairsMarks;
}
console.log(getMarksForProject(pairsWithThems));
