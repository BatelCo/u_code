const add = function (a, b) {
    return a + b
}

const calculateHyp = function (x, y) {
    return Math.sqrt(x * x + y * y)
}

const removeBugs = function (code) {
    return code.map(c => c != "BUG")
}

const clearLowPriority = function (objArr) {

    return objArr.filter(o => o.priority === "HIGH")
}

module.exports = { add, calculateHyp, removeBugs, clearLowPriority }