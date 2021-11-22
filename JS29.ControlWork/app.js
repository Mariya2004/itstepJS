//1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением.

let arr = [], value = 5, n = 5;
arr.length = n;
let arr2 = arr.fill(value, 0, n);
console.log(arr2);
