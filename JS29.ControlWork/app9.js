//9. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива.

let arr = [1,3,6,4,3,3,5,6];
let sum = 0;
function average (sum) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

let result = average(sum);
console.log(result);

let I = arr.filter(function(item) {
    return item > result;
})
console.log(I);