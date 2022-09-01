//sp1

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521"

const fetchData = function () {
    $.get(API_URL, function (res) {
        console.log(res.items[0])
    })
}

fetchData()

const fetchDatum = async function () {
    let data = await $.get(API_URL)
    console.log(data.items[0])
}

fetchDatum()

const fetchRecipes = async function (ingredient) {
    let data1 = await $.get(`/recipe/${ingredient}`, function (recipe) {
        console.log(recipe)
    });
}

// surname ?
const fetchRecipes = async function (surname) {
    let data = await $.get(`/recipe/${ingredient}`)
    console.log(data)
}