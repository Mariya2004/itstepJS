//1. Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = 'js';
console.log('js'.toUpperCase());

//2. Дана строка 'JS'. Сделайте из нее строку 'js'.

str = 'JS';
console.log('JS'.toLowerCase());

//3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

str = 'я учу javascript!';
console.log('я учу javascript!'.length);

//4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

str = 'я учу javascript!';
console.log(str.slice(2, 16));
console.log(str.substring(2, 16));
console.log(str.substr(2, 14));

//5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

console.log(str.indexOf('учу'));

//6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

let n = 5, result;
if(str.length > n) {
    result = str.substring(n);
} else {
    result = str;
}
console.log(result);

//7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.

str = 'Я-учу-javascript!';
let re = 'Я!учу!javascript!';
let newStr = re.replace(str, 'Я!учу!javascript!');
console.log(newStr);

//8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

str = 'я учу javascript!';
let arr = str.split(' ');
console.log(arr);

//9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

str = 'я учу javascript!';
arr = str.split('');
console.log(arr);

//10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let date = '2025-12-31';
newDate = date.split('-').reverse().join('.');

//11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+'));


//12. Преобразуйте первую букву строки в верхний регистр.

str = 'я учу javascript!';
newStr = 'я учу javascript!'[0].toUpperCase() + str.slice(1);
console.log(newStr);

//13. Преобразуйте первую букву каждого слова строки в верхний регистр.

str = 'я учу javascript!';

console.log(str);

//14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

str = 'var_test_text';
