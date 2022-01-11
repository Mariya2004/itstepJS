//1.Написать функцию, принимающую в аргументах 2 строки и возвращающую true, если эти строки состояит из идентичных букв и false в противном случае. 


function isEqual(str1, str2) {
    if(str1.split("").sort().join("") == str2.split("").sort().join("")) {
        return true;
    }
    return false;
}

//2.Напишите функцию, которая будет проходить через масив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

function outArray(arr) {
    let i = 0;
    let counter = setInterval(function() {
        console.log(i);
        i++;
        if(i == arr.length)
            clearInterval(counter);
    }, 3000);
}

outArray([1,2,3,4,5]);








