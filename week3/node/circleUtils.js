const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
    return pi * radius * radius;
};
const dbName = "SQL_DB_1102"
const dbPassword = "e3!accT"

module.exports = {
    dbName: dbName,
    dbPassword: dbPassword
}
console.log(module.exports);
module.exports.pi = pi;
module.exports.title = title;

module.exports.calcCircleArea = calcCircleArea;
console.log(module.exports);