
// types ex1

const sum = (nums: number[]): number => {
    let sum = 0;
    for (let num of nums) {
        sum += num
    }
    return sum
};


// function sum(numbers: number[]): number {
//     return numbers.reduce((a, b) => a + b);
// }


console.log(sum([1, 2, 3]));

// is even

const isEven = (num: number): boolean => { return (num % 2 === 0) }


const numArray1: number[] = [4, 7, 44, 5, 234];
const numArray2: number[] = [65, 33, 5, 2532, 32, 6];
const numArray3: number[] = [54, 6, 656, 4];

console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);

// types ex2


class Student {

    name: string;
    age: number;
    gradesArr: number[];

    constructor(name: string, age: number, gradesArr: number[]) {
        this.name = name;
        this.age = age;
        this.gradesArr = gradesArr;
    }
    addGrade(grade: number) {
        this.gradesArr.push(grade)
    }

    getGradeAvg(): number {
        const sum = this.gradesArr.reduce((a, b) => a + b, 0);
        const avg = (sum / this.gradesArr.length) || 0;
        return avg
    }
}

const student1 = new Student('John', 60, [20, 60, 90, 100]);
const student2 = new Student('Batel', 25, [10, 40, 50, 80]);
const student3 = new Student('Orya', 23, [100, 100, 100, 100]);
const student4 = new Student('Nir', 29, [90, 90, 100, 100]);

const students: Student[] = [student1, student2, student3, student4];

students.forEach(student => {
    console.log(`${student.name}: ${student.getGradeAvg()}`);
});



