// Все необходимые элементы находятся в index.html
// https://developer.mozilla.org/ru/docs/Web/API/Element

// 1. Элемент: #first-element. 
// - поменяйте "Я сосед" на "Я хороший сосед"
// - добавить к каждому соседу его номер, например, "Я хороший сосед №2"
// - оберните текст в элементах с классом "neighbor" в тег span
// - замените теги span на тег b
// - замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"

// 2. Элемент: #second-element.
// - добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
// - каждый четный пункт покрасить в красный цвет
// - каждому нечетному пункту добавить класс odd-element
// - элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

// 3. Элемент: #third-element.
// - заменить теги b на strong
// - удалить в тегах strong все теги, т.е. должен остаться только текст
// - обернуть каждое слово в тег span 

// 4. Элемент: #fourth-element
// - Выведите на экран текст из всех тегов div
// - Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст
// - удалить третьего "соседа"
// - добавить "пятого" соседа после четвертого
// - пятому соседу добавить границу, внутренние отступы и фон


let element = document.getElementById("second-element");
//2.1
let ul = document.createElement("ul");

for(let i = 1; i <= 10; i++){
    let li = document.createElement("li");
    li.innerHTML = `Пункт ${i}`;
    ul.appendChild(li);
}

element.appendChild(ul);

//2.2

let evenItems = document.querySelectorAll("#second-element ul li:nth-child(2n)");
evenItems.forEach(function(item){
    item.style.color = "#f00";
})

evenItems = element.getElementsByTagName("li");
for(let i = 0; i < evenItems.length; i++){
    if( i % 2 == 1){
        evenItems.item(i).style.color = "red";
    }
}

//2.3
let oddItems = document.querySelectorAll("#second-element ul li:nth-child(2n+1)");
oddItems.forEach(function(item){
    item.classList.add("odd-element");
})

//2.4
let items = document.querySelectorAll("#second-element ul li:nth-child(3n)");
items.forEach(function(item){
    if(item.classList.contains("odd-element")){
        item.style.fontSize = "28px";   
    }
})


//3

element = document.getElementById("third-element");

//3.1
let tagBs = element.getElementsByTagName("b");
let x = tagBs.length;
for(let i = 0; i < x; i++){
    tagBs.item(0).outerHTML = `<strong>${tagBs.item(0).innerHTML}</strong>`;    
}

//3.2
let strongs = element.getElementsByTagName("strong");
//console.log(strongs)
for(let i = 0; i < strongs.length; i++){
    let x = strongs.item(i);
    let newContent = "";
    for(let j = 0; j < x.childNodes.length; j++){
        newContent += x.childNodes.item(j).textContent;
    }
    x.innerHTML = newContent;
}   

//3.3
for(let i = 0; i < strongs.length; i++){
    let words = strongs.item(i).textContent.split(" ");
    strongs.item(i).innerHTML = "";
    words.forEach(function(word){
        let span = document.createElement("span");
        span.textContent = word;
        strongs.item(i).appendChild(span);
    });
}

// 4 
element = document.getElementById("fourth-element");

//4.1
let divs = element.parentElement.getElementsByTagName("div");

for(let i = 0; i < divs.length; i++){
    console.log(divs.item(i).textContent);
}

//4.2
let texts = [];
for(let i = 0; i < divs.length; i++){
    texts.push(divs.item(i).textContent);
}
texts.reverse();
for(let i = 0; i < divs.length; i++){
    divs.item(i).textContent = texts[i];
}

//4.3
divs.item(1).remove(); //divs.item(1).outerHTML = "";

//4.4
divs.item(0).insertAdjacentHTML("afterend", "<div>Я пятый сосед</div>");

//4.5
divs.item(1).style.border = "1px solid #000";
divs.item(1).style.padding = "10px";
divs.item(1).style.backgroundColor = "#ff0";