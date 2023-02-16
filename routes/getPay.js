const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");

//OBTENER PAGO
const { getPay } = require("../controllers/getPay");


router.get("/:id", authMiddleware, checkRol(["admin"]), getPay);

module.exports = router;