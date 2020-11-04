import {Vehicle} from "./Vehicle.js"
export class Car extends Vehicle {
    about() {
        return `this is car ${this.name} run at speed ${this.speed}`
    }
    constructor(name, speed, brand) {
        super(name, speed, brand)

    }
}