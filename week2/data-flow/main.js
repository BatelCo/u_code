// console.log("Hello, world!")
// const posts = [
//     {
//         name: "Uncle Jerome",
//         text: "Happy birthday kido!"
//     },
//     {
//         name: "BFF Charlene",
//         text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
//     },
//     {
//         name: "Old High School Teacher",
//         text: "Hey ace, have a good one."
//     }
// ]

// const render = function () {
//     for (let post of posts) {
//         let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
//     }
// }
// render()

// $("post").on("click", function () {
//     posts.push({
//         name: $("input-name").val(),
//         text: $("input-text").val()
//     })
// })



const posts = [{
    name: "batel",
    text: "batel was here"
},
{
    name: "dave",
    text: "dave was here"
},
{
    name: "life",
    text: "life was here"
}]

const render = function () {
    for (let post of posts) {
        let postBox = $(`<div class="post">${post.name}: ${post.text}</div>`)
        $("#timeline").append(postBox)
    }
}

render()

$("#post").on("click", function () {
    const $name = $("#name")
    const $text = $("#text")
    const post = { name: $name.val(), text: $text.val() }
    posts.push(post)

    $("#posts").empty()
    render()

    $name.val("")
    $text.val("")
})


//  The Controller is what the user interacts with,
//  to update the data,
//  which triggers an update in the view.