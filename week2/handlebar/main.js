// const source = $("#post-template").html();
// const template = Handlebars.compile(source);
// const newHTML = template({ post: { text: "hello" } });
// $(".posts").append(newHTML);
// const newHTML2 = template({ post: { text: "hello2" } });
// $(".posts").append(newHTML2);

//for loop
const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: true },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
    ],
};

const source = $("#menu-template-with-if").html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);

// append our new html to the page
$(".menu").append(newHTML);

var classData = {
    classmates: [
        { name: "That on gal", description: "Always has the ansswer" },
        { name: "The weird dude", description: "Quick with a smile" },
        { name: "Taylor", description: "Just Taylor" },
    ],
};

// const source = $("#student-template").html();
// const template = Handlebars.compile(source);
// const newHTML = template(classData);

// // append our new html to the page
// $(".students").append(newHTML);
const renderFirst = function () {
    const source = $("#first-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ text: "This gets rendered" });
    $("body").append(newHTML);
};

const renderSecond = function () {
    const source = $("#second-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ moreText: "This also gets rendered" });
    $("#special").append(newHTML);
};

renderFirst();
renderSecond();

const animals = [
    "Rabbit",
    "Giraffe",
    "Kangaroo",
    "Whale",
    "Seagull",
    "Caterpie",
];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];
const renderAnimals = function () {
    const source = $("#animals-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ animals: animals });
    $(".animals").append(newHTML);
};

const renderLanguages = function () {
    const source = $("#languages-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ languages: languages });
    $(".languages").append(newHTML);
};

renderAnimals();
renderLanguages();

