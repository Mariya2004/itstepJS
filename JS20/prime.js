let sum = 0;
let i = 2;

while (i <= 100) {
    sum += i;
    i+=2;
}

console.log(sum);


for (let sum = 0, i = 2; i <= 100; i += 2 ) {
    sum += i;
}

console.log(sum);

sum = 0;
i = 2;
do {
    sum += i;
    i += 2;
} while (i <= 100);
console.log(sum);


let n = 1000000, m = 0;
while (n != 1) {
    if (n % 2 == 0) {
        n /= 2;
    } else {
      n = (n*3 + 1) / 2;
    }
    m++;
}
console.log(m);
  

let p = 1, r = 0;
while (r != 51) {
    p++;
    if (p % 7 == 0 && p % 5 != 0) {
        r++;
    }
}
console.log(p);



