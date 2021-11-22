// 1. Дан квадратный зеленый блок.
//     - при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
//     - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
//     - при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.


document.querySelector(".square").onmouseover = function(event){
    event.target.classList.add("bg-blue")
}

document.querySelector(".square").onmouseout = function(event){
    event.target.classList.remove("bg-blue")
}

document.querySelector(".square").oncontextmenu = function (event) {
    event.target.classList.add("big-square");
}

document.querySelector(".square").onclick = function (event) {
    event.target.classList.add("small-square");
}

