import { Animal } from "./Animal";


class Cat extends Animal {

    purr: string;

    constructor(food: string, location: string) {
        super(food, location)
    }

    makeNoise(): void {
        console.log("Кот мяукает");
    }

    eat(): void {
        console.log(`Кот ест ${this.food}`);
    }
}

export{Cat};