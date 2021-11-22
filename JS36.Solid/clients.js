import {User} from './users.js';
import {Pet} from './pets.js';

class Client extends User {
    pets;

    constructor(name, login, pass) {
        super(name, login, pass);
        this.pets = [];
    }

    addPet (pet) {
        this.pets.push(pet);
    }

    checkPet(name) {
        let pet = this.pets.find(function(pet) {
            return pet.name == name;
        });
        return pet;
    }
}   

export {Client};