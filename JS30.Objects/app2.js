let calculator = {
    a: 0,
    b: 0,
    sum () {
        return this.a + this.b
    },
    sub () {
        return this.a - this.b
    },
    mul () {
        return this.a * this.b
    },
    div () {
        return this.a / this.b
    },

};

let x = 4;
let y = 5;

calculator.a = y, calculator.b = 2;
let o1 = calculator.mul();

calculator.a = x, calculator.b = o1;
let o2 = calculator.sub();

calculator.a = x, calculator.b = y;
let o3 = calculator.sum();

calculator.a = o2, calculator.b = o3;
let o4 = calculator.div();

console.log(o4);




function Calculator2 () {
    this.sum = function (a, b) {
        return a + b;
    };
    this.sub = function(a, b) {
        return a - b
    };
    this.mul = function(a, b) {
        return a * b
    };
    this.div = function(a, b) {
        return a / b
    };
};

x = 4, y = 5;
let calc = new Calculator2;
let result2 =  calc.div(calc.sub(x, calc.mul(y, 2)), calc.sum(x, y));
console.log(result2);
