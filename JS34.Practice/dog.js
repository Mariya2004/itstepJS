import {Animal} from './animal.js';

class Dog extends Animal {
    constructor (food, location, name) {
        super(food, location, name);
    }

    scent;
    makeNoise () {
        console.log(`${this.name} гавкает`);
    }

    eat () {
        console.log(`${this.name} ест мясо`);
    }
}

export {Dog};