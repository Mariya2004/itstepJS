// Все необходимые элементы находятся в index.html
// https://developer.mozilla.org/ru/docs/Web/API/Element
// Свойства: classList, cssText, tagName, firstElementChild, lastElementChild, children, previousElementSibling, nextElementSibling, parentElement, parentNode. 
// Методы: createElement, appendChild, insertBefore, insertAdjacentHTML.

//  1. Элемент: #first-element. 
//  - Добавьте ему класс www.
//  - Удалите у него класс www.
//  - Проверьте наличие у него класса www.
//  - Добавьте ему класс www, если его нет и удалите - если есть.
//  - Узнайте количество его классов.
//  - Выведите последовательно через console.log его классы.
//  - Сделайте его красного цвета, размером 30px, добавьте ему границу
//  - Выведите название его тега в нижнем регистре
//  - Вставьте ему в конец span с текстом 'мой любимый спан'
//  - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
//  - Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
 
//  2. Элемент: #second-element.
//  - Вставьте перед ним span с текстом '!!!'.
//  - Вставьте после него span с текстом '!!!'.
//  - Вставьте ему в начало span с текстом '!!!'.
//  - Вставьте ему в конец span с текстом '!!!'.

// 3. Элемент: #third-element.
//  - Найдите первого потомка этого элемента и сделайте его текст красного цвета.
//  - Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
//  - Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// 4. Элемент: #fourth-element
//  - Найдите его соседа сверху и добавьте ему в конец текст '!'.
//  - Найдите его соседа снизу и добавьте ему в конец текст '!'.
//  - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 

// 5. Элемент: #fifth-element
//  - Найдите его родителя и покрасьте его в синий цвет.
//  - Найдите родителя его родителя и покрасьте его в желтый цвет.

let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
element.classList.add("www");
element.classList.remove("www");
element.classList.contains("www");
element.classList.toggle("www");
element.classList.toggle("www");
console.log(element.classList.length);
console.log(element.classList);
element.style.cssText=`color: red; border-bottom: 1px solid red; font-size: 30px`;
console.log(element.tagName.toLowerCase());
element.insertAdjacentHTML('beforeend', '<span>мой любимый спан</span>');
element.insertAdjacentHTML('beforeend', '<ul><li>createElement</li><li>appendChild</li><li>insertBefore</li>');
element.insertAdjacentHTML('beforebegin', '<div class = "neighbor">еще один сосед</div>');


let element2 = document.getElementById("second-element");
element2.insertAdjacentHTML('beforebegin', '<span>!!!</span>');
element2.insertAdjacentHTML('afterend', '<span>!!!</span>');
element2.insertAdjacentHTML('afterbegin', '<span>!!!</span>');
element2.insertAdjacentHTML('beforeend', '<span>!!!</span>');


let element3 = document.getElementById("third-element");
element3.firstElementChild.style.color='red';
element3.lastElementChild.style.color= 'red';
let children = element3.children;
for (let element of children) {
    element.innerHTML += '!';
}


let element4 = document.getElementById("fourth-element");
element4.previousElementSibling.innerHTML += '!';
element4.nextElementSibling.innerHTML += '!';
let nextNeighbor = element4.nextElementSibling;
nextNeighbor.nextElementSibling.innerHTML += '!';


let element5 = document.getElementById("fifth-element");
element5.parentNode.style.color = 'blue';
element5.parentElement.style.backgroundColor = 'yellow';
