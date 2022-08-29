class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}

class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}

class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
        this.weArePoor = weArePoor
        
        _consume(food) {
            console.log("Just consumed " + food + ". Feels good.")
        }

        eat() {
            const food = this.feeder.getFood(this.type)
            this._consume(food)
        }
    }
}

const bumdo = new Animal("Bumdo", "elephant", true)

const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = false
let relevantFeeder

if (weArePoor) {
    relevantFeeder = cheapFeeder
}
else {
    relevantFeeder = luxuryFeeder
}

const bisma = new Animal("Bisma", "lion", /*injection ->*/ relevantFeeder /*<- injection*/)
bisma.eat() //will print "Just consumed chia seeds. Feels good."