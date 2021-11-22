import {Phone} from './app.js';

let phone_1 = new Phone(661234, 'Nokia', 60);
let phone_2 = new Phone(224567, 'Samsung', 50);
let phone_3 = new Phone(564323, 'Apple', 55);

console.log(phone_1, phone_2, phone_3);

phone_1.receiveCall('Вася');
console.log(phone_1.getNumber());

phone_2.receiveCall('Таня');
console.log(phone_2.getNumber());

phone_3.receiveCall('Миша');
console.log(phone_3.getNumber());