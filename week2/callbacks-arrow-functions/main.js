// console.log("Hello, world!")

// // // print at first secont funtion because timeout
// // const first = function () {
// //     setTimeout(function () {
// //         console.log("should be first")
// //     }, 3000)
// // }

// // const second = function () {
// //     console.log("should be second")
// // }

// // first()
// // second()

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument

// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// const doSomething = function () {
//     console.log("something")
// }

// setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds

// getData(displayData)
// //displayData()


// // const timer = function(){
// //     console.log(new Date())
// //   }

// // setInterval(timer, 5000)

// // setInterval(function () {
// //     console.log(new Date())
// // }, 1000)



// const greet = () => {
//     console.log("Hello there")
// }
// greet()

// const greet1 = (name) => console.log("Hello there, " + name)

// greet1("greet1 Jolene") //prints "Hello there, Jolene"

// const greet2 = name => console.log("Hello there, " + name)

// greet2("greet2") //prints "Hello there, Jolene"

// const square = num => console.log(num * num)
// square(4)

// const add = (x, y) => {
//     return x + y
// }

// const sum = add(1, 2)
// console.log(sum) //prints 3


// const addOneLine = (x, y) => x + y

// const sum1 = addOneLine(8, 2)
// console.log(sum1) //prints 10

// const getHypotenuse = (a, b) => {
//     const aSquared = a * a
//     const bSquared = b * b
//     const cSquared = aSquared + bSquared
//     return Math.sqrt(cSquared)
// }

// const hypoteneuese = getHypotenuse(3, 4)
// console.log(hypoteneuese) //prints 5

// const getFormalTitle = (t1, t2) => t1 + " " + t2
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"



// // const suspenseBuilder = {
// //     name: "El Mysterio",
// //     displayName: function () {

// //         console.log("You are going to see the name in 3 seconds...")

// //         setTimeout(function () { //normal function
// //             console.log("The name is: " + this.name)
// //         }, 3000)

// //     }
// // }

// // suspenseBuilder.displayName()

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()


// // hi every two seconds
// setInterval(() => { console.log("hi") }, 2000)

// const run = (name) => { console.log("Run, " + name + ", run!") }
// const yell = function (action) {
//     let env = "Forest"
//     action(env)
// }
// run(yell)


//ex1 callbacks
const pushPull = function (func) {
    func()
}

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

pushPull(push)
pushPull(pull)


// ex2 callbacks
const getTime = function (func) {
    const time = new Date()
    func(time)
}

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)

// // ex3 refernce error logData is undefined
// const displayData1 = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };

//   displayData1(alert, logData, "I like to party")

// ex3
const displayData2 = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data)
    logDataFunc(data)
}

const logData = function (data) {
    console.log(data)
}

displayData2(alert, logData, "I like to party")


//const addOneLine = (x, y) => x + y

// ex4
const sumOfThree = (a, b, c) => a + b + c
console.log(sumOfThree(1, 2, 3))

// ex5
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()


let str1 = capitalize("bOb") // returns Bob
console.log(str1)
let str2 = capitalize("TAYLOR") // returns Taylor
console.log(str2)
let str3 = capitalize("feliSHIA") // returns Felishia
console.log(str3)

// ex6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

// ex7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
// }

// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

// const makeSound = sound => alert(sound)

// explode(shineLight, makeSound, "BOOM")