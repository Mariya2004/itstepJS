import {Animal} from './animal.js';

class Cat extends Animal {
    constructor (food, location, name) {
        super(food, location, name);
    }

    purr;
    makeNoise () {
        console.log(`${this.name} мяукает`);
    }

    eat () {
        console.log(`${this.name} ест молоко`);
    }
}

export{Cat};