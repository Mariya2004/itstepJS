
import {Car} from '../model/car.js';

class CarController {
    static addCar(model, number, color, comfort, hasBabyChair, capacity) {
        let car = new Car (model, number, color, comfort, hasBabyChair, capacity);
        return car;
    }

}