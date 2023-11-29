const express = require("express");
const { registerUser }  = require("../controllers/auth.js");
const Validate = require("../middleware/validation.js");
// const { check } = require("express-validator");

const router = express.Router();

// Register route -- POST request
router.post("/register", function(req, res) {registerUser,Validate} );

module.exports = router;
