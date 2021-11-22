// 1. Заполнить функцию
// 2. Четные элементы в массиве удвоить
// 3. Написать функцию, удаляющую элемент массива
// 4. Вывести массив с уникальными элементами

function fillArray(a, n) {
    const min = 1, max = 100;
    for (let i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
    }
    return a;
}

function increaseEven (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            a[i] = a[i]*2;
        }
    }
    return a;
}

function cutElement (a) {
    let k = 3;
    for (let i = k; i < a.length; i++) {
        a[i] = a[i + 1];
    }
    return a;
}

function newArray (a) {
    for (let i = 0; i < a.length; i++)  { 
        let x = a[i];
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] == x) {
                for (let k = j + 1; k < a.length; k++) {
                    a[k - 1] = a[k];
                }
                a.length--;
                j--;
            }
        }
     }
    return a;
}

let b = [];
b = fillArray(b, 10);
console.log(b);
b = increaseEven(b);
console.log(b);
b = cutElement(b);
console.log(b);
b = newArray(b);
console.log(b);
