console.log("Hello, world!")
// console.log(jQuery("h1"));

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
// }

// console.log(myQuery("#my-h1"))

// const sayHi = function(){
//     console.log("Hi!")
//   }

//   const $ = sayHi

//   $() //prints "Hi!"

// $("h4").css("color", "red");
// console.log($("h4"));


// $("h1").css("color", "blue");
// console.log($("blue"));

// $(".red-div").css("color", "red")

// $("#brown-div").css("color", "brown")

// $("li:first-child").css("background-color", "green")

// $("li:last-child").css("background-color", "pink")

// // $("#b1").addClass("box")
// // console.log($('#b1'));
// $("#b2, #b1").addClass("box")
// //$(".box").css("background-color", "yellow")
// console.log($('#b2'));
// const inputval = $('#my-input').val("Terabyte")

// console.log(inputval);

// const color = $("div").data().color
// console.log(color) //prints #2980b9
// const barcode = $("#barcode").data().barcode
// console.log(barcode);
// const dataExp = $("#data-exp").data().expirationdate
// console.log(dataExp);
// console.log(`The item with barcode ${barcode} will expire on  ${dataExp}`);

// // $('button').on('click', function () {
// //     alert('clicked!')
// // })

// // $('button').click(function () {
// //     alert('clicked!')
// // })

// const clicked = function () {
//     alert('clicked!')
// }

// $('button').click(clicked)

// const ifHovered = function () {
//     $("#b3").css("background-color", "blue")
// }

// $('#b3').hover(ifHovered)

// const btnClicked = function () {
//     alert($('#my-input1').val())
// }
// $('#clickme').click(btnClicked)

// $("#b1").hover(function () {
//     console.log($(this))
// })

// $("div").hover(function () {
//     $(".box").css("background-color", "blue")
// })


// create element 
const aDynamicDiv = "<div class='mine'>Oh yes IM HERE</div>"
const elem = $(aDynamicDiv)
//console.log(elem)
// appent the element
$("body").append(elem)

// add to existing element
$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')


const text = "Banana"
const item = $(`<div class=fruit>${text}</div>`)

console.log(item)  //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

const clicked = function () {
    alert('clicked!')
}
$('button').click(clicked)

$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
  })

  // Notice the two dollar signs:


// 1. The first is for the template literal - this allows us to combine text and variables easily
// 2. The second is our normal jQuery function that converts this into a jQuery object
  
  const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

  for(let name of names){
    $("body").append(`<div>${name}</div>`)
  }

  const namesAndLastNames = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

  
//   for(let index in namesAndLastNames){
//     $("body").append(`<div>${namesAndLastNames[index].first} ${namesAndLastNames[index].last}</div>`)
//   }

for(let name of namesAndLastNames){
    $("body").append(`<div>${name.first} ${name.last}</div>`)
  }
  // remove p with class browm
  $("p").remove(".brown")

  // remonve all p in page
  $("p").remove()

  // remove when hover
  $("#plague").hover(function(){
    $("#plague").remove()
})

// post blog
$("#postblog").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(".blog").text("blargh") 
  })