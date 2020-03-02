// 1 У стдентов должны быть следующие свойства: university, course, fullName, они передаются при создании студента
// (в конструктор).

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  _marks = [5, 4, 4, 5];
  //2 Создайте метод this.getInfo() -> "Студент 1го курса Высшей Школы Мошенничества г.Одесса, Остап Родоманський Бендер",
  // метод возвращает совокупную информацию о курсе, учебном заведении и имени студента.
  getInfo() {
    return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}`;
  }
  //3 Создайте геттер оценок this.marks, который возвращает массив оценок студента [5, 4, 4, 5]
  get studentMarks() {
    return this._marks;
  }
  //4 Создайте сеттер оценок this.marks = 5, который позволяет поставить оценку студенту. После того,
  // как оценка поставлена, геттер должен вернуть массив this.marks -> [5, 4, 4, 5, 5]
  set studentMarks(value) {
    if (this._marks != null) {
      this._marks.push(value);
    }
  }
  //5 Создайте метод получения среднего балла this.getAverageMark() -> 4.6
  getAverageMark() {
    let sum = 0;
    if (this._marks != null) {
      for (let i = 0; i < this._marks.length; i++) {
        sum += this._marks[i];
      }
    } else {
      return null;
    }
    return sum / this._marks.length;
  }
  //6 оздайте метод this.dismiss, который "исключит" студента. После вызова этого метода – ставить студенту оценки
  //  и получать их больше нельзя. (Никаких ошибок, просто возвращается всегда null вместо массива оценок)
  dismiss() {
    this._marks = null;
    return console.log(`Cтудент відрахований!`);
  }
  // 7 Создайте метод this.recover, который позволит восстановить студента
  recover() {
    this._marks = [5, 4, 4, 5];
    return console.log(`Cтудент зачислений повторно!`);
  }
}

let studentOne = new Student("LP", 3, "Ivan Ivanovych Ivanov");
console.log(studentOne.getInfo());
console.log(studentOne.studentMarks);
studentOne.studentMarks = 5;
console.log(studentOne.studentMarks);
console.log(studentOne.getAverageMark());
studentOne.dismiss();
console.log(studentOne.studentMarks);
studentOne.recover();
console.log(studentOne.getAverageMark());

// Advanced

// 1 Создайте новый класс BudgetStudent, который полностью наследует класс Student

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    //3 Метод получения стипендии автоматически вызывается каждые 30 секунд после создания объекта.
    //Подсказка: вызывайте его в constructor
    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }
  //2 Бюджетный студент может получать стипендию с помощью метода this.getScholarship. Получение стипендии
  //сопровождается выводом информации в консоль: Вы получили 1400 грн. стипендии
  getScholarship() {
    //4 Студент получает стипендию только в том случае, если средний балл у него выше или равен 4.0
    const scholarship = 1400;
    if (this.getAverageMark() > 4) {
      return console.log(`Ви отримали ${scholarship}грн. стипендії`);
    }
    // 5 Если студент исключен, он не получает стипендию (думаю это было и так очевидно :) )
    else if (this._marks === null) {
      return console.log(`Ви не маєте стипендії`);
    } else {
      console.log(`Ваш бал занизький для отримання стипендії`);
    }
  }
}
let studentTwo = new BudgetStudent("LP", 2, "Bohdan Ivanovych Ivanov");
console.log(studentTwo.getInfo());
console.log(studentTwo.studentMarks);
studentTwo.getScholarship();
