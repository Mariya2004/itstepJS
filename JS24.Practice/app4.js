let a = [];
const min = 1, max = 100, n = 10;
let minElement = a[0], maxElement = minElement;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(a);
let elementMax = a[0], elementMin = a[0], temp = 1, temp2 = 1;
for(let i = 1; i < n; i++){
    if(a[i] > elementMax) {
        elementMax = a[i];
    };
    if(a[i] < elementMin) {
        elementMin = a[i];
        
    };
}
temp = elementMax;
elementMax = elementMin;
elementMin = temp;

console.log(a);