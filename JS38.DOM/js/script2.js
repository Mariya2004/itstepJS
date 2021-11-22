

// let square = "<div class = 'big-square'>";

// for (let i = 1; i <= 8; i++) {

//    for (let j = 1; j <= 8; j++) {
//     if ((i + j)%2 == 0) {
//         square += "<div class='black'></div>";
//     } else {
//         square += "<div class = 'white'></div>";
//     }
// }
// square += "</div>";




let array = ["apple", "lemon", "watermelon", "orange"];

out = "<ul>";
for (let i = 0; i <= array.length; i++) {
    out = `<li>${array[i]}</li>`;
}

out += "</ul>";

document.write(out);