"use strict";
console.log('hi');
// let id = 5; // Inferred as 'number'
// let firstname = 'danny'; // Inferred as 'string'
// let hasDog = true; // Inferred as 'boolean'
let id = 5;
let firstname = 'danny';
let hasDog = true;
let id1 = 7;
let lastName1 = 'Smith';
let isEmpty1 = true;
//id1 = '8'; // ERROR, 'id' is a number and not a string
lastName1 = 'Jordan';
//isEmpty1 = 1; // ERROR, 'isEmpty' is boolean and not a number
let ids = [1, 2, 3, 4, 5]; // array of type 'number'
let names = ['Danny', 'Anna', 'Bazza']; // array of type 'string'
let options = [true, false, false]; // array of type 'boolean'
ids.push(6); // OK
//ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
let person;
person = {
    name: 'John',
    location: 'Israel',
    isProgrammer: true,
};
//person.isProgrammer = 'Yes'; // ERROR, must be of 'boolean' type
//   person = {
//     name: 'John',
//     location: 'Israel',
//   }; 
// ERROR, missing 'isProgrammer' property
let employee;
employee = {
    name: 'John',
    salary: 25000,
    isManager: false,
    workDays: [1, 1, 1, 1, 0, 0]
};
if (employee.isManager) {
    console.log(`${employee.name} is a manager`);
    employee.salary = 30000;
}
else {
    employee.workDays[2] = 0;
    employee.workDays.push(0);
}
const circumference = (diameter) => {
    return 'The circumference is ' + Math.PI * diameter;
};
class Person {
    constructor(n, c, p) {
        this.name = n;
        this.isProgrammer = c;
        this.children = p;
    }
    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.children} children`;
    }
}
const person1 = new Person('John', false, 2);
const person2 = new Person('Michael', true, 4); // ERROR, Argument of type 'string' is not assignable to parameter of type 'boolean'.
console.log(person1.sayHello()); // => Hi, my name is John and I have 1 children
// types ex1
const sum = (nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
};
// function sum(numbers: number[]): number {
//     return numbers.reduce((a, b) => a + b);
// }
console.log(sum([1, 2, 3]));
// is even
const isEven = (num) => { return (num % 2 === 0); };
const numArray1 = [4, 7, 44, 5, 234];
const numArray2 = [65, 33, 5, 2532, 32, 6];
const numArray3 = [54, 6, 656, 4];
console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);
// ex2
class Student {
    constructor(name, age, gradesArr) {
        this.name = name;
        this.age = age;
        this.gradesArr = gradesArr;
    }
    addGrade(grade) {
        this.gradesArr.push(grade);
    }
    getGradeAvg() {
        const sum = this.gradesArr.reduce((a, b) => a + b, 0);
        const avg = (sum / this.gradesArr.length) || 0;
        return avg;
    }
}
const student1 = new Student('John', 60, [20, 60, 90, 100]);
const student2 = new Student('Batel', 25, [10, 40, 50, 80]);
const student3 = new Student('Orya', 23, [100, 100, 100, 100]);
const student4 = new Student('Nir', 29, [90, 90, 100, 100]);
const students = [student1, student2, student3, student4];
students.forEach(student => {
    console.log(`${student.name}: ${student.getGradeAvg()}`);
});
