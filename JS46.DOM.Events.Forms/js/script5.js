// 5. Дано форма с полями:
//     - имя
//     - email
//     - выбор пола (радиокнопки)
//     - выпадающий языками программирования
//     - "Я не робот" (чекбокс)
// Если пользователь заполнит все данные, то необоходимо скрыть (не удалить) форму и отобразить эти данные.
// Если хотя бы одно поле не заполнено или заполнено некорректно, то нужно под полем вывести ошибку об этом.

let inp1 = document.querySelector(".inp-1");
let inp2 = document.querySelector(".inp-2");
let inp3 = document.querySelector(".inp-3");
let inp4 = document.querySelector(".inp-4");
let inp5 = document.querySelector("inp-5");

let error1 = document.querySelector(".error-1");
let error2 = document.querySelector(".error-2");
let error3 = document.querySelector(".error-3");
let error4 = document.querySelector(".error-4");
let error5 = document.querySelector(".error-5");

inp1.onblur = function() {
    if (!inp1.value) { 
      inp1.classList.add('inp-error');
      document.querySelector(".error-1").style.display = 'block';
      error1.innerHTML = 'Введите имя'
    }
  };

  inp1.onfocus = function() {
    if (this.classList.contains('inp-error')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      this.classList.remove('inp-error');
      document.querySelector(".error-1").style.display = 'block';
      error1.innerHTML = " ";
    }
  };

  inp2.onblur = function() {
    if (!inp2.value.includes('@')) { 
      inp2.classList.add('inp-error');
      document.querySelector(".error-2").style.display = 'block';
      error2.innerHTML = 'Введите Email'
    }
  };

  inp2.onfocus = function() {
    if (this.classList.contains('inp-error')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      this.classList.remove('inp-error');
      document.querySelector(".error-2").style.display = 'block';
      error2.innerHTML = " ";
    }
  };

let button = document.getElementsByClassName(".btn");
inp3.onblur = function () {
    if (!inp3.checked) {
        inp3.classList.add('inp-error');
      document.querySelector(".error-3").style.display = 'block';
      error2.innerHTML = 'Выберите пол'
    }
}

var form = document.forms["info"];
form.onsubmit = info_submit;
for (var i = 0, a = Array.from(form.gender); i < a.length; i++) {
    var radio = a[i];
    radio.onchange = gender_change;
}
function gender_change() {
    document.getElementsByClassName(".error-3").textContent = "";
}
function info_submit() {
    if (!form.payment.value) {
        document.getElementsByClassName(".error-3").innerHTML = "Выберите пол";
        return false;
    }
}

  
  