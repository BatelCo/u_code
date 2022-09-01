const EX = require('./exercises')
const exercises = new EX()

//ex1
test("isEven should return true if n is evens", function () {

    expect(exercises.isEven(4)).toBeTruthy()
    expect(exercises.isEven(5)).toBeFalsy()


    // expect(exercises.isEven(5))

})

//ex2
test("removeAtLeastOne should remove at least one element from the array `arr`", function () {
    const arr = [1, 2, 3, 4, 5]
    let length = arr.length

    expect(exercises.removeAtLeastOne(arr).length).toBeLessThan(length)

})

//ex3
test("simplify should return a clean string without these symbols:! # . , ", function () {
    const str1 = "nir#"
    const str2 = "nir"

    expect(exercises.simplify(str1)).toMatch(str2)

})

//ex4
test("validate should recive arr and verify that there is at least one boolean in the array", function () {
    const errorArr = [1, 2, 3]
    const arrValid = [true, false, true]
    const arrInvalid = [false, false, true]

    const error = { error: "Need at least one boolean" }

    expect(exercises.validate(errorArr)).toEqual(error)
    expect(exercises.validate(arrValid)).toBeTruthy()
    expect(exercises.validate(arrInvalid)).toBeFalsy()

})
