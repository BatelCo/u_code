// console.log("Hello, world!")
// const addDiv = function() {
//     $("body").append("<div class=box></div>");
//   };

//   $("button").on("click", function() {
//     addDiv();
//   });

//   //For any element with a class of box inside of body, add a click listener to it.
//   $("body").on("click", ".box", function() {
//     alert("hi");
//   });

// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })

//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("uncool blog")
//   })

//$("#idOfElement")

// console.log($("#myh1"));
// $(".remove").on("click", function () {
//     alert($(this).closest(".post").data().id)
// })

// $('button').on('click', function () {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
// })

// // spot check 1
// $('button').on('click', function () {
//     let relevantSpanValue = $(this).closest("div").find("span").text()
//     console.log(relevantSpanValue);
// })

// // spot check 2
// $('button').on('click', function () {
//     let findMe = $(".container").find("p").text()
//     console.log(findMe);
// })

//ex

//When the generator button is clicked

$('.generator').on('click', function () {
    let processorId = $(this).closest(".processor").attr('id')
    console.log(processorId);
    let compId = $(this).closest(".computer").attr('data-id')
    console.log(compId);
    const compIdArr = []
    compIdArr.push({ id: compId })
    //console.log(compIdArr);
    let busNum = $(this).closest(".computer").find(".BUS").text()
    console.log(busNum);
})

//When the validator button is clicked
$('.validator').on('click', function () {
    let generatorTxt = $(this).closest(".computer").find(".generator").text();
    console.log(generatorTxt);
    let mb = $(this).closest(".computer").find(".MB").text()
    console.log(mb);
    let QR = $(this).closest(".computer").find(".QR").text()
    console.log(QR);
})