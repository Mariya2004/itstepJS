// 2. Дано 3 поля ввода. После ввода ухода курсора из каждого поля необходимо выводить сообщение об ошибки под полем, если
//     - в первом поле ничего не введено
//     - во втором поле введено не число
//     - в третьем поле введен не email


let inp1 = document.querySelector(".inp-1");
let inp2 = document.querySelector(".inp-2");
let inp3 = document.querySelector(".inp-3");

let error1 = document.querySelector(".error-1");
let error2 = document.querySelector(".error-2");
let error3 = document.querySelector(".error-3");

inp1.onblur = function() {
    if (!inp1.value) { 
      inp1.classList.add('inp-error');
      document.querySelector(".error-1").style.display = 'block';
      error1.innerHTML = 'Пожалуйста, введите данные'
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
    if (!(inp2.value >= '0' && inp2.value <= '9')) { 
      inp2.classList.add('inp-error');
      document.querySelector(".error-2").style.display = 'block';
      error2.innerHTML = 'Пожалуйста, введите номер'
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

inp3.onblur = function() {
    if (!inp3.value.includes('@')) { // не email
      inp3.classList.add('inp-error');
      document.querySelector(".error-3").style.display = 'block';
      error3.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  };

  inp3.onfocus = function() {
    if (this.classList.contains('inp-error')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      this.classList.remove('inp-error');
      document.querySelector(".error-3").style.display = 'block';
      error3.innerHTML = " ";
    }
  };