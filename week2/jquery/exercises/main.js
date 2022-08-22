
console.log("Hello, world!")

//ex1
$("button").on("click", function () {
    $("#ex1ul").append(`<li>${$("input").val()}</li>`)
    $("input").val("")
})

//ex2
$("#ex1ul").on("click", "li", function () {
    $(this).remove()
})

//ex3
$("body").append('<div class="box"></div>')
$("body").append('<div class="box"></div>')

let $boxes = $(".box")

$(".box").hover(function () {
    $boxes.css("background-color", "rgb(231, 76, 60)")
    $(this).css("background-color", "rgb(142, 68, 173)")
    console.log($(this));
    console.log($boxes);
})

//ex4
$(".item").click(function () {

    if ($(this).data().instock) {
        $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
    }
})

//ex5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (let fruit of fruits) {
    $("#basket").append(`<div class="${fruit.color}">${fruit.name}</div>`)
}

// color picker
let $spans = $("span")

for (let $span of $spans) {
    console.log($span)
    $($span).addClass("picker")
    $($span).css("background-color", $($span).data().color)

    $($span).on("click", function () {
        const color = $($span).data().color
        $(".box").css("background-color", color)
    })
}