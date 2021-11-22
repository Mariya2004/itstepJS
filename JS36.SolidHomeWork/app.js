import {User} from './user.js';
import {Client} from './client.js';
import {Driver} from './driver.js';
import {Review} from './reviews.js';
import {Order} from './order.js';

let client = new Client ("Анна", "ghjl", "123456");

client.addDestination("Витебск");

console.log(client.checkDestination("Витебск"));



let review1 = new Review(client, "Все ок", "11.01.2022", 5);
let review2 = new Review(client, "Не ок", "12.11.2021", 4);

let driver = new Driver ("Олег","qwaszx", "123456");

driver.addComfort(comfort);
driver.addReview(review1);
driver.addReview(review2);

console.log(driver.checkComfort("Эконом"));
console.log(petsitter.getRating());