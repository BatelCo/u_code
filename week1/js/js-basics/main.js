console.log("Hello, world!")
// console.log("Hello, World")

/*
  console.log("Hello, World")
  console.log("Bye, World")
*/

// let country = "Djibouti"

// let mysteriousCountry //not initialized, only defined
let a = 6
let b = a

console.log(a) //prints 6
console.log(b) //prints 6

b = 2

console.log(a) //prints 6
console.log(b) //prints 2

const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
console.log(bothStrings)

console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false

let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2016

// Conditional Statements ex1

if(boughtTesla){
    if(isUSCitizen){
        let years = currentYear-yearOfTeslaPurchase;
        console.log(years);
        if(years>=4){
            console.log("do you want an upgrade?")
        }else{
            console.log("are you satisfied with your car?")
        }
    // not us citizen
    }else {
        console.log("would like to move to the US?")
    }    
}else{
    console.log("would you like to buy tesla?")
}

//Arrays ex1
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2)
numbers[3] = 1
numbers.splice(-4,4)
//let x = numbers.length
//numbers.splice(x-4,4)
// at place 0 delete 0 elements and add 0
numbers.splice(0,0,0)
//numbers.unshift(0)
console.log(numbers)

//Objects ex1
let p1={
    name: "Jill",
    age: 25,
    city: "holon"
}

let p2={
    name: "Robert",
    age: 29,
    city: "nir-hen"
}

if (p1.age === p2.age){
    if (p1.city === p2.city){
        console.log("Jill wanted to date Robert")
    }else {
        console.log("Jill wanted to date Robert, but couldn’t")
    }
}

// Objects ex2
let book1={
    title: "new book",
    author: "jhon"
}
let book2={
    title: "good book",
    author: "david"
}

let library={
    books: [book1,book2]
}

// Objects ex3
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  console.log(reservations)

  let name = prompt('Please enter the name for your reservation');
  name = name.toLowerCase();
  if (reservations[name] === undefined){
    console.log("there is nothing under their name")
    // istert name as key and claimed = true
    reservations[name]={claimed:true};

  }else{
    // if true
    if (reservations[name].claimed){
        console.log("claimed")
    }
    else{
        console.log("unclaimed")
    }
    console.log(reservations)
}



//
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
let res = ""
res+=kitchen.owner + " ";

let expiryRemain = kitchen.fridge.items[1].expiryDate - date;

if(expiryRemain<0){
    res+=kitchen.fridge.items[1].name + " expired ";
    expiryRemain*=(-1);
    res+=expiryRemain + " days ago."
}


if(kitchen.fridge.works){
    res+="\nWeird, considering her fridge works. "
    if(kitchen.hasOven){
       res+="Luckily, she has an oven to cook the raddish in.";
    }else{
        res+="Too bad she doesn't have an oven to cook the raddish in."
    }
}else{

    res+="\nProbably because her fridge doesn't work."

    if(kitchen.hasOven){
        res+="Luckily, she has an oven to cook the raddish in. And she’ll have to pay "
    }
    else{
        res+= "Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay "

    }
    res+= (kitchen.fridge.price/2) + " to fix the fridge."
}


console.log(res)

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }
for(let company of companies){
    console.log(company)
}

// Loops
const names = ["Ashley", "Donovan", "Lucas", "batel"]
const ages = [23, 47, 18]
const people = []

for(const index in names){
    let person={
        name:names[index],
        age: ages[index]
    } 
    people.push(person)
}
console.log(people)

//ex3

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]
for(let index in posts){
    if (posts[index].id==="2"){
        posts.splice(index,1)
    }
    console.log(posts)
}




const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let keys =Object.keys(dictionary)
  console.log(keys);
  for(let key of keys){
    console.log(key+"\n")
    for(let word of dictionary[key]){
        console.log(word+"\n")
    }
  }

  const dictionary1 = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  let result = ""
  let temp = ""
  for(let key of Object.keys(dictionary1)){
    temp = "Words that begin with " + key + ":\n"
    for(let word of dictionary1[key]){
        temp+= "\t" + word + "\n"
    }
    result+=temp
  }
  console.log(result)

  
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }


const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the "  + " inside a " + pot)
}

plant()



const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
