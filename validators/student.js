const { check, validationResult } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .isEmail()
    .notEmpty(),
    check("address")
    .exists()
    .notEmpty(),
    check("mobile")
    .exists()
    .notEmpty(),
    check("secondary_mobile")
    .exists()
    .notEmpty(),
    check("dni")
    .exists()
    .notEmpty(),
    (req, res, next) => {
       return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
       return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateItem, validatorGetItem};