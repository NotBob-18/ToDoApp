const express = require("express");

// Create an app object
const apu = express();


// Reduce fingerprinting 
apu.disable("x-powered-by");

// home route with the get method and a handler
apu.get("/ToDoApp", (req, res) => {
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

module.exports = apu;

