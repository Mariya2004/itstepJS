//18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

let a = [1, 2, -3, 4, 5];
function isNegative(element) {
    return element < 0;
  }
  console.log(a.some(isNegative));