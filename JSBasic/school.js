var sideSquare = 4;
var perimeter = sideSquare*4;
console.log(perimeter);

var radiusCircle = 3;
var circleSquare = Math.PI*(radiusCircle**2);
console.log(circleSquare);

var katetA = 4;
var katetB = katetA;
var gipotenuzaC = Math.sqrt(katetA**2 + katetB**2);
console.log(gipotenuzaC);

var a = 1;
var b = 2;
var c;
c = a;
a = b;
b = c;
console.log(`${a} ${b}`);  

var a = 1;
var b = 2;
[a, b] = [b, a];
console.log(`${a} ${b}`);

var number = 123;
var thirdNumber = number%10; 
var secondNumber = (number - thirdNumber) / 10 % 10;
var firstNumber = (number - 10 * secondNumber - thirdNumber) / 100;
console.log(firstNumber + secondNumber + thirdNumber);
console.log(thirdNumber * 100 + secondNumber * 10 + firstNumber);

var credit = 1000;
var percent = 10;
var year = 3;
var different = credit * (1+percent/100)**year - credit;
console.log(different);

var min = 1;
var max = 10;
var result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);








