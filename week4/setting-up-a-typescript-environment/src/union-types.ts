// // union types 
// let result: number | string;

// result = 10; // OK
// result = 'Hi'; // also OK
// //result = false; // a boolean value, ERROR


// type Type = string | number | boolean;
// const val: Type = true;

// function doX(val: Type): Type {
//     return val == 8;
// }

// doX(val);

// let favouriteColor: 'red' | 'blue' | true | 12;

// favouriteColor = 'blue';
// //favouriteColor = 'crimson'; // ERROR, Type "crimson" is not assignable to type 'red' | 'blue' | true | 12.

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction.Up); // => 1

// enum Direction1 {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// console.log(Direction1.Up); // => UP

// ex1

function concat(strArray: string | string[], isPrint: boolean | number): void {
    if (Array.isArray(strArray)) {
        strArray = strArray.join(' ');
    } else if (typeof strArray !== 'string') {
        console.log(`Function doesn't support type ${typeof strArray}`);
    }

    if ((typeof isPrint === 'boolean' && isPrint) || (typeof isPrint === 'number' && isPrint === 1)) {
        console.log(strArray);
    } else if ((typeof isPrint !== 'boolean' && !isPrint)) {
        console.log(`Function doesn't support 'isPrinted' with value '${isPrint}'`);
    }
}

concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);

// ex2

type num = number | number[] | string | string[]
function printNumbers(nums: num): void {
    if (typeof nums === 'number') {
        console.log('type of number ' + nums);
    }
    else if (typeof nums === 'string') {
        console.log('type of string ' + nums);
    }
    else if (Array.isArray(nums)) {
        console.log('type of Array ' + nums);
    }
}

printNumbers(972528684411);
printNumbers([972528684411, 9725242223]);
printNumbers("052863423243");
printNumbers(["052343434286", "0547734343"]);