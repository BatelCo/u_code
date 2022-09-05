// console.log("Hello, world!")
// $("#my-div").click(function () {
//     $(this).attr("style", "background-color: #f39c12; height: 200px; width: 200px;");
// })

const { request } = require('urllib');

async function run() {
    const { data, res } = await request('http://data.nba.net/10s/prod/v1/2016/players.json');
    console.log(data.toString())
}
run()