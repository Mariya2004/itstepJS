// 3. Дана шахматная таблица 4х4 и 3 кнопки
//     - при нажатии на первую кнопку на доску случайным образом должна помещаться шашка в одну из клеток. Если шашка уже стоит, то она должна удалятся и ставится новая;
//     - при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;
//     - при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".first").onclick = function(){
    let chess = document.querySelector(".chess");
    if(chess)
        chess.remove();

    chess = document.createElement("div");
    chess.classList.add("chess");

    let x = getRandomNumber(0,15);

    document.querySelectorAll(".box > div").item(x).append(chess);
}

document.querySelector(".second").onclick = function(){
    let cells =  document.querySelectorAll(".box > div");

    cells.forEach(function(cell){
        cell.classList.toggle("white");
        cell.classList.toggle("black");
    });
}
var angle = 0;
document.querySelector(".third").onclick = function(){
    angle += 90;
    document.querySelector(".box").style.transform = `rotate(${angle}deg)`;
}