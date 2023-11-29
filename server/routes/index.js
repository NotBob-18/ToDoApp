const express = require("express");
const Auth = require("../controllers/auth");

// Create an app object
const app = express();


// Reduce fingerprinting 
app.disable("x-powered-by");


app.use('/ToDoApp/Auth', Auth);


// home route with the get method and a handler
app.get("/ToDoApp", (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: [],
            message: "Welcome to our API homepage!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
});

module.exports = app;

