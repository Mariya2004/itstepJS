import {User} from './users.js';

class Driver extends User {
    car;
    reviews;

    constructor(name, login, pass) {
        super(name, login, pass);
        this.reviews = [];
    }

    addCar (car) {
        this.car = car;
    }

    removeCar (car) {
        this.car = undefined;
    }

    addReview (review) {
        this.reviews.push(review);
    }
}   

export {Driver};