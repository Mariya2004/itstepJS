class Animal {
    food;
    location;
    name;

    constructor (food, location, name) {
        this.food = food;
        this.location = location;
        this.name = name;
    }

    makeNoise () {
        console.log(`${this.name} спит`);
    }

    eat () {
        console.log(`${this.name} ест ${this.food}`);
    }

    sleep () {
        console.log(`${this.name} спит`);
    }
}

export {Animal};