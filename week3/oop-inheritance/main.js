class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}


class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }

    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        this.courses = {}
        this.name = "Professor " + name

    }

    giveGrade(student, courseName, finalGrade) {
        student.receiveGrade(courseName, finalGrade)
    }

    addCourse(course) {
        if (this.courses[course]) {
            return (this.courses[course])++
        }
        this.courses[course] = 1
    }
}

class Principal extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.courses = []
        this.teachers = []
        this.students = []
    }
    hireTeacher(teacher) {
        this.teachers.push(teacher)
        console.log(`${this.name} just hired ${teacher.name}`);
    }
    recruitStudent(student) {
        this.students.push(student)
    }
    expelStudent(student) {
        this.students = this.students.filter(s => s.name !== student.name)
    }
    transferStudent(student, principle) {
        this.expelStudent(student)
        principle.recruitStudent(student)

    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron

// const s1 = new Student("Ronda", 2017)
// const p1 = new Person("Anon", 1999)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// console.log(t1.name)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]
// console.log(s1 instanceof Student) //prints true
// console.log(s1 instanceof Teacher) //prints false
// //console.log(s1 instanceof p1);
// // s1 instanceof Person //true
// // t1 instanceof Teacher //true
// // t1 instanceof Person //true
// // s1 instanceof Teacher //false - just because they inherit from the same parent, doesn't give them any relationship to one another
// // t1 instanceof Student //false
// // p1 instanceof Person //true
// // p1 instanceof Student //false - inheritance is a one way street!
// // p1 instanceof Teacher //false

// // p1 instanceof s1 //throws an error


// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"


// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// const s11 = new Student("Ronda", 2017)
// const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

// ta1.addCourse("General Relativity")
// ta1.giveGrade(s11, "General Relativity", 91)

// console.log(ta1.salary) //prints 20000
// console.log(ta1.courses) //prints {"General Relativity": 1}
// console.log(s11.grades) //prints [{course: "General Relativity", grade: 91}]