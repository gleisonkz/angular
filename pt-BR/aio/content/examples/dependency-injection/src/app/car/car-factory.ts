// #docregion
import {Car, Engine, Tires} from './car';

// BAD pattern!
export class CarFactory {
  createCar() {
    const car = new Car(this.createEngine(), this.createTires());
    car.description = 'Factory';
    return car;
  }

  createEngine() {
    return new Engine();
  }

  createTires() {
    return new Tires();
  }
}
