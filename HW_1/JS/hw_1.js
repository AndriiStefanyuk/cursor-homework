
//Создайте 3 переменных со следующими значениями: 15.678, 123.965, 90.2345. Эти переменные хранят цены на товары.
let priceOfBread = 15.678,
  priceOfMeat = 123.965,
  priceOfChicken = 90.2345;
//Используя встроенный объект Math – выведите максимальное число
let maxPrice = Math.max(priceOfBread, priceOfMeat, priceOfChicken);
console.log(maxPrice);
//Используя встроенный объект Math – выведите минимальное число
let minPrice = Math.min(priceOfBread, priceOfMeat, priceOfChicken);
console.log(Math.min(priceOfBread, priceOfMeat, priceOfChicken));
// console.log(maxPrice.toFixed(2));
// console.log(Math.min(priceOfBread, priceOfMeat, priceOfChicken).toFixed(2));

//Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму

let totalPriceOfGoods = priceOfBread + priceOfMeat + priceOfChicken;
console.log(totalPriceOfGoods);
// console.log(totalPriceOfGoods.toFixed(2));

//Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить копейки в наших товарах)
// и выведите это значение. Округление использовать в МЕНЬШУЮ сторону.

let approximateTotalPriceOfGoods =
  Math.floor(priceOfBread) +
  Math.floor(priceOfMeat) +
  Math.floor(priceOfChicken);
console.log(approximateTotalPriceOfGoods);

//Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)

let roundedToHundretsTotalPriceOfGoods =
  Math.ceil(totalPriceOfGoods / 100) * 100;
console.log(roundedToHundretsTotalPriceOfGoods);

//Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?

let isEven = Math.floor(totalPriceOfGoods) % 2 === 1 ? false : true;
console.log(`Чи є сума всіх товарів парною: ${isEven}`);

//Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.

let change;
let moneyFromClient = 500;

change = moneyFromClient - totalPriceOfGoods;
console.log(change);

//Выведите среднее значение цен, округленное до второго знака после запятой

let averagePrice = (totalPriceOfGoods / 3).toFixed(2);
console.log(averagePrice);

//(Более сложное) Создайте переменную, в которой сохраним случайную скидку (используйте функцию Math.random).

let randomDiscountInPercents = Math.floor(Math.random() * 51); //ніхто не дасть знижку більшу ніж ціна закупки
console.log(randomDiscountInPercents);

let randomDiscountInHryvnia = (
  (totalPriceOfGoods * randomDiscountInPercents) /
  100
).toFixed(2);
console.log(randomDiscountInHryvnia);

let totalAmountWithDiscount = (
  totalPriceOfGoods - randomDiscountInHryvnia
).toFixed(2);
console.log(totalAmountWithDiscount);

let changeIfDiscountIsIncluded = (moneyFromClient - totalAmountWithDiscount).toFixed(2);

let lostProfit = (totalPriceOfGoods / 2 - randomDiscountInHryvnia).toFixed(2);
console.log(lostProfit);

function toShowResult() {
  let listOfResults = `
<h1>Результати обрахунків</h1><br/>
<h3>Максимальна ціна: ${maxPrice} грн;<br/>
Мінімальна ціна: ${minPrice} грн;<br/>
Загальна вартість: ${totalPriceOfGoods} грн;<br/>
Загальна вартість з заокругленням цін: ${approximateTotalPriceOfGoods} грн;<br/>
Загальна вартість заокруглена до сотень: ${roundedToHundretsTotalPriceOfGoods} грн;<br/>
Чи є сума всіх товарів парною: ${isEven};<br/>
Середня ціна становить: ${averagePrice} грн;<br/>
Знижка клієнту становить: ${randomDiscountInPercents} %, ${randomDiscountInHryvnia} грн;<br/>
До сплати зі знижкою: ${totalAmountWithDiscount} грн;<br/>
Сума здачі з ${moneyFromClient} грн: ${changeIfDiscountIsIncluded} грн;<br/>
Втрачена вигода становить: ${lostProfit} грн;</h3>`;
  document.getElementById("result").innerHTML = listOfResults;
}
