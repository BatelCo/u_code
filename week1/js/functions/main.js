console.log("Hello, world!")
//ex1
(5 > 2) && false // false

!("knife" === "sword") // true

(1 < 2) || (-1 > -1) || !false // true

"" // false

(31 % 5) == "1" // true

!!true //true

"5th Avenue" != "5th Avenue" // false

52 !== "52" //true

(undefined || null) // null


//ex2 
let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

//ex2 ans
a = 3
b = 3
c = 3



let number = 5
console.log(number)
const isEven = function(number){
    if ((number%2)===0){
        return true
    }else {
        return false
    }
}
console.log(isEven())

const arr = [1,2,3,4,5]
const showOddFromArr = function(arr){
    
    for (let element of arr) {
        if(!(isEven(element))){
            console.log(element);
        }
    }
}
showOddFromArr(arr)

const checkExist= function(arr, number){
    for(let element of arr){
        if(element === number){
            return true
        }
    }
    return false
}
console.log(checkExist(arr, number))



const calculator = {
    add: function(x,y){
        return x+y;
    },
    substruct: function(x,y){
        return x-y;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.substruct(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

const increaseByNameLength = function(money, name){
    return (money*name.length)
}
const makeRegal= function(name){
    return ("His Royal Highness, " + name)
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"