import {Animal} from './animal.js';

class Horse extends Animal {
    constructor (food, location, name) {
        super(food, location, name);
    }
    speed;
    makeNoise () {
        console.log(`${this.name} скачет`);
    }

    eat () {
        console.log(`${this.name} ест сено`);
    }
}

export {Horse};