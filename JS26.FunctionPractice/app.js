//1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber (min, max) {
    let random = Math.floor(Math.random()*(max - min + 1)) + min;
    return random;
}

console.log(randomNumber(1, 100));