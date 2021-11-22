//15. Дан массив с числами. Найдите сумму этих чисел.

let a = [1, 2, 3, 4, 5];
let sum = 0;
a.forEach(function(x) {
   sum += x;
})
console.log(sum);