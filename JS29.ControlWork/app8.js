//8. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов.

let number = 1, number2 = 3;

let arr = [1,3,6,4,3,3,5,6];
arr = arr.filter(function (item) {
    return item !== number
});

arr = arr.filter(function (item) {
    return item !== number2
});

console.log(arr);