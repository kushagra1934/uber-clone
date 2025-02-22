const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3, max: 20 })
      .withMessage("First name must be between 3 to 20 characters"),
    body("email").isEmail().withMessage("Invalid Email").normalizeEmail(),
    body("password").isLength({ min: 5 }).withMessage("Password too short"),
  ],
  userController.registerUser
);

module.exports = router;
