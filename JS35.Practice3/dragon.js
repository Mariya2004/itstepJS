import { BigAnimal } from "./bigAnimal";

import {bigAnimal} from './bigAnimal.js';

class Dragon extends bigAnimal {
    constructor(name, size, weight) {
        super(name, size);
        this.weight = weight;
    }

    getSize(size) {
        console.log(`Размер животного ${size}`);
    }
}

export {Dragon};