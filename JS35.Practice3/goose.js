import { smallAnimal } from "./smallAnimal";

import {smallAnimal} from './smallAnimal.js';

class Goose extends smallAnimal {
    constructor(name, size, weight) {
        super(name, size);
        this.weight = weight;
    }

    getSize(size) {
        console.log(`Размер животного ${size}`);
    }
}

export {Goose};