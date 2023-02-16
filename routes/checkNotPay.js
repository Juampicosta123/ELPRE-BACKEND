const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { checkNotPay } = require("../controllers/checkNotPay");

router.get("/", authMiddleware, checkRol(["admin"]), checkNotPay);

module.exports = router;


