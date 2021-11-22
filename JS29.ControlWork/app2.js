//2. Найти сумму только положительных элементов массива.

let a = [1, -1, 5, 7, -3, 2, -4];
let sum = 0;
function positiveNumbers (sum) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}
let result = positiveNumbers(sum);
console.log(result);