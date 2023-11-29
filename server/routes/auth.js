const express = require("express");
const { Register } = require("../controllers/auth.js");
const Validate = require("../middleware/validation.js");
const { check } = require("express-validator");

const router = express.Router();

// Register route -- POST request
router.post(
  "/register",
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("You first name is required")
    .trim()
    .escape(),
  check("lastName")
    .not()
    .isEmpty()
    .withMessage("You last name is required")
    .trim()
    .escape(),
  check("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);

module.exports = router;
