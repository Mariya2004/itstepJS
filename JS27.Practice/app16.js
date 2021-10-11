//16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

let a = [1, 2, 3, 4, 5];
let newArr = a.map(function(x){
    return x * x;
})
console.log(newArr);