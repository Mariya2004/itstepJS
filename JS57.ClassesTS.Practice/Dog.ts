import { Animal } from "./Animal";


class Dog extends Animal {
    scent: string;

    constructor(food: string, location: string) {
        super(food, location)
    }

    makeNoise () {
        console.log(`Собака гавкает`);
    }

    eat () {
        console.log(`Собака ест мясо`);
    }
}

export{Dog};