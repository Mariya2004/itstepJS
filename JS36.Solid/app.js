import {Client} from './clients.js';
import {Order} from './orders.js';
import {Pet} from './pets.js';
import {Petsitter} from './petsitters.js';
import {Review} from './reviews.js';
import {Service} from './services.js';
import {User} from './users.js';

let cat = new Pet ("Барсик", "кот", "дворовой", 10);
let dog = new Pet ("Тузик", "собака", "овчарка", 8);

let client = new Client ("Иван", "ghjl", "123456");

client.addPet(cat);
client.addPet(dog);

console.log(client.checkPet("Барсик"));

let service = new Service("Выгул", 10, 5);

let review1 = new Review(client, "Все ок", "11.01.2022", 5);
let review2 = new Review(client, "Не ок", "12.11.2021", 4);

let petsitter = new Petsitter("Петр","qwerty", "123456");

petsitter.addService(service);
petsitter.addReview(review1);
petsitter.addReview(review2);

console.log(petsitter.checkService("Выгул"));
console.log(petsitter.getRating());