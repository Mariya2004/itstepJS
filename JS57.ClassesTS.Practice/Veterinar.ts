import { Animal } from "./Animal";

class Veterinar {
    treatAnimal(animal: Animal) {
        console.log(`${animal.food}${animal.location}`);
    }
}

export {Veterinar};