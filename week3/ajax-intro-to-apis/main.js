// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function (result) {
//     console.log(result.items[0].volumeInfo.description)
// })

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     }
// })

//ex1 

// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(1440633908);


//ex2
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)

//ex3

// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             for (let book of data.items) {
//                 console.log(`title: ${book.volumeInfo.title} autor: ${book.volumeInfo.authors} isbn: ${book.volumeInfo.industryIdentifiers.map((id) => id.identifier)}`)                
//                 console.log(book);
//             }
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)

//ex4


//javascript, jQuery
// const myGet = function (api_key, query, limit) {
//     var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=${limit}`);

//     xhr.done(function (data) {
//         console.log("success got data", data);
//         $("iframe").attr("src", data.data[1].embed_url)
//     });

// }

// myGet("7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS", "cat", "5")

//ex5

const myGet = function (api_key = "7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS") {

    let limit = 5
    let query = $("#input").val()
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS&limit=${limit}`);

    xhr.done(function (data) {
        console.log("success got data", data);
        $("iframe").attr("src", data.data[0].embed_url)
    });

}
$("#btn").on("click", myGet)