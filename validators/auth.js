const { check, validationResult } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorRegister = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:7, max:15}),
    (req, res, next) => {
       return validateResults(req, res, next)
    }
];

const validatorLogin = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:7, max:15}),
    (req, res, next) => {
       return validateResults(req, res, next)
    }
];


module.exports = {validatorRegister, validatorLogin};