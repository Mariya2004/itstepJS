import { Animal } from "./Animal";

class Horse extends Animal {

    speed: string;

    constructor(food: string, location: string) {
        super(food, location)
    }

    makeNoise () {
        console.log(`Лошадь скачет`);
    }

    eat () {
        console.log(`Лошадь ест сено`);
    }
    
}

export {Horse};