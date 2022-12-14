const EX = require('./exercises')
const exercises = new EX()

// ex1
test("isEven should return true if n is evens", function () {
    expect(exercises.isEven(4)).toBeTruthy()
    expect(exercises.isEven(5)).toBeFalsy()
})

// ex2
test("removeAtLeastOne should remove at least one element from the array `arr`", function () {
    const arr = [1, 2, 3, 4, 5]
    let length = arr.length
    expect(exercises.removeAtLeastOne(arr).length).toBeLessThan(length)
})

// ex3
test("simplify should return a clean string without these symbols:! # . , ", function () {
    const str1 = "nir#"
    const str2 = "nir"
    expect(exercises.simplify(str1)).toMatch(str2)
})

// ex4
test("validate should recive arr and verify that there is at least one boolean in the array", function () {
    const errorArr = [1, 2, 3]
    const arrValid = [true, false, true]
    const arrInvalid = [false, false, true]
    const error = { error: "Need at least one boolean" }
    expect(exercises.validate(errorArr)).toEqual(error)
    expect(exercises.validate(arrValid)).toBeTruthy()
    expect(exercises.validate(arrInvalid)).toBeFalsy()

})

// extention
test("checks whether push has been used in add method", () => {
    const spyOnAdd = jest.spyOn(exercises, "add") //creating a spying object on 'add' method, not neccesery
    const spyOnPush = jest.spyOn(Array.prototype, "push") //creating the spying object for push, that actually belong to Array.prototype.
    const isAdding = exercises.add(1, 2) //invocing a mock call to the add method, so we can spy on its behaviour
    expect(spyOnAdd).toHaveBeenCalled() //just to verify we are calling add method, not neccesery
    expect(spyOnPush).toHaveBeenCalled() //tracking push is called at least 1 time
})
