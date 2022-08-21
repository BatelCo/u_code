function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const random10 = function(){
    const color=["red","blue"]
    return color[ Math.floor(Math.random() * 10) >5 ? 1 : 0]
}

const randonColor = function(){
    this.style.backgroundColor= random10()
    console.log(containter.childNodes)
    let winColor = container.childNodes[1].style.backgroundColor
    let currentColor
    for(let i=2; i<3; i++){
        currentColor = container.childNodes[i].style.backgroundColor
        if(currentColor!=winColor){
            return
        }
    }

    //win
    win.innerText = "you win!"
    console.log("Im win")
    document.body.appendChild(win)

    
}
const win = document.createElement("h1")
const containter = document.getElementById("container")
for (let i=0;i<2;i++){
    const box = document.createElement("div")
    
    box.setAttribute("class", "box")
    box.onmouseenter = randonColor
    containter.appendChild(box)
}

