import {User} from './users.js';

class Petsitter extends User {
    services;
    reviews;

    constructor(name, login, pass) {
        super(name, login, pass);
        this.reviews = [];
        this.services = [];
    }

    addReview (review) {
        this.reviews.push(review);
    }

    addService (service) {
        this.services.push(service);
    }

    getRating() {
        let rating = this.reviews.reduce(function(sum, review) {
            return sum + review.rating;
        }, 0);
        if (this.reviews.length > 0) {
            return Math.round(rating / this.reviews.length);
        } else {
            return undefined;
        }
    }

    checkService(name) {
        let service = this.services.find(function(service){
            return service.name == name;
        });
        return service;
    }
}

export {Petsitter};