//1. Дана площать квадрата. Найти его периметр.
var square = 25;
var side;
side = Math.sqrt(square);
var perimetr = side * 4;
console.log(perimetr);
//2. Даны длины сторон стреугольника - a, b, c. Определить, является ли он разностронним, равнобедренным или равносторонним
var a = 2, b = 3, c = 4;
if ((a == b) && (a == c) && (b == c)) {
    console.log("Треугольник равносторонний");
}
else if ((a == b) || (a == c) || (b == c)) {
    console.log("Труегольник равнобедренный");
}
else {
    console.log("Треугольник разносторонний");
}
//3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 
var a1 = 2, b1 = 3, c1 = 4;
if ((a1 + b1) > c1 || (a1 + c1) > b1 || (b1 + c1) > a1) {
    console.log("Можно составить треугольник");
}
else {
    console.log("Нельзя составить треугольник");
}
//4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).
var age = 25;
if (age < 17) {
    console.log("Молодой");
}
else if (age >= 18 && age <= 69) {
    console.log("Взрослый");
}
else {
    console.log("Пожилой");
}
//5. Вывести в консоль квадраты чисел от 10 до 20.
var min = 10, max = 20;
while (min <= max) {
    console.log(Math.pow(min, 2));
    min++;
}
//6. Найти сумму первых 20 натуральных чисел кратных 5.
var sumM = 0, n = 5, count = 1;
while (count <= 20) {
    n = n + 5;
    sumM = sumM + n;
    count++;
    console.log(sumM);
}
//7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).
//8. Разработать функцию для вычисления НОД 2 натуральных чисел.
function nod(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    return a;
}
console.log(nod(4, 8));
//9. Дано предложение. Вывести последнее слово в предложении.
var s = "Ввести строку - предложение, найти в отдельной переменной последнее слово";
var word = s.split(' ');
console.log(word[word.length - 1]);
//10. Дан массив. Найти сумму только положительных элементов массива.
var list = [-1, 2, 0, -3, 4, 6, -2];
var sum1 = 0;
list.forEach(findSum);
function findSum(value) {
    if (value > 0) {
        sum1 += value;
    }
}
console.log(sum1);
//11. Дано предложение. Преобразуйте первую букву каждого слова строки в верхний регистр.
var word2 = "Ввести строку - предложение, найти в отдельной переменной последнее слово";
word2 = word2.split(' ');
//12. Проверить 2 массива на полное совпадение.
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
function isPositive(num, index) {
    return num == array2[index];
}
console.log(array1.every(isPositive));
//13. Удалить из предложения все знаки препинания (. , : ; ! ? -).
var punct = ".,;:-!?";
var str = "Ввести строку - предложение , найти в отдельной переменной последнее слово";
var newStr = str.split('').filter(function (item) {
    return punct.indexOf(item) == -1;
}).join("");
console.log(newStr);
