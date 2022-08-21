console.log("Hello, world!")
const createPerson = function (name, age) {
    const person = {
        personName: name,
        personAge: age
    }

    return person
}
// //error person is not defined
// createPerson("Elon", 42)
// console.log(person)

const person = createPerson("Elon", 42)
console.log(person)

const mathOperations = function () {
    const add = function (x, y) {
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1, 2))

// closure example 
// const foo = function () {
//     const x = 1

//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }

//     return bar
//   }

//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!
//   console.log(baz())

//   // //undefined
//   //console.log(x) 

const setCounter = function (num) {
    let counter = 0

    const count = function () {
        counter += num;
        console.log(counter)
    }

    return count
}

const increment = setCounter(2)
increment()
increment()

const family = function () {
    const members = []
    const birth = function (addParam) {
        members.push(addParam)
        console.log(members)
    }
    return birth
}

const giveBirth = family()
giveBirth("hilla")
giveBirth("batel")
giveBirth("orel")


// module without closure

const mathOperations1 = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations1()
console.log(m.add(1, 2))
console.log(m.add(13, 29))
console.log(m.mult(1.75, 24))
console.log(m.mult(7, m.div(36, 6)))


// module with closure 
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('batel')
usersModule.addUser('amit')
usersModule.listUsers()
// undefined - because the closure hasn’t given us access to users, only to the functions!
console.log(usersModule.users)

// ex1 StringFormatter module
const mod = StringFormatter = function () {

    const capitalizeFirst = function (string) {
        console.log(string[0].toUpperCase() + string.substring(1))
    }

    const skewerCase = function (string) {
        console.log(string.split(' ').join('-'))
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

// ex2
const mBank = BankModule = function () {
    let money = 500

    const depositCash = function (dep){
        money += dep
    }
    const checkBalance = function(){
        console.log(money)
    }
    return {
        deposit: depositCash,
        showBalance : checkBalance
    }
} 

const bank = BankModule()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//ex3

const SongsManager = function () {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="

    //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
    const _extractIdentifier = url => url.split("").splice(32).join("")
    const _getUrl = identifier => _youtubeBase + identifier

    const addSong = (name, url) => _songs[name] = _extractIdentifier(url)
    const getSong = name => console.log(_getUrl(_songs[name]))

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ