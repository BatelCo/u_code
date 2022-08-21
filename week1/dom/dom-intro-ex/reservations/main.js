
const fname = document.getElementById("fname")
const button = document.getElementById("submit")
button.onclick= function(){
    console.log(fname.value)
    let name = fname.value
    name = name.toLowerCase()
    if(reservations[name]===undefined){
        console.log("There is nothing under this name.")
        reservations[name] = {claimed: true}
    }
    else{
        if(reservations[name].claimed){
            console.log(`${fname.value} your reservation is claimed`)

        }
        else{
            console.log(`welcome ${fname.value}`)
        }
    }

}
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}
