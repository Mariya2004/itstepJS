let input;
let random = Math.floor(Math.random() * 10);

while (input = prompt('Введите число от 0 до 9')) {
    if (input > random) {
        alert('Меньше');
    } else if (input < random) {
        alert('Больше');
    } else if (input == random) {
        alert('Правильно!');
    } else {
        alert('ВВедите число');
    }
}