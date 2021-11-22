let min = 1, max = 100, sum = 0;
let a = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a[i] % 2 == 0) {
        sum++;
    }
}
console.log(sum);

let maxElement = a[0];
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
}
console.log(maxElement);


for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    sum += a[i];
}
console.log(sum/10);


for (var i = 1; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    var reversed = a.reverse();
}
console.log(reversed);