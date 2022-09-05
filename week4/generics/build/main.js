"use strict";
console.log('');
// function sum<Type>(numbers: Type): number {
//     if (typeof (numbers) === 'string' && typeof parseInt(numbers) === 'number') {
//         return parseInt(numbers)
//     }
//     else if (typeof (numbers) === 'number') {
//         return numbers
//     }
//     else if ((Array.isArray(numbers)){
//         if (typeof (numbers[0]) === 'string') {
//             let sum2 = 0;
//             for (const num of numbers) {
//                 if (parseInt(num) === 'number') {
//                     sum1 += parseInt(num)
//                 }
//             }
//             return sum1
//         }
//         else if (typeof (numbers[0]) === 'number') {
//             let sum2 = 0;
//             for (const num of numbers) {
//                 sum2 += num
//             }
//             return sum2
//         }
//     }
// }
function sum(val) {
    if (Array.isArray(val)) {
        let sum = 0;
        val.forEach(elem => sum += getNumValue(elem));
        return sum;
    }
    else if (typeof val === 'string' || typeof val === 'number') {
        return getNumValue(val);
    }
    else {
        return 0;
    }
}
function getNumValue(val) {
    if (typeof val === 'string') {
        const num = parseInt(val);
        return !isNaN(num) ? num : 0;
    }
    else {
        return val;
    }
}
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
