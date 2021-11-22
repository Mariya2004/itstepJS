class Car {
    carClass;
    engine;
    driver;
    marka;

    constructor(carClass, engine, driver, marka) {
        this.carClass = carClass;
        this.engine = engine;
        this.driver = driver;
        this.marka = marka;
    }

    start () {
        console.log(`Машина поехала`);
    }

    stop () {

    }

    turnRight () {

    }

    turnLeft () {

    }

    toString () {

    }
}

export {Car};