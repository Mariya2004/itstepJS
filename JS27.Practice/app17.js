//17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let a = [1, 2, 3, 4, 5];
function isPositive(element) {
    return element > 0;
  }
  console.log(a.every(isPositive));