// ex1

const str = "the fat cat hit the rat with a bat"
const str1 = "bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

const reg1 = /a/
const reg2 = /at$/
const reg3 = /^054[0-9]{7}$/

//Checks if it contains “a” in the string
const checkIfContainsA = function (str) {
    return str.search(reg1) != -1
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function (str) {
    return str.match(reg2) != null

}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function (str) {
    return str.match(reg3) != null
}

console.log('EX1');
console.log(checkIfContainsA(str)) //returns true
console.log(checkIfContainsA(str1)) //returns false
console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false
console.log('checkIfStartsWithNum');
console.log(checkIfStartsWithNum(str)) //returns false
console.log(checkIfStartsWithNum(str3)) //return true
console.log(checkIfStartsWithNum(str4)) //return false
console.log(checkIfStartsWithNum(str5)) //return false

// EX2
const regexArr = [/a/, /b/, /^d/, /e$/]
const ex2str = "Bike"
const ex2str1 = "the room is on fire"
const ex2str2 = "Fergalicious"
const ex2str3 = "Fox in sheep clothing"
const searchMatchingRegex = function (str) {
    for (const reg of regexArr) {
        if (reg.test(str)) {
            return true
        }
    }
    return false
}
console.log('EX2');
console.log(searchMatchingRegex(ex2str)) //return true (contains b)
console.log(searchMatchingRegex(ex2str1)) //return true (ends with e)
console.log(searchMatchingRegex(ex2str2)) //return true (contains a)
console.log(searchMatchingRegex(ex2str3)) //return false

//EX3
const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"
const emailReg = /^[a-z]+.com$/

const emailValidator = function (str) {
    /**
     * HINT : doesnt have to be a big regex expression use the methods from RegExp
     */
    return str.match(emailReg) != null
}

console.log('EX3');
console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false