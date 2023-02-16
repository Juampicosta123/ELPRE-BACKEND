const express = require("express");
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth");
const { loginCtrl, registerCtrl } = require("../controllers/auth");

//http:localhost/api/auth/login
//http:localhost/api/auth/register

//LOGIN
router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;

