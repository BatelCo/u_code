//constants
const playingField = document.getElementById("playing-field")
const ball = document.getElementById("ball")
const up = document.getElementById("up")
const left = document.getElementById("left")
const down = document.getElementById("down")
const right = document.getElementById("right")

//functions
const borderCorrector = function () {
    if (parseInt(ball.style.left) < 0) {
        ball.style.left = 0;
    }
    if (parseInt(ball.style.top) < 0) {
        ball.style.top = 0;
    }
    let rightCalculetdBorder = playingField.clientWidth - ball.clientWidth
    if (rightCalculetdBorder < parseInt(ball.style.left)) {
        ball.style.left = rightCalculetdBorder + "px"
    }
    let bottomCalculetdBorder = playingField.clientHeight - ball.clientHeight - parseInt(getComputedStyle(playingField).borderLeftWidth)
    if (bottomCalculetdBorder < parseInt(ball.style.top)) {
        ball.style.top = bottomCalculetdBorder + "px"
    }
}
const moveRight = function () {
    let x = parseInt(ball.style.left) || 0
    x += 15
    x += "px"
    ball.style.left = x
    borderCorrector(ball)
}
const moveLeft = function () {
    let x = parseInt(ball.style.left) || 0
    x -= 15
    x += "px"
    ball.style.left = x
    borderCorrector(ball)
}
const moveDown = function () {
    let x = parseInt(ball.style.top) || 0
    x += 15
    x += "px"
    ball.style.top = x
    borderCorrector()
}
const moveUp = function () {
    let x = parseInt(ball.style.top) || 0
    x -= 15
    x += "px"
    ball.style.top = x
    borderCorrector()
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "ArrowDown":
            // code for "down arrow" key press.
            moveDown()
            break;
        case "ArrowUp":
            // code for "up arrow" key press.
            moveUp()
            break;
        case "ArrowLeft":
            // code for "left arrow" key press.
            moveLeft()
            break;
        case "ArrowRight":
            // code for "right arrow" key press.
            moveRight()
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);


//events:
up.onclick = moveUp
down.onclick = moveDown
right.onclick = moveRight
left.onclick = moveLeft
