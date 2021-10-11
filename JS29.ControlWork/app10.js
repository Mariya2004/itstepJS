//10. Удалить из предложения все знаки препинания (. , : ; ! ? -).

let str = 'я. учу, javascript: я; учу! javascript? js-';
let punct = ".,:;!?-";

let newStr = str.split("").filter(function(item) {
    return punct.indexOf(item) == -1;
}).join("");

console.log(newStr);