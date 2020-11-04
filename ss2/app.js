class Animal {
    name
    gender
    species
    color
    legs

    constructor (name,gender,species,color,legs) {
        this.name = name
        this.gender = gender
        this.species = species
        this.color = color
        this.legs = legs
    }
    
    speak() {
        console.log(`${this.name} biết nói`);
    }

    walk() {
        console.log(`con này có ${this.legs} chân`);
    }
}

let husky = new Animal("husky", "male", 'dog', "white-black", 4)
husky.walk() 
husky.speak()
let britishShortHair = new Animal("britishShortHair", "female", 'cat', 'brown', 4)
let tamHoang = new Animal('tamHoang', 'male', 'chicken', 'yellow', 2)
console.log(husky, britishShortHair, tamHoang);

class Person {
    name
    age
    sex
    address
    speak() {
        console.log('hello');
    }

    constructor(name, age, sex, address) {
        this.name = name
        this.sex = sex
        this.address = address
        this.age = age
    }

}

class Boy extends Person {
    strength
    hit() {
        console.log('hihihi');
    }

    constructor(name, age, address, strength) {
        super(name, age, 'male', address)
        this.strength = strength
    }
}

class GoodBoy extends Boy {
    poor

    constructor(name, age, address, strength, poor) {
        super(name, age, address, strength)
        this.poor = poor
    }
}

class BadBoy extends Boy {
    rich

    constructor(name, age, address, strength, rich) {
        super(name, age, address, strength)
        this.rich = rich
    }
}


class Girl extends Person {
    beauty
    cook() {
        console.log('hahaha');
    }

    constructor(name, age, address, beauty) {
        super(name, age, 'female', address)
        this.beauty = beauty
    }
}

class GoodGirl extends Girl {
    poor

    constructor(name, age, address, beauty, poor) {
        super(name, age, address, beauty)
        this.poor = poor
    }
}

class BadGirl extends Girl {
    rich

    constructor(name, age, address, beauty, rich) {
        super(name, age, address, beauty)
        this.rich = rich
    }
}
let long = new GoodBoy('Long', 'male', 20, 'em an com chua', 'rot mong toi')
console.log(long);

