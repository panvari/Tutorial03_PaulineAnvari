// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const result = sum(2, 3);

// console.log(result);

// const fs = require('fs');



// const generateFile = () => {
//     try {
//         fs.writeFileSync('data.txt', "Hi, this file was made with Node");
//     }

//     catch (err) {
//         console.log(err);
//     }
// }

// generateFile();



// const http = require ('http');

// http.createServer(function (req, res) {
//     res.write('Server started. Hi! :)')
//     res.end();
// }).listen(8080);



// const myModule = require('./my-module');

// const date = myModule();

// console.log(date);


//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying port to listen on localhost:9000
const port = 9000;

//defining API
app.get('/', (req, res) => {
    res.send("Hello from the express server! :)");
});

app.get('/api/cats', (req, res) => {
    //call the database

    //use dummy data for now
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];

    //sending response should be in JSON
    res.send(cats);
});

//running express http server on specified port
app.listen(port, () => {
    console.log("Listening on port", port);
});