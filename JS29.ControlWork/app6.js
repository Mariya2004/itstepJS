//6. Проверить 2 массива на полное совпадение.

let a = [1, 2, 3];
let b = [1, 2, 3];

let result = a.every(function(item, index, b) {
    return item == b[index];
});
 console.log(result);