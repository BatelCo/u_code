


// console.log(document)
const playingField = document.getElementById("playing-field")
playingField.style.backgroundColor = "blue"
console.log(playingField)
const ball =  document.getElementById("ball")
ball.style.backgroundColor = "yellow";
const down =  document.getElementById("down")
down.innerHTML = "Down"
console.log(down.innerHTML)
console.log(playingField.innerHTML)
console.log(playingField.style.backgroundColor)
const moveRight = function(){
    let x = parseInt(ball.style.left)||0
    x+=100
    x+="px"
    ball.style.left = x
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")
document.body.appendChild(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = "I am subHeader"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
subHeader.setAttribute("class", "my-sub-header")
document.body.appendChild(subHeader)

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const enterClickColor = function () {
    box.style.backgroundColor = "#8e44ad"
    box.innerHTML = "click over me!"
}

const box1 = document.getElementById("box1")
box1.onclick = function () {
    box1.innerHTML = "clicked"
}
box1.onmouseenter = function(){
    box1.innerHTML= "on mouse"
}

const box2 = document.createElement("div") // dynamically creating an element

box2.setAttribute("class", "box")
box2.onclick = function(){       // adding an event to the new element
    box2.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box2) // now the box will be on the page, and will react to a click!
//document.body.appendChild()
box2.innerHTML = "my name is box2"



