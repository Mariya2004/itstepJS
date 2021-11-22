//5. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let newArr = arr.concat(arr2, arr3);

console.log(newArr.sort((a, b) => b - a));