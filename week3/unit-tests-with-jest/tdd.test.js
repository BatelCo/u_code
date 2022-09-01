const ArrayManipulator = require('./tdd')

test("do manipulate function creates an object with key and val from arr1->as keys and arr2 as values", function () {
    const am = new ArrayManipulator()
    let keys = ["food", "item", "location"]
    let vals = ["cherry", "lightbulb", "Tazmania"]

    let ans = {
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    }

    expect(am.manipulate(keys, vals)).toEqual(ans)
})