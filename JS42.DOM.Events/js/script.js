// 1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.
// 2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.
// 3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.
// 4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.
// 5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, яввляется ли введеное значение числом.
// 6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее адрес.
// 7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.
// 8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.

//1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.
let button1 = document.getElementById("but1");
let p1 = +document.getElementById("p1").textContent;
button1.onclick = function () {
   p1++;
   document.getElementById("p1").textContent = p1;
}


//2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.
document.getElementById("but2").onclick = function () {
    document.getElementById("p2").style.fontWeight = 'bold';
}

//3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.
document.getElementById("but3").onclick = function () {
   let classes = document.getElementsByTagName("div").item(0).classList;

   let ol = document.createElement("ol");

   for (let i = 0; i < classes.length; i++) {
       let li = document.createElement("li");
       li.textContent = classes[i];
       ol.appendChild(li);
   }

   document.getElementsByTagName("div").item(0).append(ol);
    
}


//4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.
document.getElementById("but4").onclick = function () {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}


//5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, яввляется ли введеное значение числом.
document.getElementById("but5").onclick = function () {
    let x = +document.getElementById("input3").value;
    if (x) {
        console.log("Введенное значение является числом");
    } else {
        console.log("Введенное значение НЕ является числом");
    }

}

// 6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее адрес.
document.getElementsByTagName("button").item(5).onclick = function () {
    let href = document.getElementsByTagName("a").item(0).href;
    document.getElementsByTagName("a").item(0).textContent = href;
}

// 7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.
document.getElementById("but7").onclick = function () {
    document.getElementById("input4").value = '';
}

// 8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.
let colors = ["red", "blue", "green", "black", "yellow"];

document.getElementById("but8").onclick = function () {
    let someColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("but9").style.background = someColor;
        document.getElementById("but10").style.background = someColor;
}

document.getElementById("but9").onclick = function () {
    let someColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("but8").style.background = someColor;
    document.getElementById("but10").style.background = someColor;
}

document.getElementById("but10").onclick = function () {
    let someColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("but9").style.background = someColor;
    document.getElementById("but8").style.background = someColor;
}

