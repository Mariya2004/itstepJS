//1
let sideSquare = Math.sqrt(9);
let squareArea = sideSquare**2;
let perimeter = sideSquare*4;
console.log(perimeter);

//2
let sideA = 2, sideB = 2, sideC = 2;
if (sideA === sideB === sideC) {
    console.log("Равносторонний треугольник");
} else if (sideA !== sideC && sideB !== sideC && sideA === sideB) {
    console.log("Равнобедренный треугольник");
} else {
    console.log("Разносторонний треугольник");
}

//3
let aSide = 3, bSide = 4, cSide = 8;
if ((aSide < cSide && bSide < cSide) && (aSide + bSide) < cSide) {
    console.log("Можно составить треугольник");
} else {
    console.log("Ошибка");
}

//5
let num1 = 8;
let num2 = 5;
let sum = num1 + num2;
if (sum % 2 == 0) {
    console.log(num1*num2);
} else {
    console.log(num1/num2);
}

//6
let age = 35;
if (age < 17) {
    console.log("Молодой");
} else if (age >= 18 && age <=69) {
    console.log("Взрослый");
} else {
    console.log("Пожилой");
}

//7
let radiusCircle = 1;
let sideSquare2 = 5;
if (radiusCircle*2 < sideSquare2) {
    console.log("Круг помещается в квадрат");
} else if ((Math.sqrt(2)*sideSquare2) < radiusCircle*2) {
    console.log("Квадрат помещается в круг");
} else {
    console.log("Не помещается");
}

//8
let year  = 2020;
let month = 2;
let day   = 31;

let date = new Date(year, month, day);

if (date.getFullYear() == year && date.getMonth() == month && 
	date.getDate() == day) { 
	console.log('Некорректна');
} else {
	console.log('Корректна');
}

//9
let x = 87, y = 30;
if (x < 0 && y > 0) {
    console.log("Первая четверть");
} else if (x > 0 && y > 0) {
    console.log("Вторая четверть");
} else if (x > 0 && y < 0) {
    console.log("Третья четверть");
} else if (x < 0 && y < 0) {
    console.log("Четвертая четверть");
} else {
    console.log("Лежит на оси координат");
}

//11



//12
let summ = 0;
let n = 0;
count = 0;
do {
    if (n % 5 == 0) {
        count++;
        n += 5;
        summ += n;
        console.log(summ);
    }
} while (count != 20);


//13
for (let number = 10; number <= 20; number++) {
    console.log(number**2);
}

//14
let N = 1, m = 120, sumNm = 0;
while (N <= 5) {
    N++;
    m += 10;
    sumNm += m;
    
}
console.log(sumNm);

//15
