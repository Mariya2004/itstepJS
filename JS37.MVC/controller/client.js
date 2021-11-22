import { from } from 'form-data';
import {Client} from '../model/client.js';
import {Review} from '../model/review.js';

class ClientController {
    static create(name, login, password) {
        let newUser = new Client(name, login, password);
        console.log("Сoздали пользователя");
        return newUser;
    }

    static update(client, name, login, password) {
        client.name = name;
        return client;
    }

    static createReview(client, text, date, rate) {
        let review = new Review(client, text, date, rate);
        console.log("Создали отзыв");
        return review;
    }

    static delete(client) {
         delete client;
    }
}