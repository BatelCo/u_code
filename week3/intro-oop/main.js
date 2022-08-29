console.log('hi');
class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name) {
        this.children.push(name)
    }
}

const cat = new Animal("Puss", 4)
console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"

cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿




class Humen {
    constructor(name1, age, isFriendly) {
        this.name1 = name1;
        this.age = age;
        this.isFriendly = isFriendly
        this.children = []
    }

    giveBirth(name) {
        this.children.push(name)
    }
}
const humen = new Humen("batel", 25, false)
console.log(humen);

humen.giveBirth("orya")
console.log(humen.children)

class Vehicle {
    constructor(x, y, spped, fuel) {
        this.x = x
        this.y = y
        this._spped = spped
        Vehicle.carsSold++;
        this._fuel = fuel

    }
    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
            return console.log("fuel must be between 0 to 150")
        }
        this._fuel = fuel
    }

    get fuel() {
        return this._fuel
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed() {
        return this._speed
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney() {
        console.log("Made  " + (Vehicle.carsSold * 30000) + " dollars");

    }
}
Vehicle.carsSold = 0;

const car1 = new Vehicle("1", "2", "100", "50")
const car2 = new Vehicle("1", "2", "100", "40")
Vehicle.getInfo()
Vehicle.calculateMoney()

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = 10 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
c.fuel = 100
console.log(c.fuel);


class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat1 = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat1) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"

