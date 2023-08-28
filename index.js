// POST request
// GET request
// DELETE request
// PUT request

const express = require('express');

const app = express();

// middleware
app.use(express.json());

let users = [];

// GET request
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="background-color: green; padding:20px;">Welocome to our site</h1>
        <p>this is pro mc dev you know , you feeel me 😊</p>
    </body>
    </html>`);
});

app.get('/json', (req, res) => {
    res.send({ name: "Mcdev", age: "18", description: "here we go" });
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post("/register-user", (req, res) => {

    users.push(req.body);

    res.send({ message: "thank you for registering", status: "success" });

});

app.delete("/delete-user/:name", (req, res) => {

    console.log(req.params.name);
    //! = = 
    users = users.filter(user => user.username !== req.params.name);

    res.send({ message: "Thank you for", status: "success" });

});

app.listen("8000", () => console.log("SERVER is listening on 8000"));

