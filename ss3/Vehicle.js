export class Vehicle {
    name
    speed
    brand
    about() {
        console.log(`phuong tien ${this.name} chay voi toc do ${this.speed}`);
    }
    constructor(name, speed, brand) {
        if(this.constructor == Vehicle) {
            throw Error("abstract class")
        }
        else {
            this.name = name
            this.speed = speed
            this.brand = brand
        }
    }
}
