//1. Создайте пустой объект user.

let user = {};

//2. Добавьте свойство name со значением John.

user.name = "John";

//3. Добавьте свойство surname со значением Smith.

user.surname = "Smith";

//4. Измените значение свойства name на Pete.

user.name = "Pete";

//5. Удалите свойство name из объекта.

delete user.name;
console.log(user);

//6. Пусть дан объект с зарплатами сотрудников
//Найти сумму зарплат с использованием for..in.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//7. Дан объект 
//Написать код, который создает его точный клон (новый объект с такой же структурой).
let user1 = {
  name: "Иван",
  age: 30
};

let clone = {};
for (let key in user1) {
    clone[key] = user1[key];
}
console.log(clone);


//8. Дан объект 
//Написать код, который создает его точный клон (новый объект с такой же структурой).
let user2 = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone2 = {};
for (let key in user2) {
    if(typeof user[key] != "object") {
        clone2[key] = user2[key];
    } else {
        clone2 = {};
        for(let key1 in user2[key]) {
            clone2[key][key1] = user2[key][key1];
        }
    }
}
console.log(clone2);

// 9.Проверка объекта на пустоту

let object = {};
function isEmpty (object) {
    for (let key in object) {
        return false;
    }
    return true;
}
console.log(isEmpty(object));


//10. Если значения числовые, то умножить их на 2(проверка на числовые значения)
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multyplyNumeric(object) {
    for (let key in object) {
        if(typeof object[key] == "number") {
            object[key] *= 2;
        }
    }
}
multyplyNumeric(menu);
console.log(menu);
