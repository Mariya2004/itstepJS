//14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

let a = [1, 2, 3, 4, 5];
let newArr = [];
a.forEach(function(x) {
	newArr.push(x * x);
});
console.log(newArr);  