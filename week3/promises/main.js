// ex1

$.get('https://random-word-api.herokuapp.com/word')
    .then(function (word) {
        console.log(word)
        $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}}`)
            .then(function (books) {
                console.log(books.items[0]["volumeInfo"]["title"])
            })
    })

// ex2 

$.get('https://random-word-api.herokuapp.com/word')
    .then(function (word) {
        console.log(word)
        let title = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}}`)
        let giph = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS&limit=1`)
        Promise.all([title, giph])
            .then(function (results) {
                console.log(results[0])
                console.log(results[1].data[0].embed_url)
                $("iframe").attr("src", results[1].data[0].embed_url)
            })
    })

// //Spot Check 2
// $.get('/sentiment/Ploy')
//     .then(function (response) {
//         console.log(response)
//     })

// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/ synonyms / ${ word }`)
//     })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
//     .catch(function (error) { console.log(error) })


//     $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/ synonyms / ${ word }`)
//         let sentimentPromise = $.get(`/ sentiment / ${ word }`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     }) 