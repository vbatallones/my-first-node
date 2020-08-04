// //node keyword require allows us to import modules

const moment = require("moment");

//  const myModule = require('./myModule.js')

// // console.log(myModule.beBasic())
// // myModule.count()

// const fs = require('fs')
// fs.readFile('story.txt', 'utf8', (err, data)=> {
//     if(err) {
//         console.log('There was a problem reading the file')
//     } else {
//         console.log(data)
//     }
// })



// const http = require('http')http.createServer(function(reg, res) {
//     res.write('Hello World!');
//     res.end();
// }).listen(8000)
// const http = require('http') 

// http.createServer((req, res)=>{ 
//     res.write('Hello, Levin!') 
//     res.end() 
// }).listen(8000)


// let i = 1;

// const count = () => {
//     console.log(i)
//     i=i*2
// } 
// const myTimer = setInterval(count, 1000)

// const today = new Date();

// console.log(today)

// console.log(moment('11-20-1994').format("dddd [the] Do [of] MMMM [in the year] YYYY"))
const chalk = require('chalk');

console.log(chalk.red('Hello world!'))