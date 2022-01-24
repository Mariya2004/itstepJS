//1. Дана площать квадрата. Найти его периметр.

let square: number = 25;
let side: number;
side = Math.sqrt(square);

let perimetr: number = side*4;
console.log(perimetr);

//2. Даны длины сторон стреугольника - a, b, c. Определить, является ли он разностронним, равнобедренным или равносторонним

let a: number = 2, b: number = 3, c: number = 4;
if((a == b) && (a == c) && (b == c)) {
    console.log("Треугольник равносторонний");
} else if ((a == b) || (a == c) || (b == c)) {
    console.log("Труегольник равнобедренный");
} else {
    console.log("Треугольник разносторонний");
}

//3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

let a1: number = 2, b1: number = 3, c1: number = 4;
if((a1 + b1) > c1 || (a1 + c1) > b1 || (b1 + c1) > a1) {
    console.log("Можно составить треугольник");
} else {
    console.log("Нельзя составить треугольник");
}

//4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).

let age: number = 25;
if (age < 17) {
    console.log("Молодой");
} else if (age >= 18 && age <= 69) {
    console.log("Взрослый");
} else {
    console.log("Пожилой");
}

//5. Вывести в консоль квадраты чисел от 10 до 20.

let min: number = 10, max: number = 20;
while(min <= max) {
    console.log(Math.pow(min, 2));
    min++;
}

//6. Найти сумму первых 20 натуральных чисел кратных 5.

let sumM: number = 0, n: number = 5, count: number = 1;
while(count <= 20) {
    n = n + 5;
    sumM = sumM + n;
    count++;
    console.log(sumM);
}


//7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).


//8. Разработать функцию для вычисления НОД 2 натуральных чисел.

function nod (a: number, b: number): number {
    while( a != b) {
        if (a>b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}
console.log(nod(4, 8));

//9. Дано предложение. Вывести последнее слово в предложении.

let s: string = "Ввести строку - предложение, найти в отдельной переменной последнее слово";
let word = s.split(' ');
console.log(word[word.length-1]);

//10. Дан массив. Найти сумму только положительных элементов массива.

let list: number[] = [-1, 2, 0, -3, 4, 6, -2];
let sum1: number = 0;
list.forEach(findSum);
function findSum(value: number): number {
    if (value > 0) {
        sum1 += value;
    }
}
console.log(sum1);

//11. Дано предложение. Преобразуйте первую букву каждого слова строки в верхний регистр.

let word2: string = "Ввести строку - предложение, найти в отдельной переменной последнее слово";
word2 = word2.split('');




//12. Проверить 2 массива на полное совпадение.

let array1: number[] = [1, 2, 3];
let array2: number[] = [1, 2, 3];

function isPositive(num: number, index: number): void {
    return num == array2[index];

}
console.log(array1.every(isPositive));

//13. Удалить из предложения все знаки препинания (. , : ; ! ? -).

let punct: string = ".,;:-!?";
let str: string = "Ввести строку - предложение , найти в отдельной переменной последнее слово!";
let newStr: string = str.split('').filter(function(item){
    return punct.indexOf(item) == -1;
}).join("");

console.log(newStr);