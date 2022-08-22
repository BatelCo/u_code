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

$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
  })