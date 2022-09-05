
class Exercises {

    // ex1 - should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //ex2 - should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    // ex3 - should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    // ex4 
    validate(arr) {
        const error = { error: "Need at least one boolean" }
        if (!(arr.includes(true) || arr.includes(false))) {
            return error
        }
        const trueArr = arr.filter(a => a === true)
        const falseArr = arr.filter(a => a === false)
        return trueArr.length > falseArr.length
    }

    // extention
    add(x, y) {
        let stuff = []
        stuff.push(x, y)
    }
}

module.exports = Exercises