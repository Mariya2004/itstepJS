import {Veterinarian} from './veterinarian.js';
import {Animal} from './animal.js';
import {Dog} from './dog.js';
import {Cat} from './cat.js';
import {Horse} from './horse';


let animals = ["Собака", "Кот", "Лошадь"];

for (let animal of animals) {
    Veterinarian.treatAnimal(animal);
}

let veterinarian = new Veterinarian();
let dog = new Dog("мясо", "дом", "Рекс");
let cat = new Cat("молоко", "двор", "Пушистик");
let horse = new Horse("сено", "поле", "Звезда");


