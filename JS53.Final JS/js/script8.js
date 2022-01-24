//8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.

var num = 5921;

function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

console.log(getReversedNum(num));


// 8. Дано натурально число.Получить число, которое образуется из записи цифр данного в обратном порядке.

// let arr1 = [1, 2, 3];


// c = arr1;

// c.sort(function(a, b){return b - a});
// console.log(c);