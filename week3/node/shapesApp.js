const circleUtilities = require('./circleUtils');
const r = 4
console.log(circleUtilities);

console.log(circleUtilities.pi)
console.log(circleUtilities.title)
console.log(circleUtilities.calcCircleArea(7))


console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"