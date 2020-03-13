/*
Создайте функцию, которая возвращает промис getRandomChinese(length). Функция работает следующим образом:

Запускается цикл(подсказка: можно использовать while) length раз, каждый проход цикла смотрим на последние 5 цифр 
результата вызова метода Date.now() Например получили const sign = 16086;.
Конвертируем полученныую цифру в строку String.fromCharCode(sign); и ждем 50 ms
Функция gerRandomChinese(length) должна вернуть строку длинной (length) с китайскими иероглифами. 
Время работы промиса должно составлять length * 50ms.
(Если вызвать getRandomChinese(4), получим результат "촛궻簽紙" за 200ms
*/
function getOneSymbol() {
  const sign = new Promise(num => {
    setTimeout(() => {
      +num(String.fromCharCode(Date.now() % 100000));
    }, 50);
  });

  return sign;
}
async function getRandomChinese(length) {
  let i = 0;
  let stringOfChineseChars = "";
  while (i < length) {
    stringOfChineseChars += await getOneSymbol();
    i++;
  }
  return console.log(stringOfChineseChars);
}
getRandomChinese(4);
