let a = 3;
if (a % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

let year = 2020;
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    console.log("високосный");
} else {
    console.log("невисокосный");
}

// грибы
let b = 10;
if (b % 100 > 10 && b % 100 < 20 || b % 10 > 4 && b % 10 < 10 || b % 10 == 0) {
    console.log(b + " грибов");
} else if (b % 10 == 1) {
    console.log(b + " гриб");
} else {
    console.log(b + " гриба");
}


//доставка
let day = 3;
let hour = 18;
if ((day >= 1 && day <= 6) && (hour >= 8 && hour <= 16)) {
    console.log("Доставка " + day + " после 16")
} ;
if ((day >= 1 && day < 6) && (hour > 16)) {
    console.log("Доставка " + ++day + " с 8 до 16") 
};
if (day == 6 && hour > 16 || day == 7) {
    console.log("Доставка 1" + " с 8 до 16")
};
if (day <= 6 && hour < 8) {
    console.log("Доставка сегодня с 8 до 16")
}
