import {User} from './users.js';

class Driver extends User {
    car;
    reviews;

    constructor(name, login, pass) {
        super(name, login, pass);
        this.reviews = [];
    }

    addReview (review) {
        this.reviews.push(review);
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

    checkComfort(name) {
        let comfort = this.comfort.find(function(comfort){
            return comfort.name == name;
        });
        return comfort;
    }
}

export {Driver};